#/bin/bash
#Open chrome and start a simple webserver
open -a "/Applications/Google Chrome.app" "http:/localhost:8000"
python -m SimpleHTTPServer
