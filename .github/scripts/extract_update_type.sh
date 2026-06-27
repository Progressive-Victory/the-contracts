set +e

updateLine=$(echo "$1" | grep -P '(^|\s+)change: (major|minor|patch)($|\s+)')
echo $updateLine