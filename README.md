# YouTube Video Control Extension

This Chrome extension allows users to control video playback on YouTube. With this extension, you can:
- Adjust playback speed
- Loop specific segments of a video
- Set a custom delay between loops

## Features:
- **Playback Speed Control**: Modify the playback speed of YouTube videos in real-time.
- **Video Looping**: Specify a start time and end time, and the video will loop that section for a specified number of times.
- **Loop Delay**: Add a delay between loops before the segment is repeated.

## Installation

### Option 1: Install the Extension Manually
If you are not familiar with the Chrome Web Store, or if you want to install the extension from a local folder, follow these steps:

1. Download the extension source code:
   - Download the ZIP of this repository or clone it using Git:
     ```bash
     git clone https://github.com/yourusername/YouTube-Video-Control-Extension.git
     ```

2. Open Chrome and navigate to the Extensions page:
   - In Chrome, open a new tab and go to: `chrome://extensions/`
   
3. Enable **Developer Mode**:
   - Toggle the **Developer mode** switch in the top right of the page.

4. Load the extension:
   - Click the **Load unpacked** button and select the folder where the extension files are located.

5. You should now see the extension's icon in your browser's extension bar!

### Option 2: Install from the Chrome Web Store (Coming Soon)
Once published, you'll be able to install the extension directly from the Chrome Web Store. Keep an eye out for the official listing!

## How to Use

1. **Playback Speed Control:**
   - Click on the extension's icon in your browser.
   - Use the input box to adjust the playback speed (e.g., 1.5 for 1.5x speed).
   - Click **Apply Speed** to apply the change.
   
2. **Video Looping:**
   - In the extension popup, enter the start and end times of the segment you want to loop (in HH:MM:SS format).
   - Specify how many times you want to loop this segment.
   - Set the delay time between each loop.
   - Click **Apply Loop** to apply the loop settings.

3. **Preview Segment**:
   - You can preview the segment you’ve set for looping before applying the loop settings.
   - Click **Preview Segment** to watch the selected section of the video.

## Contributing

Feel free to fork the repository, create a branch, and submit pull requests. Here are a few ways you can contribute:
- Bug fixes
- New features or enhancements
- Suggestions for improvements

To get started:
1. Fork the repository.
2. Clone your fork to your local machine:
   ```bash
   git clone https://github.com/yourusername/YouTube-Video-Control-Extension.git
