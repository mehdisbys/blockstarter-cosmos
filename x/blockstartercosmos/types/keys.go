package types

const (
	// ModuleName defines the module name
	ModuleName = "blockstartercosmos"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_blockstartercosmos"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	ProjectKey      = "Project-value-"
	ProjectCountKey = "Project-count-"
)

const (
	ContributorsKey      = "Contributors-value-"
	ContributorsCountKey = "Contributors-count-"
)
