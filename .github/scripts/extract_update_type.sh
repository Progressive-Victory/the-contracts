#!/bin/bash

set +e
updateLine=$(echo "${1,,}" | grep -P '(^|\s+)change: (major|minor|patch)($|\s+)')
set -e

if [ -z "$updateLine" ]; then
    echo "::error::Could Not Find Update SemVer Type"
    exit 1
fi

echo "${updateLine:8:13}"