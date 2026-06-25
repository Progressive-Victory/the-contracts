BODY="# (Name)

## Change Type

change: major
"
echo "$BODY"
GITHUB_ENV=""
echo "val=$(echo "$BODY" | grep -E '^change: (major|minor|patch)$')"

echo "val: $val"
if [ -z "$val" ]; then exit 1; fi