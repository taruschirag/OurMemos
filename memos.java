import java.util.Scanner;

public class memos {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("ADNI ECog Weighted Dementia Risk Scorer\n");

        System.out.print("Participant #: ");
        String part = in.nextLine();
        System.out.print("Examiner Initials: ");
        String ex = in.nextLine();
       

        String[] qs = {
            "1. Remembering where you placed personal items",
            "2. Remembering current date or day of week",
            "3. Expressing ideas in conversation",
            "4. Understanding spoken instructions",
            "5. Judging distance when driving",
            "6. Finding your way around a familiar home",
            "7. Anticipating weather changes and planning",
            "8. Planning a trip or outing",
            "9. Keeping living/work space organized",
            "10. Managing bill payments",
            "11. Doing two things at once",
            "12. Working on a task while talking to someone"
        };

        double[] w = {1.4, 1.4, 1.1, 1.1, 1.0, 1.0, 1.2, 1.2, 1.1, 1.4, 1.3, 1.3};

        double sum = 0, max = 0;
        System.out.println("\nRate 1 (No change/better) to 4 (Much worse). Use 9 = Don't know.");
        for (int i = 0; i < qs.length; i++) {
            System.out.print(qs[i] + ": ");
            int r = in.nextInt();
            if (r >= 1 && r <= 4) {
                sum += r * w[i];
                max += 4 * w[i];
            }
        }
        in.close();

        double score = (sum / max) * 10;
        score = Math.round(score * 10) / 10.0;

        System.out.println("Participant #: " + part);
        System.out.println("Examiner: " + ex);
        System.out.println("Weighted Dementia Risk Score (1–10): " + score);
    }
}
