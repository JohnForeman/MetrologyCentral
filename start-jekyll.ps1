# Jekyll Server Startup Script
# This script ensures your local Jekyll server matches GitHub Pages

Write-Host "Cleaning Jekyll build cache..." -ForegroundColor Yellow
if (Test-Path "_site") {
    Remove-Item -Recurse -Force "_site"
}

Write-Host "Installing/updating dependencies..." -ForegroundColor Yellow
bundle install

Write-Host "Starting Jekyll server..." -ForegroundColor Green
Write-Host "Server will be available at: http://localhost:4000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Try multiple methods to start Jekyll
$jekyllStarted = $false

# Method 1: Try bundle exec jekyll
try {
    bundle exec jekyll serve --host 0.0.0.0 --port 4000
    $jekyllStarted = $true
} catch {
    Write-Host "Method 1 failed, trying alternative..." -ForegroundColor Yellow
}

# Method 2: Try with full path
if (-not $jekyllStarted) {
    try {
        $jekyllPath = "C:\Users\JohnForeman\.local\share\gem\ruby\3.4.0\bin\jekyll.bat"
        if (Test-Path $jekyllPath) {
            & $jekyllPath serve --host 0.0.0.0 --port 4000
            $jekyllStarted = $true
        }
    } catch {
        Write-Host "Method 2 failed." -ForegroundColor Yellow
    }
}

# Method 3: Manual instructions
if (-not $jekyllStarted) {
    Write-Host "Could not start Jekyll automatically." -ForegroundColor Red
    Write-Host "Please run manually:" -ForegroundColor Yellow
    Write-Host "  bundle exec jekyll serve" -ForegroundColor White
    Write-Host ""
    Write-Host "Or if that doesn't work, try:" -ForegroundColor Yellow
    Write-Host "  gem install jekyll" -ForegroundColor White
    Write-Host "  jekyll serve" -ForegroundColor White
}

