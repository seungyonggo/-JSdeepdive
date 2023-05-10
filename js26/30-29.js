const today = new Date("2020/7/24/12:30");

today.toString();
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, "");
