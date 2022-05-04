package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/mehdisbys/blockstarter-cosmos/x/blockstartercosmos/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateContributors() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-contributors [projectid] [contributor] [amount]",
		Short: "Create a new contributors",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argProjectid, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argContributor := args[1]
			argAmount := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateContributors(clientCtx.GetFromAddress().String(), argProjectid, argContributor, argAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateContributors() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-contributors [id] [projectid] [contributor] [amount]",
		Short: "Update a contributors",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argProjectid, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}

			argContributor := args[2]

			argAmount := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateContributors(clientCtx.GetFromAddress().String(), id, argProjectid, argContributor, argAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteContributors() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-contributors [id]",
		Short: "Delete a contributors by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteContributors(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
