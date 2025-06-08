#!/bin/bash

# --- Configuration ---
APP_NAME="openxploit"
# !!! IMPORTANT: REPLACE WITH YOUR ACTUAL VERCELL URL FOR THE ARCHIVE !!!
# This URL points to the bundled archive of your application hosted on Vercel
APP_ARCHIVE_URL="https://github.com/manavnotop/openxploit-landing/releases/download/v1.0.0/openxploit-app.tar.gz" # <--- UPDATE THIS LINE
# This is where the application will be installed on the user's system
INSTALL_DIR="${HOME}/${APP_NAME}"

# --- Helper Functions ---

# Function to check if a command exists
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Function to display error messages and exit
error_exit () {
  echo "" >&2 # Add an empty line for better readability
  echo "❌ ERROR: $1" >&2
  echo "" >&2
  exit 1
}

# --- Main Script Logic ---

echo "--- 🚀 Starting ${APP_NAME} setup ---"
echo ""

# 1. Check for Docker installation
echo "🔍 Checking for Docker..."
if ! command_exists docker; then
  error_exit "Docker is not installed. Please install Docker Desktop (https://www.docker.com/products/docker-desktop/) or Docker Engine (https://docs.docker.com/engine/install/) and try again."
fi

# 2. Check if Docker daemon is running
echo "💡 Checking if Docker is running..."
if ! docker info >/dev/null 2>&1; then
  error_exit "Docker daemon is not running. Please start Docker Desktop or your Docker service."
fi

# 3. Check for Docker Compose V2 (which is 'docker compose')
echo "📦 Checking for Docker Compose V2..."
if ! docker compose version >/dev/null 2>&1; then
  error_exit "Docker Compose V2 (docker compose) is not available. Please ensure you have a recent Docker Desktop/Engine installation (V2 is typically bundled)."
fi

# 4. Check for extraction tool (tar)
echo "🔧 Checking for extraction tool (tar)..."
if ! command_exists tar; then
  error_exit "The 'tar' command is not found. This is needed to extract the application files."
fi

# 5. Create installation directory
echo "📂 Creating installation directory: ${INSTALL_DIR}"
mkdir -p "${INSTALL_DIR}" || error_exit "Failed to create installation directory at ${INSTALL_DIR}. Check permissions."

# 6. Download and extract the application archive
echo "🌐 Downloading ${APP_NAME} application files from ${APP_ARCHIVE_URL}..."
# Use curl or wget to download the archive
DOWNLOAD_CMD=""
if command_exists curl; then
  DOWNLOAD_CMD="curl -fsSL"
elif command_exists wget; then
  DOWNLOAD_CMD="wget -qO-" # wget -qO- pipes to stdout
else
  error_exit "Neither 'curl' nor 'wget' found. Please install one of them."
fi

# Navigate to the install directory
cd "${INSTALL_DIR}" || error_exit "Failed to change to installation directory: ${INSTALL_DIR}. Check permissions."

# Download and pipe directly to tar for extraction
if ! ${DOWNLOAD_CMD} "${APP_ARCHIVE_URL}" | tar -xzf -; then
  error_exit "Failed to download and extract application archive. Check URL and file integrity."
fi

# IMPORTANT: This conditional CD needs to match how your .tar.gz was created.
# If 'tar -czvf openxploit-app.tar.gz openxploit-v6/' was used:
if [ -d "${INSTALL_DIR}/openxploit-v6" ]; then
    echo "Changing into extracted application directory: ${INSTALL_DIR}/openxploit-v6"
    cd "${INSTALL_DIR}/openxploit-v6" || error_exit "Failed to change into extracted application directory."
fi
# If you used 'tar -czvf ../openxploit-app.tar.gz .' from inside 'openxploit-v6',
# then the files are already in INSTALL_DIR and the above 'cd' is NOT needed.

echo "✅ Application files extracted."

# 7. Build and start Docker containers using docker compose
echo "🚀 Building and starting Docker containers..."
echo "This might take a few minutes for the initial build."
docker compose up --build -d || error_exit "Failed to start Docker containers. Check Docker logs for details."

echo ""
echo "--- 🎉 ${APP_NAME} Setup Complete! ---"
echo ""
echo "You can now access your applications:"
echo "➡️ OpenXploit (Next.js App): http://localhost:1443"
echo ""
echo "--- Management Commands ---"
echo "To stop the application:"
echo "cd ${INSTALL_DIR} && docker compose stop"
echo ""
echo "To restart the application:"
echo "cd ${INSTALL_DIR} && docker compose start"
echo ""
echo "To stop and remove all containers, networks, and volumes (for full cleanup):"
echo "cd ${INSTALL_DIR} && docker compose down -v"
echo ""
echo "To completely remove the application files as well:"
echo "cd ${INSTALL_DIR} && docker compose down -v && cd .. && rm -rf ${INSTALL_DIR}"
echo ""

exit 0
