let player
let start_platform
let enemy = {}
let despawnTime
let level

function setup() {
	createCanvas(1200, 800)

	world.gravity.y = 10
	despawnTime = 300

	level = 1

	setupLevel()
}

function setupLevel() {
	for (let i = allSprites.length; i--;) {
		allSprites[i].remove()
	}

	enemy = {}
	setupInfo()

	switch(level) {
		case 1:
			setupLevel1()
			break
		case 2:
			setupLevel2()
			break
		case 3:
			setupLevel3()
			break
		case 4:
			setupLevel4()
			break
		case 5:
			setupLevel5()
			break
		case 6:
			setupLevel6()
			break
		case 7:
			setupLevel7()
			break
		case 8:
			setupLevel8()
			break
		case 9:
			setupLevel9()
			break
		case 10:
			setupLevel10()
			break
		default:
			console.log('ERROR');
	  } 
}

function setupInfo() {
	levelBox = new Sprite()
	levelBox.w = 200
	levelBox.h = 50
	levelBox.x = width/2 - 100
	levelBox.y = 25
	levelBox.collider = 'static'
	levelBox.textSize = 40
	levelBox.text = 'Level ' + str(level)

	controlBox = new Sprite()
	controlBox.w = 200
	controlBox.h = 50
	controlBox.x = width/2 + 100
	controlBox.y = 25
	controlBox.collider = 'static'
	controlBox.textSize = 18
	controlBox.text = 'Ball schießen: Linksklick\nLevel zurücksetzen: r'
}

function setupLevel1() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 1000
	platform.y = 700
	platform.w = 300
	platform.h = 5
	platform.collider = 'static'

	createEnemy(1000, 670, 20, 50)

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel2() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 1000
	platform.y = 700
	platform.w = 300
	platform.h = 5
	platform.collider = 'static'

	createEnemy(1000, 670, 20, 50)
	createEnemy(1000, 620, 20, 50)
	createEnemy(1000, 570, 20, 50)

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel3() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 1000
	platform.y = 700
	platform.w = 300
	platform.h = 5
	platform.collider = 'static'

	createEnemy(1100, 670, 20, 50)

	createEnemy(900, 670, 20, 50)

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel4() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 1000
	platform.y = 700
	platform.w = 300
	platform.h = 5
	platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'gray'
	platform.x = 600
	platform.y = 200
	platform.w = 25
	platform.h = 300
	platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'gray'
	platform.x = 600
	platform.y = 600
	platform.w = 25
	platform.h = 300
	platform.collider = 'static'

	createEnemy(1000, 670, 20, 50)

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel5() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 650
	platform.y = 500
	platform.w = 50
	platform.h = 5
	platform.collider = 'static'

	createEnemy(650, 470, 20, 50)

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 800
	platform.y = 700
	platform.w = 50
	platform.h = 5
	platform.collider = 'static'

	createEnemy(800, 670, 20, 50)

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel6() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	for (let x = 600; x <= 1100; x += 100) {
		platform = new Sprite()
		platform.color = 'brown'
		platform.x = x
		platform.y = 700
		platform.w = 50
		platform.h = 5
		platform.collider = 'static'
	
		createEnemy(x, 595, 20, 200)
	}

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel7() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	for (let x = 600; x <= 1100; x += 100) {
		platform = new Sprite()
		platform.color = 'brown'
		platform.x = x
		platform.y = 1000 - x/2
		platform.w = 50
		platform.h = 5
		platform.collider = 'static'
	
		createEnemy(x, 900 - x/2, 20, 200)
	}

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel8() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'gray'
	platform.x = 600
	platform.y = 600
	platform.w = 25
	platform.h = 200
	platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 800
	platform.y = 700
	platform.w = 50
	platform.h = 5
	platform.collider = 'static'

	for (let y = 400; y < 700; y += 50) {
		createEnemy(800, y, 20, 50)
	}

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel9() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'gray'
	platform.x = 820
	platform.y = 250
	platform.w = 500
	platform.h = 25
	platform.collider = 'static'

	platform = new Sprite()
	platform.color = 'brown'
	platform.x = 1100
	platform.y = 200
	platform.w = 50
	platform.h = 5
	platform.collider = 'static'

	createEnemy(1100, 170, 20, 50)

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687
}

function setupLevel10() {
	start_platform = new Sprite()
	start_platform.color = 'brown'
	start_platform.x = 100
	start_platform.y = 700
	start_platform.w = 100
	start_platform.h = 5
	start_platform.collider = 'static'

	createEnemy(width/2, -100, 20, 50)

	player = new Sprite()
	player.color = 'red'
	player.d = 20
	player.x = 100
	player.y = 687

	box = new Sprite()
	box.y = 200
	box.w = 200
	box.textSize = 40
	box.text = 'Geschafft!'
}

function createEnemy(x, y, w, h) {
	key = int(random(10000))
	enemy[key] = new Sprite()
	enemy[key].color = 'lime'
	enemy[key].w = w
	enemy[key].h = h
	enemy[key].x = x
	enemy[key].y = y
}

function draw() {
	background(200)

	if (player.colliding(start_platform)) {
		drawingContext.setLineDash([30, 20])
		line(player.x, player.y, mouseX, mouseY)
	
		drawingContext.setLineDash([1])
	
		angleMode(DEGREES)
		let v0 = createVector(0, -1)
		let v1 = createVector(mouseX - player.x, mouseY - player.y)
		let angle = v0.angleBetween(v1) - 90
		let distance = dist(player.x, player.y, mouseX, mouseY)

		if (mouse.presses()) {
			console.log(1)
			player.bearing = angle
			player.applyForce(distance)
		}
	}

	for (let key in enemy) {
		if (abs(enemy[key].rotation) > 100 || enemy[key].y > height) {
			enemy[key].despawnTimer = despawnTime
		} else if (abs(enemy[key].rotation) > 10) {
			enemy[key].despawnTimer += 1
			// enemy[key].color = 'gray'
		} else {
			enemy[key].despawnTimer = 0
			// enemy[key].color = 'lime'
		}

		if (enemy[key].despawnTimer >= despawnTime) {
			enemy[key].remove()
			delete enemy[key]
		}
	}

	if (Object.keys(enemy).length == 0) {
		level += 1
		setupLevel()
	}

	if (kb.pressed('r')) {
		setupLevel()
	}
}