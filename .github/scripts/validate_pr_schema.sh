echo "$1" | grep -q '^change: \(major\|minor\|patch\)$' || (echo "::error::Could Not Find Update SemVer Type" && exit 1)
