# Speedy Fingers

## Date: 6/29/2025

### By: Zeshan Ahmed

[LinkedIn](https://www.linkedin.com/in/zeshan-ahmed-bh/) | [GitHub](https://github.com/zeshan2001)

---

### **_Description_**

The Speedy Fingers is an interactive typing test game that helps users evaluate their typing speed (in words per minute) and measure the accuracy of their keystrokes in real-time.

---

**_Technologies Used_**

- HTML
- CSS
- JavaScript
- MockFlow (Wireframe)

---

**_Screenshots_**

#### Home Page

![Home Page](Home-page.png)

#### Play Page

![Play Page](Play-Page.png)

---

**_Pseudo-code_**

- Declare variables:

  - minute (number)
  - difficulty (string)
  - speedWPM (number)
  - accuracy(number)

- Once the user click start button:

  - sssign (minute) and (difficulty) from user input.
  - redirect the user to the play page.

- Display timer and difficulty on the page.

- Select sentences array based on chosen difficulty:

  - if difficulty === "easy", then use easySentences[].
  - else if "medium", then use mediumSentences[].
  - else, use hardSentences[].

- Use random method to select a sentence from the selected array.

- Display the selected sentence for the user to type.

- Start the countdown timer when typing begins.

- When timer === 0:

  - stop user input.
  - calculate the words per minute (WPM):
    - equation: WPM = (correct words / total time in minutes).
  - calculate the accuracy:
    - equation: accuracy = (correct characters / total time in minutes).

- Display results to the user.

- Compare each typed character with the actual sentence in real-time:
  - if the character is incorrect, Change its color to red

---

**_Credits_**

TypingTest.com: [typingtest](https://www.typingtest.com/)
