class uniqueCharacters {
    public static void main(String args[]) {
        String a = "abcdefghijklmnopqrstuvwxyzz";
        Boolean b = isUniqueChars(a);
        System.out.println(b);
    }

    static boolean isUniqueChars(String str) {
        if(str.length() > 128) {
            return false;
        }

        boolean char_set[] = new boolean[128];
        for(int i = 0; i < str.length(); i++) {
            // this returns a, b ,c and so on..
            // char val = str.charAt(i); 

            // returns a numeric value because the val datatype is int
            int val = str.charAt(i);
            // System.out.println(val);

            if(char_set[val]) {
                return false;
            }

            char_set[val] = true;
        }
        return true;
    }
}