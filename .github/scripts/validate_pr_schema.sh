echo "$1" | grep -qP '^change: (major|minor|patch)$' || (echo "::error::Could Not Find Update SemVer Type" && exit 1)
