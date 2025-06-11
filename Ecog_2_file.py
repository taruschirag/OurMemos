import random

def get_response(prompt):
    """
    Prompt the user until they enter a valid integer (1–4 or 9).
    """
    while True:
        try:
            val = int(input(prompt))
            if val in {1, 2, 3, 4, 9}:
                return val
            else:
                print("  Please enter 1, 2, 3, 4, or 9.")
        except ValueError:
            print("  Invalid input. Enter a number (1–4, or 9 for Don’t know).")

def assess_table(name, questions):
    """
    Asks each question in 'questions', assigns a random weight, 
    and returns the total weighted score.
    """
    print(f"\n=== {name} ===")
    total_score = 0.0
    weights = []
    for i, q in enumerate(questions, start=1):
        w = random.random()
        weights.append(w)
        print(f"\nQ{i}. {q}")
        print(f"  (weight = {w:.3f})")
        response = get_response("  Your rating (1–4, 9=Don’t know): ")
        total_score += w * response
    return total_score

def main():
    memory_questions = [
        "Remembering a few shopping items without a list.",
        "Remembering things that happened recently (such as recent outings, events in the news).",
        "Recalling conversations a few days later.",
        "Remembering where he/she has placed personal items or objects.",
        "Unknowingly repeating stories and/or questions multiple times.",
        "Remembering the current date or day of the week.",
        "Remembering he/she has already told someone something.",
        "Remembering appointments, meetings, or engagements.",
        "Remembering to do important tasks like pay bills or take medications."
    ]

    language_questions = [
        "Coming up with the right names of commonly used everyday objects (e.g., telephone, toothbrush).",
        "Verbally giving instructions to others.",
        "Finding the exact right words to use in a conversation.",
        "Communicating or expressing ideas in a conversation.",
        "Following a story in a book or on TV.",
        "Understanding the point of what other people are trying to say.",
        "Remembering the meaning of common words.",
        "Describing a program he/she has watched on TV.",
        "Understanding spoken directions or instructions."
    ]

    visuospatial_questions = [
        "Increased reliance on using electronic navigational aids (like GPS on a smart phone) to find one’s way around town.",
        "Finding his/her car in a parking lot.",
        "Finding the way to a familiar location (e.g., a long-term friend’s home).",
        "Finding his/her way around their own neighborhood.",
        "Finding his/her way around a familiar store or other building.",
        "Finding his/her way around a familiar home.",
        "Use of landmarks in the environment to find locations (e.g., turn left after the grocery store).",
        "Difficulty perceiving distances when driving or driving too close to another vehicle or other object."
    ]

    scores = {}
    scores['Memory'] = assess_table("Memory", memory_questions)
    scores['Language'] = assess_table("Language", language_questions)
    scores['Visual-Spatial'] = assess_table("Visual-Spatial & Perceptual Abilities", visuospatial_questions)

    print("\n=== Final Weighted Scores ===")
    for domain, score in scores.items():
        print(f"{domain}: {score:.2f}")

if __name__ == "__main__":
    main()
