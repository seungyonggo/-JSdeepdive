const x = 15;
x.toString(2);
parseInt(x.toString(2), 2);
x.toString(8);
parseInt(x.toString(8), 8);
x.toString(16);
parseInt(x.toString(16), 16);
x.toString();
parseInt(x.toString());

parseInt("0xf");
parseInt("f", 16);
parseInt("0b10");
parseInt("0o10");

parseInt("10", 2);
parseInt("10", 8);

parseInt("A0");
parseInt("20", 2);

parseInt("1A0");
parseInt("120", 2);
parseInt("58", 8);
parseInt("FG", 16);

parseInt("34 45 66");
parseInt("40 years");
parseInt("He was 40");
parseInt(" 60 ");
