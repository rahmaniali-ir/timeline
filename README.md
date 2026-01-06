# Timeline

**Timeline** is an interactive web application that visualizes the entire history of the universe in a linear timeline format. From the Big Bang to the present day, explore historical events filtered by customizable tags to focus on specific aspects of history.

## Overview

Timeline presents all of history in a single, scrollable linear view. Events are displayed chronologically and can be filtered using a tag-based system, allowing you to explore different aspects of history—from cosmic events to human civilizations to specific regions.

## Features

- **Comprehensive Historical Coverage**: Events spanning from the Big Bang (~13.8 billion years ago) to the present day
- **Tag-Based Filtering**: Toggle active tags to show or hide specific categories of events
  - **Cosmic**: Universe formation, planetary events, and natural history
  - **History**: Human civilizations and historical milestones
  - **Iran**: Events specific to Iranian history
- **Customizable Year Range**: Set custom start and end years to focus on specific time periods
- **Rich Event Details**: Each event includes:
  - Title and description
  - Start and end dates (for events with duration)
  - Related links (e.g., Wikipedia)
  - Images
  - Tag associations
- **Interactive Timeline**: Navigate through history with an intuitive, scrollable interface

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - UI components
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd timeline
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── core/          # Main timeline components
│   ├── icons/         # Custom icon components
│   └── ui/            # Reusable UI components
├── constants/
│   ├── events.ts      # Historical events data
│   └── tags.ts        # Event tags configuration
├── contexts/
│   └── timeline.tsx   # Timeline state management
├── types/
│   └── event.ts       # TypeScript type definitions
└── App.tsx            # Main application component
```

## How It Works

1. **Event Filtering**: Events are filtered based on active tags. Only events that have at least one active tag are displayed on the timeline.

2. **Year Range Selection**: Use the year inputs in the top-left corner to set the visible time range. The timeline will show events within this range.

3. **Tag Management**: Click the "Tags" button in the top-right corner to open the tag panel. Toggle tags on or off to filter events by category.

4. **Timeline Navigation**: Scroll through the timeline to explore different time periods. Events are positioned chronologically along the timeline.

## Contributing

Contributions are welcome! To add new events or tags:

1. Add events to `src/constants/events.ts`
2. Add new tags to `src/constants/tags.ts` if needed
3. Ensure events include appropriate tags for filtering

## License

[Add your license here]
