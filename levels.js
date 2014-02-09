var levels =
[[{"l1":1,"l2":1,"rows":3,"columns":3,"none":[1,2,3,4,6,7,8],"lasers":[{"cell":1,"side":"n","dir":"se"}],"targets":[{"cell":3,"side":"n"}],"cells":[{"type":"mirror","arr":[9]}],"solution":[{"type":"mirror","arr":[5]}]},{"l1":1,"l2":2,"rows":3,"columns":3,"none":[3,5,7],"lasers":[{"cell":7,"side":"s","dir":"ne"}],"targets":[{"cell":4,"side":"e"}],"cells":[{"type":"mirror","arr":[1,9]}],"solution":[{"type":"mirror","arr":[2,6]}]},{"l1":1,"l2":3,"rows":3,"columns":3,"none":[3],"lasers":[{"cell":3,"side":"n","dir":"sw"}],"targets":[{"cell":8,"side":"s"}],"cells":[{"type":"mirror","arr":[1,6]}],"solution":[{"type":"mirror","arr":[4,9]}]},{"l1":1,"l2":4,"rows":3,"columns":3,"none":[4,6],"lasers":[{"cell":4,"side":"w","dir":"se"}],"targets":[{"cell":6,"side":"e"}],"cells":[{"type":"mirror","arr":[1,5,9]}],"solution":[{"type":"mirror","arr":[2,7,9]}]},{"l1":1,"l2":5,"rows":3,"columns":3,"none":[5,7,9],"lasers":[{"cell":7,"side":"s","dir":"ne"}],"targets":[{"cell":9,"side":"s"}],"cells":[{"type":"mirror","arr":[1,3,8]}],"solution":[{"type":"mirror","arr":[2,4,6]}]},{"l1":1,"l2":6,"rows":6,"columns":4,"none":[3,4,5,6,7,8,10,11,12,14,16,17,18,19,22,24],"lasers":[{"cell":4,"side":"s","dir":"sw"}],"targets":[{"cell":3,"side":"s"}],"cells":[{"type":"mirror","arr":[2,9,15,21]}],"solution":[{"type":"mirror","arr":[9,13,20,23]}]},{"l1":1,"l2":7,"rows":5,"columns":3,"none":[1,2,5,7,11,13,14],"lasers":[{"cell":14,"side":"s","dir":"ne"}],"targets":[{"cell":2,"side":"n"},{"cell":5,"side":"n"},{"cell":8,"side":"n"},{"cell":11,"side":"n"},{"cell":14,"side":"n"}],"cells":[{"type":"mirror","arr":[4,6,8,10,12]}],"solution":[{"type":"mirror","arr":[3,4,9,10,15]}]},{"l1":1,"l2":8,"rows":3,"columns":3,"none":[1,2,6,9],"lasers":[{"cell":1,"side":"w","dir":"se"}],"targets":[{"cell":9,"side":"s"}],"cells":[{"type":"blackhole","arr":[5,8]}],"solution":[{"type":"blackhole","arr":[3,7]}]},{"l1":1,"l2":9,"rows":5,"columns":3,"none":[1,2,3,5,9,10,13,14,15],"lasers":[{"cell":15,"side":"e","dir":"nw"}],"targets":[{"cell":3,"side":"e"},{"cell":9,"side":"e"}],"cells":[{"type":"mirror","arr":[4]},{"type":"glass","arr":[6]}],"solution":[{"type":"mirror","arr":[7]},{"type":"glass","arr":[11]}]},{"l1":1,"l2":10,"rows":3,"columns":3,"none":[3,8],"lasers":[{"cell":8,"side":"s","dir":"nw"}],"targets":[{"cell":4,"side":"w"}],"cells":[{"type":"mirror","arr":[1,9]},{"type":"mirror_stuck","arr":[7]}],"solution":[{"type":"mirror","arr":[2,6]},{"type":"mirror_stuck","arr":[7]}]}],[{"l1":2,"l2":1,"rows":4,"columns":4,"none":[4,6,10,12,13,16],"lasers":[{"cell":13,"side":"s","dir":"ne"}],"targets":[{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[2,5,15]}],"solution":[{"type":"mirror","arr":[3,8,9]}]},{"l1":2,"l2":2,"rows":3,"columns":3,"none":[5],"lasers":[{"cell":2,"side":"n","dir":"se"}],"targets":[{"cell":1,"side":"e"}],"cells":[{"type":"mirror","arr":[1,6,7,8]}],"solution":[{"type":"mirror","arr":[3,4,6,8]}]},{"l1":2,"l2":3,"rows":5,"columns":4,"none":[4,14,17],"lasers":[{"cell":10,"side":"s","dir":"sw"}],"targets":[{"cell":5,"side":"e"}],"cells":[{"type":"mirror","arr":[8,9,15,20]}],"solution":[{"type":"mirror","arr":[2,12,13,18]}]},{"l1":2,"l2":4,"rows":5,"columns":4,"none":[4,9,20],"lasers":[{"cell":9,"side":"w","dir":"se"}],"targets":[{"cell":5,"side":"s"},{"cell":6,"side":"e"},{"cell":11,"side":"s"},{"cell":13,"side":"e"}],"cells":[{"type":"mirror","arr":[7,10,16]}],"solution":[{"type":"mirror","arr":[2,12,18]}]},{"l1":2,"l2":5,"rows":6,"columns":4,"none":[1],"lasers":[{"cell":1,"side":"w","dir":"se"}],"targets":[{"cell":20,"side":"e"}],"cells":[{"type":"mirror","arr":[3,10,12,22]},{"type":"blackhole_stuck","arr":[15]}],"solution":[{"type":"mirror","arr":[11,13,16,23]},{"type":"blackhole_stuck","arr":[15]}]},{"l1":2,"l2":6,"rows":6,"columns":4,"none":[7,9,11,24],"lasers":[{"cell":11,"side":"s","dir":"nw"}],"targets":[{"cell":18,"side":"s"}],"cells":[{"type":"mirror","arr":[2,4,19,20]}],"solution":[{"type":"mirror","arr":[2,5,12,17]}]},{"l1":2,"l2":7,"rows":5,"columns":4,"none":[],"lasers":[{"cell":1,"side":"w","dir":"se"}],"targets":[{"cell":14,"side":"s"}],"cells":[{"type":"mirror","arr":[5,7,11,16,18]},{"type":"mirror_stuck","arr":[10]}],"solution":[{"type":"mirror","arr":[3,8,13,16,19]},{"type":"mirror_stuck","arr":[10]}]},{"l1":2,"l2":8,"rows":6,"columns":4,"none":[4,5,15,23],"lasers":[{"cell":4,"side":"n","dir":"sw"}],"targets":[{"cell":14,"side":"s"},{"cell":18,"side":"s"}],"cells":[{"type":"mirror","arr":[12,21,24]}],"solution":[{"type":"mirror","arr":[6,12,17]}]},{"l1":2,"l2":9,"rows":4,"columns":4,"none":[4,14],"lasers":[{"cell":14,"side":"e","dir":"nw"}],"targets":[{"cell":5,"side":"s"},{"cell":7,"side":"e"}],"cells":[{"type":"mirror","arr":[1,3,11,13,16]}],"solution":[{"type":"mirror","arr":[2,3,8,9,11]}]},{"l1":2,"l2":10,"rows":5,"columns":4,"none":[4,17,18],"lasers":[{"cell":18,"side":"e","dir":"nw"}],"targets":[{"cell":2,"side":"e"},{"cell":11,"side":"e"}],"cells":[{"type":"mirror","arr":[1,6,8,15,20]}],"solution":[{"type":"mirror","arr":[5,7,12,13,15]}]}],[{"l1":3,"l2":1,"rows":5,"columns":4,"none":[],"lasers":[{"cell":9,"side":"w","dir":"se"}],"targets":[{"cell":6,"side":"s"}],"cells":[{"type":"mirror","arr":[1,4,17,20]},{"type":"blackhole_stuck","arr":[10]}],"solution":[{"type":"mirror","arr":[2,5,12,18]},{"type":"blackhole_stuck","arr":[10]}]},{"l1":3,"l2":2,"rows":4,"columns":4,"none":[],"lasers":[{"cell":3,"side":"n","dir":"sw"}],"targets":[{"cell":6,"side":"s"},{"cell":7,"side":"s"},{"cell":10,"side":"s"},{"cell":11,"side":"s"}],"cells":[{"type":"mirror","arr":[1,4,13,16]}],"solution":[{"type":"mirror","arr":[5,7,12,15]}]},{"l1":3,"l2":3,"rows":3,"columns":4,"none":[],"lasers":[{"cell":2,"side":"n","dir":"se"}],"targets":[{"cell":2,"side":"e"},{"cell":5,"side":"e"},{"cell":6,"side":"e"},{"cell":7,"side":"e"},{"cell":10,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,9,12]}],"solution":[{"type":"mirror","arr":[3,5,8,10]}]},{"l1":3,"l2":4,"rows":3,"columns":4,"none":[],"lasers":[{"cell":4,"side":"n","dir":"sw"}],"targets":[{"cell":5,"side":"e"},{"cell":6,"side":"e"},{"cell":7,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,9,12]}],"solution":[{"type":"mirror","arr":[2,5,10,11]}]},{"l1":3,"l2":5,"rows":5,"columns":3,"none":[],"lasers":[{"cell":2,"side":"e","dir":"sw"}],"targets":[{"cell":14,"side":"s"}],"cells":[{"type":"mirror","arr":[1,3,13,15]}],"solution":[{"type":"mirror","arr":[4,9,10,15]}]},{"l1":3,"l2":6,"rows":5,"columns":4,"none":[8,9,19],"lasers":[{"cell":9,"side":"w","dir":"se"}],"targets":[{"cell":6,"side":"e"},{"cell":10,"side":"e"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,17,20]}],"solution":[{"type":"mirror","arr":[2,5,12,18]}]},{"l1":3,"l2":7,"rows":5,"columns":4,"none":[5,9,12,19],"lasers":[{"cell":9,"side":"w","dir":"se"}],"targets":[{"cell":6,"side":"e"},{"cell":10,"side":"e"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,17,20]}],"solution":[{"type":"mirror","arr":[3,8,13,18]}]},{"l1":3,"l2":8,"rows":5,"columns":4,"none":[],"lasers":[{"cell":1,"side":"s","dir":"se"}],"targets":[{"cell":5,"side":"w"},{"cell":11,"side":"s"}],"cells":[{"type":"mirror","arr":[1,4,17,20]},{"type":"mirror_stuck","arr":[9]},{"type":"blackhole_stuck","arr":[12]}],"solution":[{"type":"mirror","arr":[2,7,16,19]},{"type":"mirror_stuck","arr":[9]},{"type":"blackhole_stuck","arr":[12]}]},{"l1":3,"l2":9,"rows":5,"columns":4,"none":[],"lasers":[{"cell":5,"side":"w","dir":"se"}],"targets":[{"cell":5,"side":"e"},{"cell":11,"side":"e"},{"cell":13,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,17,20]}],"solution":[{"type":"mirror","arr":[2,9,12,18]}]},{"l1":3,"l2":10,"rows":4,"columns":4,"none":[],"lasers":[{"cell":4,"side":"s","dir":"sw"},{"cell":5,"side":"w","dir":"se"}],"targets":[{"cell":6,"side":"s"},{"cell":7,"side":"s"},{"cell":9,"side":"s"},{"cell":12,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,13,16]}],"solution":[{"type":"mirror","arr":[3,6,11,14]}]}],[{"l1":4,"l2":1,"rows":6,"columns":4,"none":[3,10,11,21],"lasers":[{"cell":16,"side":"e","dir":"sw"}],"targets":[{"cell":1,"side":"s"},{"cell":7,"side":"e"}],"cells":[{"type":"mirror","arr":[8,18]},{"type":"glass","arr":[9]}],"solution":[{"type":"mirror","arr":[13,23]},{"type":"glass","arr":[20]}]},{"l1":4,"l2":2,"rows":6,"columns":4,"none":[1,4,7,11,14,21,24],"lasers":[{"cell":24,"side":"e","dir":"nw"}],"targets":[{"cell":5,"side":"e"}],"cells":[{"type":"mirror","arr":[8,16,17,22,23]}],"solution":[{"type":"mirror","arr":[2,10,12,13,18]}]},{"l1":4,"l2":3,"rows":6,"columns":4,"none":[2,5,8,11,13,14,19,21,24],"lasers":[{"cell":3,"side":"n","dir":"se"}],"targets":[{"cell":23,"side":"s"}],"cells":[{"type":"mirror","arr":[6,7,9,10,12,15,16,17,18,22]}],"solution":[{"type":"mirror","arr":[1,4,6,9,12,15,16,17,20,22]}]},{"l1":4,"l2":4,"rows":6,"columns":4,"none":[1,2,4],"lasers":[{"cell":1,"side":"e","dir":"se"}],"targets":[{"cell":17,"side":"s"},{"cell":18,"side":"s"},{"cell":19,"side":"s"},{"cell":20,"side":"s"}],"cells":[{"type":"mirror","arr":[22]},{"type":"glass","arr":[3,9,15]}],"solution":[{"type":"mirror","arr":[12]},{"type":"glass","arr":[14,17,20]}]},{"l1":4,"l2":5,"rows":5,"columns":5,"none":[3,23],"lasers":[{"cell":11,"side":"w","dir":"se"}],"targets":[{"cell":6,"side":"e"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[1,5,13,21,25]}],"solution":[{"type":"mirror","arr":[2,9,15,19,22]}]},{"l1":4,"l2":6,"rows":6,"columns":4,"none":[1,2,8,14,21],"lasers":[{"cell":6,"side":"e","dir":"se"}],"targets":[{"cell":14,"side":"e"},{"cell":19,"side":"e"}],"cells":[{"type":"mirror","arr":[5,22]}],"solution":[{"type":"mirror","arr":[7,9]}]},{"l1":4,"l2":7,"rows":6,"columns":4,"none":[4,11,13,24],"lasers":[{"cell":1,"side":"e","dir":"se"}],"targets":[{"cell":7,"side":"e"},{"cell":18,"side":"s"}],"cells":[{"type":"mirror","arr":[9,14,23]},{"type":"glass","arr":[3]}],"solution":[{"type":"mirror","arr":[10,12,17]},{"type":"glass","arr":[15]}]},{"l1":4,"l2":8,"rows":5,"columns":3,"none":[],"lasers":[{"cell":8,"side":"s","dir":"ne"}],"targets":[{"cell":1,"side":"w"},{"cell":13,"side":"s"},{"cell":15,"side":"e"}],"cells":[{"type":"glass","arr":[3,10,14]}],"solution":[{"type":"glass","arr":[8,9,12]}]},{"l1":4,"l2":9,"rows":5,"columns":5,"none":[1,5,14,21,25],"lasers":[{"cell":9,"side":"s","dir":"sw"}],"targets":[{"cell":7,"side":"e"},{"cell":7,"side":"s"},{"cell":8,"side":"e"},{"cell":12,"side":"s"},{"cell":14,"side":"s"},{"cell":17,"side":"e"},{"cell":18,"side":"e"}],"cells":[{"type":"mirror","arr":[13,16,20,22,24]}],"solution":[{"type":"mirror","arr":[3,11,15,17,23]}]},{"l1":4,"l2":10,"rows":5,"columns":4,"none":[4,7],"lasers":[{"cell":11,"side":"e","dir":"nw"}],"targets":[{"cell":7,"side":"s"},{"cell":10,"side":"s"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[2,5,14,17]},{"type":"blackhole_stuck","arr":[16,20]},{"type":"glass_stuck","arr":[8]}],"solution":[{"type":"mirror","arr":[3,6,13,18]},{"type":"blackhole_stuck","arr":[16,20]},{"type":"glass_stuck","arr":[8]}]}],[{"l1":5,"l2":1,"rows":4,"columns":3,"none":[],"lasers":[{"cell":4,"side":"s","dir":"se"},{"cell":7,"side":"s","dir":"ne"}],"targets":[{"cell":7,"side":"w"},{"cell":9,"side":"e"}],"cells":[{"type":"mirror","arr":[2,5,11]}],"solution":[{"type":"mirror","arr":[2,6,11]}]},{"l1":5,"l2":2,"rows":5,"columns":4,"none":[8,17],"lasers":[{"cell":6,"side":"s","dir":"se"},{"cell":10,"side":"s","dir":"ne"}],"targets":[{"cell":6,"side":"e"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[7,15,18]}],"solution":[{"type":"mirror","arr":[9,16,19]}]},{"l1":5,"l2":3,"rows":4,"columns":3,"none":[],"lasers":[{"cell":1,"side":"e","dir":"se"},{"cell":2,"side":"e","dir":"sw"}],"targets":[{"cell":10,"side":"e"},{"cell":11,"side":"e"}],"cells":[{"type":"mirror","arr":[3,4,9,11]}],"solution":[{"type":"mirror","arr":[4,6,7,9]}]},{"l1":5,"l2":4,"rows":5,"columns":4,"none":[3,19],"lasers":[{"cell":5,"side":"s","dir":"se"},{"cell":9,"side":"s","dir":"ne"}],"targets":[{"cell":2,"side":"n"},{"cell":10,"side":"e"},{"cell":18,"side":"s"}],"cells":[{"type":"mirror","arr":[5,6,12,17]}],"solution":[{"type":"mirror","arr":[6,8,14,16]}]},{"l1":5,"l2":5,"rows":5,"columns":4,"none":[10,11,17,18],"lasers":[{"cell":6,"side":"s","dir":"se"},{"cell":10,"side":"s","dir":"ne"}],"targets":[{"cell":3,"side":"n"},{"cell":19,"side":"s"}],"cells":[{"type":"mirror","arr":[2,4,5,9,16]}],"solution":[{"type":"mirror","arr":[5,7,12,13,15]}]},{"l1":5,"l2":6,"rows":5,"columns":4,"none":[6,9,17],"lasers":[{"cell":5,"side":"s","dir":"se"},{"cell":9,"side":"s","dir":"ne"}],"targets":[{"cell":2,"side":"n"},{"cell":18,"side":"s"}],"cells":[{"type":"mirror","arr":[3,4,7,12,14,20]}],"solution":[{"type":"mirror","arr":[3,5,8,13,16,19]}]},{"l1":5,"l2":7,"rows":5,"columns":4,"none":[4,10,17,20],"lasers":[{"cell":5,"side":"s","dir":"se"},{"cell":9,"side":"s","dir":"ne"}],"targets":[{"cell":5,"side":"w"},{"cell":11,"side":"e"},{"cell":13,"side":"w"}],"cells":[{"type":"mirror","arr":[6,7,14,15]}],"solution":[{"type":"mirror","arr":[2,9,12,18]}]},{"l1":5,"l2":8,"rows":6,"columns":4,"none":[2],"lasers":[{"cell":1,"side":"e","dir":"se"},{"cell":2,"side":"e","dir":"sw"}],"targets":[{"cell":3,"side":"s"},{"cell":7,"side":"s"},{"cell":11,"side":"s"},{"cell":15,"side":"s"},{"cell":19,"side":"s"}],"cells":[{"type":"mirror","arr":[3,8,10,16,18]}],"solution":[{"type":"mirror","arr":[5,10,12,14,20]}]},{"l1":5,"l2":9,"rows":3,"columns":4,"none":[7],"lasers":[{"cell":1,"side":"s","dir":"se"},{"cell":5,"side":"s","dir":"ne"}],"targets":[{"cell":3,"side":"n"},{"cell":10,"side":"s"}],"cells":[{"type":"mirror","arr":[1,9,12]},{"type":"blackhole","arr":[2,4,8,11]}],"solution":[{"type":"mirror","arr":[2,8,11]},{"type":"blackhole","arr":[1,4,9,12]}]},{"l1":5,"l2":10,"rows":5,"columns":4,"none":[1,10,12,20],"lasers":[{"cell":1,"side":"s","dir":"se"},{"cell":5,"side":"s","dir":"ne"}],"targets":[{"cell":7,"side":"e"},{"cell":9,"side":"s"},{"cell":16,"side":"s"}],"cells":[{"type":"mirror","arr":[3,4,14,15,17,19]}],"solution":[{"type":"mirror","arr":[2,3,8,11,13,18]}]}],[{"l1":6,"l2":1,"rows":4,"columns":4,"none":[],"lasers":[{"cell":13,"side":"e","dir":"ne"}],"targets":[{"cell":2,"side":"n"},{"cell":6,"side":"e"},{"cell":9,"side":"e"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[4,15]},{"type":"glass","arr":[12]}],"solution":[{"type":"mirror","arr":[8,9]},{"type":"glass","arr":[3]}]},{"l1":6,"l2":2,"rows":4,"columns":4,"none":[9,12],"lasers":[{"cell":13,"side":"e","dir":"ne"}],"targets":[{"cell":2,"side":"n"},{"cell":6,"side":"e"},{"cell":9,"side":"e"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,15]},{"type":"glass","arr":[11]}],"solution":[{"type":"mirror","arr":[3,5,8]},{"type":"glass","arr":[10]}]},{"l1":6,"l2":3,"rows":6,"columns":4,"none":[4,16,21],"lasers":[{"cell":9,"side":"w","dir":"se"}],"targets":[{"cell":7,"side":"s"},{"cell":10,"side":"e"},{"cell":11,"side":"e"},{"cell":11,"side":"s"},{"cell":19,"side":"s"}],"cells":[{"type":"mirror","arr":[7,10,11,12,15]}],"solution":[{"type":"mirror","arr":[6,7,12,13,15]}]},{"l1":6,"l2":4,"rows":5,"columns":4,"none":[],"lasers":[{"cell":4,"side":"s","dir":"sw"}],"targets":[{"cell":6,"side":"s"},{"cell":8,"side":"s"},{"cell":15,"side":"s"}],"cells":[{"type":"mirror","arr":[1,3,5,18,20]}],"solution":[{"type":"mirror","arr":[6,9,14,16,19]}]},{"l1":6,"l2":5,"rows":6,"columns":4,"none":[],"lasers":[{"cell":12,"side":"s","dir":"nw"},{"cell":24,"side":"e","dir":"nw"}],"targets":[{"cell":3,"side":"e"},{"cell":6,"side":"s"},{"cell":8,"side":"e"},{"cell":13,"side":"s"},{"cell":15,"side":"e"}],"cells":[{"type":"mirror","arr":[2,18]},{"type":"glass","arr":[23]}],"solution":[{"type":"mirror","arr":[6,9]},{"type":"glass","arr":[11]}]},{"l1":6,"l2":6,"rows":5,"columns":5,"none":[1,5,13,21,25],"lasers":[{"cell":1,"side":"e","dir":"se"},{"cell":10,"side":"s","dir":"sw"}],"targets":[{"cell":8,"side":"e"},{"cell":13,"side":"e"},{"cell":15,"side":"s"},{"cell":18,"side":"e"},{"cell":21,"side":"e"}],"cells":[{"type":"mirror","arr":[3,6,12,16,24]}],"solution":[{"type":"mirror","arr":[4,12,14,15,24]}]},{"l1":6,"l2":7,"rows":5,"columns":5,"none":[15],"lasers":[{"cell":1,"side":"e","dir":"se"},{"cell":10,"side":"s","dir":"sw"}],"targets":[{"cell":8,"side":"e"},{"cell":13,"side":"e"},{"cell":15,"side":"s"},{"cell":18,"side":"e"},{"cell":21,"side":"e"}],"cells":[{"type":"mirror","arr":[3,5,6,12,16,24]}],"solution":[{"type":"mirror","arr":[3,9,11,13,19,23]}]},{"l1":6,"l2":8,"rows":5,"columns":5,"none":[1,5,21,25],"lasers":[{"cell":5,"side":"e","dir":"sw"}],"targets":[{"cell":7,"side":"e"},{"cell":7,"side":"s"},{"cell":8,"side":"e"},{"cell":12,"side":"s"},{"cell":14,"side":"s"},{"cell":17,"side":"e"},{"cell":18,"side":"e"}],"cells":[{"type":"mirror","arr":[16,20,22,24]},{"type":"glass_stuck","arr":[13]}],"solution":[{"type":"mirror","arr":[3,11,14,23]},{"type":"glass_stuck","arr":[13]}]},{"l1":6,"l2":9,"rows":6,"columns":4,"none":[],"lasers":[{"cell":4,"side":"n","dir":"sw"}],"targets":[{"cell":1,"side":"s"},{"cell":9,"side":"e"},{"cell":11,"side":"s"},{"cell":18,"side":"s"}],"cells":[{"type":"mirror","arr":[2,6,8,13,19,21,24]}],"solution":[{"type":"mirror","arr":[9,11,13,16,17,19,22]}]},{"l1":6,"l2":10,"rows":6,"columns":6,"none":[3,6,11,13,15,23,27,28],"lasers":[{"cell":7,"side":"e","dir":"se"}],"targets":[{"cell":8,"side":"e"},{"cell":9,"side":"e"},{"cell":10,"side":"e"}],"cells":[{"type":"mirror","arr":[2,5,12,19,22,30,32,35]}],"solution":[{"type":"mirror","arr":[4,16,18,19,26,30,33,35]}]}],[{"l1":7,"l2":1,"rows":6,"columns":4,"none":[1,6,7,11,13,16,19,23],"lasers":[{"cell":10,"side":"e","dir":"ne"}],"targets":[{"cell":11,"side":"e"}],"cells":[{"type":"mirror","arr":[2,9,18,20,21]}],"solution":[{"type":"mirror","arr":[2,3,5,8,10]}]},{"l1":7,"l2":2,"rows":5,"columns":5,"none":[1,5,7,9,17],"lasers":[{"cell":1,"side":"w","dir":"se"}],"targets":[{"cell":3,"side":"s"},{"cell":16,"side":"e"},{"cell":24,"side":"e"}],"cells":[{"type":"mirror","arr":[2,4,6,10,13,20]},{"type":"mirror_stuck","arr":[11]}],"solution":[{"type":"mirror","arr":[3,13,15,16,18,22]},{"type":"mirror_stuck","arr":[11]}]},{"l1":7,"l2":3,"rows":5,"columns":5,"none":[2,12,16,19,20,22,23,24],"lasers":[{"cell":13,"side":"s","dir":"se"},{"cell":24,"side":"e","dir":"ne"}],"targets":[{"cell":5,"side":"s"},{"cell":8,"side":"e"},{"cell":12,"side":"e"},{"cell":12,"side":"s"}],"cells":[{"type":"mirror","arr":[4,7,11,14,21]},{"type":"mirror_stuck","arr":[15]}],"solution":[{"type":"mirror","arr":[3,11,17,18,25]},{"type":"mirror_stuck","arr":[15]}]},{"l1":7,"l2":4,"rows":6,"columns":5,"none":[1,11,12,24,27],"lasers":[{"cell":9,"side":"e","dir":"se"}],"targets":[{"cell":4,"side":"n"},{"cell":4,"side":"s"},{"cell":18,"side":"s"}],"cells":[{"type":"mirror","arr":[3,7,15,16,19,29]}],"solution":[{"type":"mirror","arr":[5,8,10,15,17,23]}]},{"l1":7,"l2":5,"rows":6,"columns":5,"none":[3,12,17,20,23,24,28],"lasers":[{"cell":2,"side":"e","dir":"se"}],"targets":[{"cell":5,"side":"s"},{"cell":23,"side":"e"}],"cells":[{"type":"mirror","arr":[1,10,11,13,19,22,25,29]},{"type":"blackhole_stuck","arr":[2,26]}],"solution":[{"type":"mirror","arr":[7,11,15,18,21,25,27,29]},{"type":"blackhole_stuck","arr":[2,26]}]},{"l1":7,"l2":6,"rows":5,"columns":4,"none":[4,5,7,10,11,17,18,20],"lasers":[{"cell":9,"side":"s","dir":"ne"}],"targets":[{"cell":9,"side":"w"},{"cell":10,"side":"e"}],"cells":[{"type":"mirror","arr":[1,12,14]},{"type":"glass","arr":[15]}],"solution":[{"type":"mirror","arr":[2,12,15]},{"type":"glass","arr":[6]}]},{"l1":7,"l2":7,"rows":5,"columns":4,"none":[9,12,20],"lasers":[{"cell":12,"side":"e","dir":"sw"},{"cell":14,"side":"e","dir":"se"}],"targets":[{"cell":1,"side":"s"},{"cell":6,"side":"e"},{"cell":7,"side":"e"},{"cell":15,"side":"e"}],"cells":[{"type":"mirror","arr":[2,4,5,11,17]}],"solution":[{"type":"mirror","arr":[3,8,10,16,19]}]},{"l1":7,"l2":8,"rows":6,"columns":5,"none":[18,25],"lasers":[{"cell":18,"side":"s","dir":"se"}],"targets":[{"cell":9,"side":"s"},{"cell":12,"side":"s"},{"cell":21,"side":"w"}],"cells":[{"type":"mirror","arr":[2,5,8,16,20,27]}],"solution":[{"type":"mirror","arr":[4,10,16,24,26,28]}]},{"l1":7,"l2":9,"rows":7,"columns":5,"none":[6,12,13,16,23,30],"lasers":[{"cell":6,"side":"e","dir":"se"}],"targets":[{"cell":5,"side":"s"},{"cell":7,"side":"s"},{"cell":14,"side":"e"}],"cells":[{"type":"mirror","arr":[1,4,17,26,28,34]},{"type":"mirror_stuck","arr":[15]}],"solution":[{"type":"mirror","arr":[3,11,21,25,27,29]},{"type":"mirror_stuck","arr":[15]}]},{"l1":7,"l2":10,"rows":6,"columns":4,"none":[10,15,20,21,23],"lasers":[{"cell":8,"side":"s","dir":"nw"}],"targets":[{"cell":8,"side":"e"},{"cell":11,"side":"e"},{"cell":14,"side":"e"},{"cell":15,"side":"s"}],"cells":[{"type":"mirror","arr":[5,6,11,14,16,17,19,22]},{"type":"mirror_stuck","arr":[2]}],"solution":[{"type":"mirror","arr":[3,4,6,9,12,14,16,19]},{"type":"mirror_stuck","arr":[2]}]}],[{"l1":8,"l2":1,"rows":3,"columns":3,"none":[],"lasers":[{"cell":6,"side":"s","dir":"sw"}],"targets":[{"cell":6,"side":"e"}],"cells":[{"type":"mirror","arr":[1,3,5]}],"solution":[{"type":"mirror","arr":[3,5,9]}]},{"l1":8,"l2":2,"rows":3,"columns":3,"none":[],"lasers":[{"cell":6,"side":"e","dir":"sw"},{"cell":8,"side":"s","dir":"ne"}],"targets":[{"cell":2,"side":"n"},{"cell":4,"side":"w"}],"cells":[{"type":"mirror","arr":[3,7]}],"solution":[{"type":"mirror","arr":[1,9]}]},{"l1":8,"l2":3,"rows":3,"columns":3,"none":[],"lasers":[{"cell":4,"side":"e","dir":"ne"}],"targets":[{"cell":5,"side":"e"},{"cell":7,"side":"e"},{"cell":9,"side":"e"}],"cells":[{"type":"mirror","arr":[4]},{"type":"glass","arr":[3]}],"solution":[{"type":"mirror","arr":[2]},{"type":"glass","arr":[6]}]},{"l1":8,"l2":4,"rows":3,"columns":3,"none":[],"lasers":[{"cell":7,"side":"w","dir":"ne"},{"cell":8,"side":"e","dir":"nw"}],"targets":[{"cell":2,"side":"e"},{"cell":7,"side":"e"}],"cells":[{"type":"mirror","arr":[2,4,5,7]},{"type":"blackhole_stuck","arr":[9]}],"solution":[{"type":"mirror","arr":[1,3,4,6]},{"type":"blackhole_stuck","arr":[9]}]},{"l1":8,"l2":5,"rows":3,"columns":3,"none":[],"lasers":[{"cell":8,"side":"e","dir":"nw"}],"targets":[{"cell":1,"side":"s"},{"cell":6,"side":"e"}],"cells":[{"type":"mirror","arr":[3,5,9]},{"type":"glass","arr":[4]},{"type":"blackhole_stuck","arr":[2]}],"solution":[{"type":"mirror","arr":[1,3,7]},{"type":"glass","arr":[8]},{"type":"blackhole_stuck","arr":[2]}]},{"l1":8,"l2":6,"rows":3,"columns":3,"none":[],"lasers":[{"cell":1,"side":"e","dir":"sw"},{"cell":6,"side":"e","dir":"sw"}],"targets":[{"cell":1,"side":"w"},{"cell":2,"side":"s"},{"cell":4,"side":"e"}],"cells":[{"type":"glass","arr":[3,5,7]},{"type":"blackhole_stuck","arr":[8]}],"solution":[{"type":"mirror","arr":[2,4,9]},{"type":"glass","arr":[8]},{"type":"blackhole_stuck","arr":[8]}]},{"l1":8,"l2":7,"rows":3,"columns":3,"none":[],"lasers":[{"cell":3,"side":"s","dir":"sw"},{"cell":6,"side":"s","dir":"nw"}],"targets":[{"cell":1,"side":"n"},{"cell":2,"side":"n"}],"cells":[{"type":"mirror","arr":[1,7,9]}],"solution":[{"type":"mirror","arr":[3,4,8]}]},{"l1":8,"l2":8,"rows":3,"columns":3,"none":[],"lasers":[{"cell":6,"side":"e","dir":"nw"},{"cell":9,"side":"s","dir":"nw"}],"targets":[{"cell":4,"side":"w"},{"cell":4,"side":"e"},{"cell":5,"side":"e"},{"cell":7,"side":"e"}],"cells":[{"type":"mirror","arr":[2,7]}],"solution":[{"type":"mirror","arr":[1,3]}]},{"l1":8,"l2":9,"rows":3,"columns":3,"none":[],"lasers":[{"cell":3,"side":"n","dir":"sw"},{"cell":9,"side":"s","dir":"nw"}],"targets":[{"cell":2,"side":"e"},{"cell":4,"side":"w"}],"cells":[{"type":"mirror","arr":[5,8,9]},{"type":"blackhole_stuck","arr":[7]}],"solution":[{"type":"mirror","arr":[1,2,6]},{"type":"blackhole_stuck","arr":[7]}]},{"l1":8,"l2":10,"rows":3,"columns":3,"none":[],"lasers":[{"cell":4,"side":"w","dir":"ne"}],"targets":[{"cell":6,"side":"e"}],"cells":[{"type":"mirror","arr":[1,3,4,5,6,7]}],"solution":[{"type":"mirror","arr":[1,2,3,7,8,9]}]}],[{"l1":9,"l2":1,"rows":3,"columns":3,"none":[],"lasers":[{"cell":1,"side":"n","dir":"se"}],"targets":[{"cell":3,"side":"n"}],"cells":[{"type":"mirror","arr":[4]},{"type":"blackhole","arr":[2,5,6]},{"type":"blackhole_stuck","arr":[7,9]}],"solution":[{"type":"mirror","arr":[5]},{"type":"blackhole","arr":[4,6]},{"type":"blackhole_stuck","arr":[7,9]}]}]]
;