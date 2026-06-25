echo "$1" | grep -qP '(^|\s+)change: (major|minor|patch)($|\s+)' || (echo "::error::Could Not Find Update SemVer Type" && exit 1)
