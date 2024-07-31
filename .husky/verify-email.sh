#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

# get mail info from the current commit
EMAIL_LOCAL=$(git config user.email)
VERIFY_EMAIL_DOMAIN="@gmail"

if [[ !$EMAIL_LOCAL == *VERIFY_EMAIL_DOMAIN* ]]; then
    echo "Email not valid: $EMAIL_LOCAL, please use the verify email domain"
    exit 1
fi
