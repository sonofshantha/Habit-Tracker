# Habit Tracker Application

## Description

The **Habit Tracker** application is a simple tool that allows users to track their habits on a daily basis. Users can mark habits as **Done**, **Not Done**, or **None** for each day. The app lets users manage habits over a 7-day period, and users can modify the status for any day, even in the past. This project is built using **Node.js**, **Express**, **MongoDB**, and **EJS**.

## Features

- **Add Multiple Habits**: Track various habits such as reading, exercising, etc.
- **Track Habits for 7 Days**: View the status of habits for the last 7 days and modify their statuses.
- **Daily Habit Statuses**: Each day you can mark a habit as:
  - **Done**: The habit was completed on that day.
  - **Not Done**: The habit was not completed on that day.
  - **None**: No action was taken for the habit that day.
- **Modify Past Habit Statuses**: Change the habit status for previous days (up to 6 days in the past).
- **Simple User Model**: The app uses a default user, so no authentication is needed.
- **MongoDB for Data Persistence**: All data is stored in a MongoDB database.
### Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** (version 16 or above)
- **MongoDB** (either locally or using MongoDB Atlas)

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/habit-tracker.git
   cd habit-tracker
