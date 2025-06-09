# basen

## Overview

Welcome to Base_n, an exciting Next.js web application that tests your
skills in converting numbers across different number systems!

In this game, you'll face a series of questions designed to challenge
both your knowledge and speed. Each question offers four answer
options, but only one is correct.

Beware—the clock is ticking! Your score depends on your accuracy and
how quickly you respond; the less time you have left, the lower your
score will be.

The game continues indefinitely, and you will lose if you run out of
lives, so play wisely as you start with three lives.

What makes Base_n truly exciting is that each question is generated
randomly, ensuring that every game is a fresh challenge as you convert
from one number system to another!

## How to Run the Web App

To dive into the fun, follow these steps:

1. **Install Docker Desktop**: 
   - Go to the [Docker Desktop website](https://www.docker.com/products/docker-desktop).
   - Click on the "Get Docker" button and follow the instructions to download and install Docker Desktop on your computer. Just follow the prompts, and it will set everything up for you, including WSL if needed.

2. **Download the Game**: 
   - Click on the "Code" button on this repository page.
   - Select "Download ZIP" to save the game files to your computer.
   - Once downloaded, locate the ZIP file in your Downloads folder and double-click it to unzip the files.

3. **Open Docker Desktop**: 
   - After installation, open Docker Desktop. Wait for it to start up completely. You should see a Docker icon in your system tray.

4. **Host a Hotspot (Windows 11)**: 
   - Click on the **Start** menu and go to **Settings**.
   - Select **Network & Internet** from the left sidebar.
   - Click on **Mobile hotspot**.
   - Toggle the switch to **On** to enable the hotspot.
   - Choose the network connection you want to share (e.g., Wi-Fi or Ethernet) and configure the network name and password if needed.

5. **Open Command Prompt**: 
   - Press the `Windows` key on your keyboard, type "cmd," and press `Enter` to open the Command Prompt.

6. **Check Docker Compose**: 
   - In the Command Prompt, type `docker-compose --version` and press `Enter`. This will show the version of Docker Compose if it is installed correctly.

7. **Navigate to the Game Folder**: 
   - In the Command Prompt, type `cd ` (make sure to include a space after `cd`).
   - Drag and drop the folder where you unzipped the game files into the Command Prompt window. This will automatically add the folder path.
   - Press `Enter` to navigate to that folder.

8. **Run the Game**: 
   - In the Command Prompt, type `docker-compose up` and press `Enter`. This command will start the game.
   - Wait for a few moments until you see messages indicating that the app is running.

9. **Play the Game**: 
   - Open your web browser (like Chrome or Firefox).
   - Type `http://localhost:3000` in the address bar and press `Enter` to start playing Base_n!

## Contributing

Yes, please do! See [CONTRIBUTING][] for guidelines.

## License

See [COPYING][]. Copyright (c) 2025 Solis et al.


[CONTRIBUTING]: ./CONTRIBUTING.md
[COPYING]: ./COPYING
