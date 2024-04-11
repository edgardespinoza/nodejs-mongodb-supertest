#!/bin/bash

# URL to send HTTP request to
URL="http://localhost:3001/api"

# Number of times to execute the HTTP request
REQUEST_COUNT=100

# Loop to execute the HTTP request multiple times
for ((i = 1; i <= REQUEST_COUNT; i++)); do
    echo "Sending request ${i}..."
    
    # Send HTTP GET request using curl (adjust options as needed)
    curl -s -o /dev/null -w "Response code: %{http_code}\n" "$URL"
    
    # Add a delay between requests (optional)
    sleep 1  # Adjust sleep duration if needed
done

echo "All requests sent."