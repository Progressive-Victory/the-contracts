#!/bin/bash

echo "$1"
echo "$1" | grep '^change: \(major\|minor\|patch\)$'
read val < <(echo "$1" | grep -E '^change: (major|minor|patch)$')
echo "val: $val"
#if [ -z "$val" ]; then exit 1; fi
