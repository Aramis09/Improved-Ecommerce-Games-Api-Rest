
const addPropertiePlatforms = game => {
  const platformsProperty = game.platforms.map(property => property.platform.name);
  game.platforms = platformsProperty;
  
};

const addPropertieGenres = game => {
  const genresProperty = game.genres.map(property => property.name);
  game.genres = genresProperty;
  
};

const addPropertieStore =  game => {
  const storeProperty = game.stores.map(property => property.store.name);
  game.stores = storeProperty;
  
};
const addPropertyImages = game => {
  const imagesProperty = game.short_screenshots.map(property => property.image);
  game.images = imagesProperty;
  
};

const addPrice = (game) => {
  if(game.name === "PAYDAY 2") {
      game.price = '9.99';
      game.description = 'PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736600/drxuyuwawqpnzrxgvtek.jpg";   
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741201/nelcpgelidsycbtvytnj.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741202/anfqraxbrxwon6sp1fdx.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741203/ck9shdyptjhglfo8eg9e.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741203/g7lswluqhievmkarh8q0.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741204/eaotbwzyamb7wdqv40yj.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741205/b28jtnwxfznhllbvqvr9.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741205/lo2bgpwcsfbd7lfzqchr.jpg",
      ]
      game.images = carrouselImages
  }
  if(game.name === "Horizon Zero Dawn") {
      game.price = '49.99';
      game.description = 'Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736601/wkejnebbfilllpkqejmo.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741206/lvtign8jafxphyuhrywk.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741207/tcokun1gheskgdnl9smv.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741208/egg31ye4kpuvzhkhep2m.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741208/qbwbsogn37ubjuu0yabi.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741209/rl2ipeh4ecuy1zpiqxkf.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741210/rrz34olwh9a656hkacdl.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741210/hbw2kufm6a6dacebuanh.jpg"]
      game.images = carrouselImages
  }
  if(game.name === "Grand Theft Auto IV") {
      game.price = '29.98';
      game.description = 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736602/cyeq4ct3lkdf2t2x4hkb.jpg";
      const carrouselImages =["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741211/vqprzigbevydhrn5c94t.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741212/nxmbgizgufo45sdpcnxq.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741212/ptxa8kbo3mqqmvcb1uui.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741213/tyoqdtdlufag71ejybca.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741214/qgomcgwnw4digaywx7ca.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741214/pu57ytttj8ixouavlugy.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741215/vgbvh9ffnwe7inel66gp.jpg"]
      game.images = carrouselImages
  }  
  if(game.name === "Rocket League") {
      game.price = '1.99';
      game.description = 'Rocket League combines arcade-style soccer with four-wheel mayhem, easy controls, and fluid, physics-based competition.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736602/uu9lah4izfwcwltjfxzf.jpg";
      const carrouselImages = 
      ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741216/vr2wo1q1usfem4bnikb4.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741217/rreddrxbfj3eddgmr9cg.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741217/yx27ulchkhr3wkc2kiyg.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741218/w3tl1frrdd6y6migl3z8.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741218/nqxiyhwgn7hhokj2mzew.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741219/xryl4ijr7lqvf1qtddgu.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741220/grq1pfktllaoqnc5gnae.jpg"]
      game.images = carrouselImages
  }
  
  if(game.name === "Dota 2") {
      game.price = '3.49';
      game.description = 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if its their 10th hour of play or 1,000th, theres always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736603/y2ehygdaodkxs8ph52qe.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741220/j2srmoilx6sglckaawuc.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741221/enthjckv1nxi1gs3rrrs.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741224/qzhfqvkqg7p73pcnvbof.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741225/o5djfzjlq1aryffvggvd.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741225/uvfcggt4bcca784knd6h.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741226/tzeby8omksqlozdpluhq.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741227/e44ar0cdhbmcfv8i7l0u.jpg"]
      game.images = carrouselImages
  }
      
  if(game.name === "Terraria") {
      game.price = '9.99';
      game.description = 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736605/wuxjgdk7qdcoey2duvnr.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741233/vnzi61qy0d8ofdeuf7rv.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741233/nk6onjrlp7bketoagx7e.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741234/ogg0cj6nqvjjiytfefo6.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741235/vreiv9okzmglixwgpt0j.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741236/sujupelsq0valpktiux2.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741236/uolgajvowl95hr9ibpcw.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741237/nomldedmw1tnjizjoulm.jpg"]
      game.images = carrouselImages
  }
  if(game.name === "Cyberpunk 2077") {
      game.price = '59.99';
      game.description = 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736604/txau4h1zwmpejsgqatap.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741228/vfqe6qr3sc8hqyxxmb7a.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741228/d8wasonodbztdw26pd4o.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741229/yndcsnsoef0hgaj1hpwe.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741230/u2m7re41kylpbhu6jx7l.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741231/vt22labax8yhaf5xro8n.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741232/ftjmxczcymrfolivtfzf.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741232/e9h4lvntgboe41ryspnb.jpg"]
      game.images = carrouselImages
      
  }
  if(game.name === "Warframe") {
      game.price = '9.99';
      game.description = 'Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736605/joonwfjiqiaj1u9aezjh.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741237/r2caouuddkatwjrqim6o.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741238/lwl6hdfpnnjenceblo5y.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741239/swz561t6ulvh0mky8bxd.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741239/wkzmdaqiy70igpafstem.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741240/kysr5rjn7gwyjxsxmxun.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741241/nyyczi2e7vzrmxnyhwhu.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741242/vnaf25tbcpjtzrqa2qcz.jpg"]
      game.images = carrouselImages
  }
  if(game.name === "Metro 2033") {
      game.price = '5.99';
      game.description = 'In the year 2013, the world has been devastated by an apocalyptic catastrophe that has wiped out all of humanity and turned the earths surface into a polluted wasteland. A handful of survivors took refuge in the depths of the Moscow metro and thus began a new Dark Age for human civilization.'
          'The year is now 2033. An entire generation has been born and raised underground, and their besieged metro station cities struggle to survive both the other survivors and the mutant horrors that await them outside.' ;
          game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736606/wvatmqikfllph8odu4sj.jpg"
      const carrouselImages = 
      ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741242/lpjescw3zuc9qmk5nuyz.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741243/sfcslucbjwed7kl17vsc.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741244/jtq8f5kbcgfsynvkypuv.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741244/lwtmevk4spstvg49dt8f.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741245/ttsfsk40yglmxkq3ua8o.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741246/rcc3usgug4bdabibqpvl.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741246/insfg8utsdfevgedeoob.jpg"]
  game.images = carrouselImages
  }    
  if(game.name === "Metal Gear Solid V: The Phantom Pain") {
      game.price = '19.99';
      game.description = 'Ushering in a new era for the METAL GEAR franchise with cutting-edge technology powered by the Fox Engine, METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736607/oyulfqgaxui9ucsbpr0f.jpg";
      const carrouselImages = 
      ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741247/ndg0zdw5hfcmyxe9azjc.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741247/iu89bsbgjexgosgkvxzx.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741248/icibqbzglbvkknnafo8c.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741249/j3ef0evzftmvuwzybhbl.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741249/bl0pomsotkjfgice8c5q.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741250/kyvtvxxnutrcc8mzfxn3.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741251/snkmdxjkpp2wuyl653f9.jpg"]
      game.images = carrouselImages
  }
  if(game.name === "Rise of the Tomb Raider") {
      game.price = '29.99';
      game.description = 'Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content. Explore Croft Manor in the new “Blood Ties” story, then defend it against a zombie invasion in “Lara’s Nightmare”.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736608/l1l901nvnd765iiqf9db.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741252/d1qom6b6hgzhtl5enwd7.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741252/qnkvkrxarh1wnfkbvpva.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741253/izvuxsh1ogqx6g9yt16b.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741254/zyy46siwdnv05kzspw5w.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741254/rxceiwnzxtyms5spagy7.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741255/by9aewxfzprwdonm0tgf.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741256/cb9dao3n3l3hdcekghkb.jpg"]
      game.images = carrouselImages
  }
  if(game.name === "Batman: Arkham Knight") {
      game.price = '2.99';
      game.description = 'Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteadys uniquely designed version of the Batmobile.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736609/gss2spechpivjvjryxaa.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741257/ak0jvxeqalk3t7j1qfvr.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741257/pafahi8cpdrhzw68hsq3.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741258/mgimsltnid2lanlc6yo7.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741259/ovzsy7bhcav98jnvvb7m.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741259/kcctdqdykcrpk8hw50ou.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741260/usa2m4jekxstvcwraqtj.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741261/e4b5ddk859gvkg2ykkrs.jpg"]
      game.images = carrouselImages
  }
  if(game.name === "The Walking Dead: Season 2") {
      game.price = '7.99';
      game.description = 'The Walking Dead: Season Two continues the story of Clementine, a young girl orphaned by the undead apocalypse. Left to fend for herself, she has been forced to learn how to survive in a world gone mad.';
      game.background_image = "https://res.cloudinary.com/dynnwv7md/image/upload/v1681508987/TWD2_EPIC_Landscape_2560x1440_2560x1440-e99a790d2f6e4ee3026f8d2fd5d188de_1_zn7dhx.jpg";
      const carrouselImages = []
      game.images = carrouselImages
  }
  if(game.name === "The Witcher 2: Assassins of Kings Enhanced Edition") {
      game.price = '19.99';
      game.description = 'A time of untold chaos has come. Mighty forces clash behind the scenes in a struggle for power and influence. The Northern Kingdoms mobilize for war. But armies on the march are not enough to stop a bloody conspiracy...';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681747992/imagenesCRed14_hkbm45.jpg";
      const carrouselImages = [
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741261/wn0ptrrdbja2koxt0mtd.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741262/fpdxh14ktqvfytnnvrjg.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741263/dax0pnrm6psfxjhee2ga.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741264/ntz1frxd8uor0pbdmzrs.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741265/jywtjii7hzbxxu5pxx6i.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741265/ieto1ob2twizg4dje4y0.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741267/wkcdxfxtqd5omsvkqbrd.jpg"]
      game.images = carrouselImages
  }
  if(game.name === "BioShock 2") { // hasta aqui es la pagina 1, no todos los juegos se les pudo pueden encontrar precio (luego hay que hacer un filtrado)
      game.price = '19.99';
      game.description = 'Set approximately 10 years after the events of the original BioShock, the halls of Rapture once again echo with sins of the past. Along the Atlantic coastline, a monster has been snatching little girls and bringing them back to the undersea city of Rapture.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736611/atljcwd4rtqunengicgj.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741267/wifqp6ijbmoq9foupim2.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741268/kh3js1eyaxc0yckmbenz.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741268/zjxxgixqnspiz5zdghik.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741269/wivamv4y4ynulzhnb9nf.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741270/rthca1x5753akdf4ipfw.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741270/eug5r9dzwcfvd4tswwzs.jpg",
      ,]
      game.images = carrouselImages
  }  
  //Page2
  if(game.name === "Hitman") {
      game.price = '25.29';
      game.description = 'The original assassin is back! Betrayed by the Agency and hunted by the police, Agent 47 finds himself pursuing redemption in a corrupt and twisted world.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736612/ufds7dnjadargcwelkcd.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741271/tbhmd77eiw8ybpkerpzx.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741272/swaynbjcnodisuytjuyo.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741272/ezrdwotcuopomwnjbb1a.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741273/rlh5bmtkp00resmnnpch.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741274/z1d9wi4o1mmrk1knypja.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741274/wym9rnvzhomc0idiqoew.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741275/germmvskngjqnp4btvid.jpg",
      ]
      game.images = carrouselImages
  }  
  if(game.name === "Apex Legends") {
      game.price = '29.99';
      game.description = 'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736612/fce1nadnym31qb2kknur.jpg";
      const carrouselImages = [
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741276/mu7azhvrachjggh55cfh.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741276/fbwuvqbmtt4safailb7h.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741277/gjwohys3l6nr351kzmvs.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741278/nxyiwqf7p68yowf6tl4c.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741279/so3lgp3vvpqohupatyjh.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741279/liig2luiyxq56boek5ii.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741280/bobgazufu8fioyk33qpb.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Hollow Knight") {
      game.price = '14.99';
      game.description = 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736613/i1rybosxejpcyww7mpjz.jpg";
      const carrouselImages = [
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741281/thyypp2r9sbkgblcxwue.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741281/g6rq6uu6yfga1i3otqjs.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741282/fb8e2ozzbg7wcb6ycf9d.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741283/rlacogxxbue245dxfdrb.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741283/cgf0zv9koo3jt0vxpydt.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741284/ixzinwmw44xnsyqply3o.jpg",
          "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741285/htpqbkiowailys4vcero.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Mirror's") {
      game.price = '19.99';
      game.description = 'Mirrors Edge™ Catalyst raises the action-adventure bar through fluid, first person action and immerses players in Faiths story as she fights for freedom.';
      game.background_image = "https://as01.epimg.net/meristation/imagenes/2021/04/13/noticias/1618302716_420783_1618302907_noticia_normal.jpg";
      const carrouselImages = []
      game.images = carrouselImages
  }  
  if(game.name === "Little Nightmares") {
      game.price = '19.99';
      game.description = 'Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736614/tcikob5vcghvngvio6gi.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741285/zt9rbnuxivnzw7opfmxg.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741286/scjnxqaba0aruaedhil6.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741286/l4jhbx7qiftz13yh10js.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741287/elp1np7n1hhkh5gq7veg.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741287/dhxufg9bah7zycda3bif.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741288/x6f0pyoqu49xjag4qh8p.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741289/jfolrd2fuh41p0bbwdwh.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Hotline Miami") {
      game.price = '9.99';
      game.description = 'Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736615/wx1b7cxhhrpjc2vb4uvg.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741289/yimiiphvqwdgqfpttuqm.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741290/db4iq16fq5lxjeqa7wex.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741290/pulpxypcqcv8w1t4szeb.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741291/regjvt4gj1wcxesdfw96.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741292/rcmub3pltfyeno2b3s7c.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741292/reqir8am6qqjpdtuh0bi.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741293/ry577oztvexugo0lvi2w.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Dark Souls III") {
      game.price = '59.99';
      game.description = 'Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736615/vvzjfvezv9phb2flavz4.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741294/fuvy6csa9clkv87ricsc.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741294/szckj6ttavlnnee9sjg9.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741295/tzio6m7ma255knlp3nfn.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741296/i8llwgfzmeiygxyzfzxl.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741297/qncgwhwbf1ygst20otfm.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741297/zeb3ho5wxodj9izv0ffk.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741298/ctfstljeybxpjr4lspsx.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Outlast") {
      game.price = '19.99';
      game.description = 'Hell is an experiment you cant survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736616/cwarjcrckn6vmr5sgrzx.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741299/gb5hcfxzeepnwtqgkdw2.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741300/srvsbptpbpgughzkbsb1.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741300/kx9rbxsqcpq1j9fvmcq0.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741301/ucxlbp0xv1vncyjpzdxw.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741302/nycv2rfhwjw3a45okoqq.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741303/ywrzhcdd8woogp9ntvjn.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741304/azpxgkbuuspogd13c5oq.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Deus Ex: Mankind Divided") {
      game.price = '29.99';
      game.description = 'Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736617/pfds6tf0digzr4pqzd1o.jpg";
      const carrouselImages = ["https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741304/qs8ce6hlz5jj1kkk7pic.jpg",
      "  https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741305/w8dsilt2jneorlvnqtvj.jpg",
      "  https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741306/lmkhuhka45akscs3hlso.jpg",
      "  https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741306/wgb1fatjmgxztt68weyb.jpg",
      "  https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741307/om9ffgqdz1sylubycgkj.jpg",
      "  https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741308/yqk69gjilfewk7wjwo7b.jpg",
      "  https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741308/pdlyvhir79fvv2hdzvlz.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Spec Ops: The Line") {//
      game.price = '5.99';
      game.description = 'A Third-Person modern military Shooter designed to challenge players morality by putting them in the middle of unspeakable situations.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736618/kmhsypvptbzpy2d3szak.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741309/bjxjw5fj9e8fvqnwlcae.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741310/cyrr5p8eolv5mrouevr4.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741310/ubkdik8iukdhlm3ou3w6.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741311/oapdft9jsydqbvdhuza9.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741311/c6eq39ff3yegvxe0ekpb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741312/xiwjt8whyatyjqd4paex.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741313/ks2uwmsmucs3mb9amtwf.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "BioShock Remastered") {
      game.price = '4.99';
      game.description = 'BioShock is a shooter unlike any other, loaded with unique weapons and tactics. Complete with an arsenal of revolvers, shotguns, and grenade launchers, players will be forced to genetically modify their DNA to become an even deadlier weapon';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736619/y03cs180s2bt3cjeaozh.jpg";
      const carrouselImages = [ 
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741314/qm6bf2mulxjjjt1zi0x2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741315/jfnn4p60oh5hkcevjtw2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741315/rfi12cm2pl0kmpltnybm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741316/hqxnuutydffzsdz19fhr.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741316/aybozod0yu2xmyeuuyik.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741314/ugihx6a3f7ijvbv836mt.jpg"]
      game.images = carrouselImages
  }  
  if(game.name === "Marvel's Spider-Man") {
      game.price = '49.99';
      game.description = 'In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736619/n0aeqkkxyl6kpqc3fmlt.jpg";
      const carrouselImages = [
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741317/b6vxbefpqadf0o4nftws.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741318/kkm2u28pcowg0st8chb0.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741318/t0adoihmbu9v0rmkolxf.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741319/xsdpvmyo6ybdz7i8vlpi.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741320/py7bplirq98nhxlbcysg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741321/apmyovkayr7mdjzosxva.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741321/nnorsadl4faxymda2rlt.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Far Cry 3") {
      game.price = '19.99';
      game.description = 'Discover the dark secrets of a lawless island ruled by violence and take the fight to the enemy as you try to escape. You’ll need more than luck to escape alive!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736620/tcxubs2jhfht0c1evbzq.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741322/dydsmey36xczs5s0x7ug.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741323/d5ysjcuon6cikojh7j9n.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741324/igccwuhk9cip3dkadbwk.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741324/ebbiwac0gufmjhn6zpwj.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741325/qxjj25jckwuzc84damc7.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741326/n2bl2mcpi2wuphthuueq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741326/r0stgg1t0okiawqgbtb6.jpg",
      ,]
      game.images = carrouselImages
  }  
  if(game.name === "Amnesia: The Dark Descent") {
      game.price = '19.99';
      game.description = 'Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736621/fth3mvb5fdtz51e5ltnw.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741327/ezddts9zhdivhhwuqn07.jpg",
          " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741328/z6jt230r4rzfbokt0fto.jpg",
          " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741328/dormjj6ahhwfydxyuen6.jpg",
          " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741329/jnrcrbv0bkefbobd6umt.jpg",
          " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741330/nhzyffzsigr1lfselyj3.jpg",
          " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741330/tdbq5jch5ivue1ljrtod.jpg",
          " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741331/xjhvtiehrrxrfibtvaiw.jpg",
      ]
      game.images = carrouselImages
  }  
  if(game.name === "Alan Wake") {
      game.price = '14.99';
      game.description = 'A Dark Presence stalks the small town of Bright Falls, pushing Alan Wake to the brink of sanity in his fight to unravel the mystery and save his love.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736622/yei0ztlpf8l6h2l5mcbs.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741331/ws0snllkkl8ntii6cxkv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741332/tnyyw3oemc0xfd9kso3l.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741333/sfkuvwzesdqrashql05u.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741333/qtampgzkmct6zob69fbw.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741334/pea1g7bdngsnxddcpfvb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741335/kzlxbi5fvirmpgtz1c36.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741335/zbfwhtwbclszm5trkprs.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Half-Life 2: Deathmatch") {
      game.price = '4.99';
      game.description = 'Fast multiplayer action set in the Half-Life 2 universe! HL2s physics adds a new dimension to deathmatch play. Play straight deathmatch or try Combine vs. Resistance teamplay. Toss a toilet at your friend today!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736623/qmzctqlynmnnkklz2vhe.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741336/kxwjyrhmvaqc93jgiaba.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741337/oaxtoills7pof6abztum.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741337/lp0m1xba4yko2fgjya4r.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741338/wj6uzxxi3hztwzadd3ry.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741339/sbqre8ujdznpxzjidtip.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741339/t9etdpfol0cungjaucty.jpg",
      ,]
      game.images = carrouselImages
  }  
  if(game.name === "Saints Row: The Third") {
      game.price = '9.99';
      game.description = 'Get ready for the most out-landish gameplay scenarios ever seen as the Third Street Saints take on the Syndicate!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736623/d2nrbhikttwdjlepuoyy.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741340/re3ipnvhxq13qlvzayom.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741340/lkgetagde8fmbfrqo5dd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741341/wtvpbkbxvpkcraxoxvqh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741342/rzkngysyrhxqz840bizl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741342/j5usapfmynqyybaokmvz.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741343/weevnabg7d6aijwe6t2o.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741344/uhvawooaqbupj2tmwwwi.jpg",
      ]
      game.images = carrouselImages
  }  
  if(game.name === "Half-Life") {
      game.price = '9.99';
      game.description = 'Named Game of the Year by over 50 publications, Valves debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.';
      game.background_image = "https://i.blogs.es/95bc11/2560_3000-1-/1366_2000.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741344/bdvnyf3oaadkdoxbbut5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741345/gkbvob6g0okxb6t4wmnh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741345/uxdbunwzymv9xrawrdqd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741346/org547hanfepvdsq66w6.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741346/e0jebckmrifhhmtrgu5k.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741347/uupp5shjwv90fkfpnjst.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741348/ehseaae6aidutytboipj.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Wolfenstein: The New Order") { //page 3 complete.
      game.price = '19.99';
      game.description = 'Wolfenstein®: The New Order reignites the series that created the first-person shooter genre. Wolfenstein offers a deep game narrative packed with action, adventure and first-person combat.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736625/p8sbdnzldmud8jldj5gc.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741348/usjezdzgrv3rhuh87ssg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741349/gmz3vff8nmqxvqvey1hk.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741349/aoe5gceqn0v6xfhjhml0.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741350/plsymnkpvcuieahlgonc.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741351/vgewpxbqhokpnpynwlmp.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741351/jtjlnevgmow0zr8as5vg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741352/c66mdxhat0csdkqdszc0.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Borderlands") {
      game.price = '9.89';
      game.description = 'Get ready for the mind blowing insanity! Play as one of four trigger-happy mercenaries and take out everything that stands in your way! With its addictive action, frantic first-person shooter combat, massive arsenal of weaponry, RPG elements and four-player co-op, Borderlands is a breakthrough experience that challenges all the...';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736626/a1cj4cttivxo3v04gtel.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741353/maiunab1uhxejuhkyvzq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741353/jnnxqmuyqgvdl2a0b5ex.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741354/agi3mqterkixbdvq7ozf.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741355/vvgfm3ic8hdm3svezezm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741356/vojemmslqlzqct9b8zp5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741356/k3dvqyrlu7kcbw4dmgkh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741357/cvxgzglylq4a0evytp4k.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Detroit: Become Human") {
      game.price = '39.99';
      game.description = 'Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans. Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736627/ggepgkadbiqdmr8wmwup.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741358/la2d7a0ku0xq8li0wjs1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741358/aoeckpp48ltnbwion1d1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741359/t9lpqrxrzempsaktfnui.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741359/oaow6t0bpzlcb1opdsic.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741360/ptmyechyrbgvwke8fibw.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741361/lz1oljfkjdeyiuatyhkq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741361/i1vksjb3u4lhwrfv8ltm.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Path of Exile") {
      game.price = '15.99';
      game.description = 'You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Created by hardcore gamers, Path of Exile is an online Action RPG set in a dark fantasy world.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736627/h3pm0xqob66a3jpxu89k.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741362/bsruvbnsndq2ycnqin48.jpg",
      "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741362/oltyhlnuyn2squodovuq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741363/yradfjlbcnv7emeblugk.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741364/s5m3bnry0mly3o9skjbm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741365/x9tpdw8q2l0cxxm4zv6h.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741365/vk9kmcdecj0lcimoqfit.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741366/upz7qai25hvwupujfn4o.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Stardew Valley") {
      game.price = '14.99';
      game.description = 'Youve inherited your grandfathers old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736628/oudltinqdylcaxugwydc.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741366/m7sk1fjsruzgimxw6ys8.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741367/lvpmhfzjt1hvq6rfjo8r.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741368/jx3uzs0tmfcm0v5y2axx.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741369/sd1tlx61q7zfvgb2me8j.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741369/lrplkdtr2sewypacujxw.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741370/pprzclfcbj4y2net9v4n.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741371/lrobkonauqlz5ifv40sd.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Prey") {
      game.price = '29.99';
      game.description = 'In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736629/ghlmmdvmwsurpdiixmx5.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741372/qtx34bbw8bsgn4ipkl9d.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741372/gd06xing1g92svo06vdl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741373/zpfkt966wgtwuocn5fab.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741374/nvsswydzogj0fx0hy0bb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741374/ub8cg3subjrw6nfnl3gy.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741375/iauw5un3gqduwcxckotx.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741375/l3fuwuoknalcwjxucug4.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "L.A. Noire") {
      game.price = '19.99';
      game.description = 'L.A. Noire is a violent crime thriller that blends breathtaking action with true detective work to deliver an unprecedented interactive experience. This complete edition of L.A. Noire includes the complete original game and all previously released downloadable content.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736629/o26fwne4asb9hzuvpo7i.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741376/n7ews7cqswk4wkprdepx.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741377/naty4nubxxc3mwuex3wl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741378/wtkgb5jf2pratmmmocod.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741378/askhszmgqngu1wje1qun.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741379/hvsgdxjqoub2fqrjxyy0.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741379/ris5yuhze1csz229g3zd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741380/rnytpimyeylukssgw5ot.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Injustice: Gods Among Us Ultimate Edition") {
      game.price = '19.99';
      game.description = 'Injustice: Gods Among Us Ultimate Edition enhances the bold new franchise to the fighting game genre from NetherRealm Studios. Featuring six new playable characters, over 30 new skins, and 60 new S.T.A.R. Labs missions, this edition packs a punch.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736630/gv21vdgqhve4e2a4itoy.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741381/bk95umvx2qcs4jwbrgvv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741381/qr8mb5zodf6u3hpj9seg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741382/dprvepfzi1wr59pw778k.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741383/aon4br6ffgtfevjlwskd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741384/qgmqnh4ngyo7d9y0rgry.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741385/d7yim9oxi0hfy9mqhonm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741386/yli8ybncejlojnmr2hia.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Garry's") {
      game.price = '9.99';
      game.description = 'Garrys Mod is a physics sandbox. There arent any predefined aims or goals. We give you the tools and leave you to play.';
      game.background_image = "https://portforward.com/garrys-mod/default.webp";
      const carrouselImages = []
      game.images = carrouselImages
  }  
  if(game.name === "PlayerUnknown’s Battlegrounds") {
      game.price = '15.99';
      game.description = 'Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736631/lzbmhgvejeezk731b1uv.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741387/z3hu4xhl71tedmmpco71.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741387/h43iqbbfn2etb6qtgego.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741388/rluunfzdk8eljvtqaj0w.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741389/a9klbhevny9yz0rzxycl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741390/cixsvii4w9uwj3lqou1x.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741390/umlazi2dsoyhsr3lkxiu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741391/aha911rnvhse77xwprag.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Sid Meier's Civilization V") {
      game.price = '5.99';
      game.description = 'Create, discover, and download new player-created maps, scenarios, interfaces, and more!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736632/hpc1kbolvimuiaaflgji.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741393/jwzvvzvjokbixyclx3us.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741393/o3uqi3g1dq4rmx1kau0u.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741394/ghwpjquuho8mkzjbrbxf.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741395/vvbf4m0ljuitjik3l0bl.jpg",
       " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741396/cuuc35ozomm4tbzpna2w.jpg",
       " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741396/xbvlf0fl0pyljii5cxyr.jpg",
       " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741397/god7sbxtrsgqxwr2wnue.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Dead Space") {
      game.price = '19.99';
      game.description = 'The sci-fi survival-horror classic returns, completely rebuilt to offer an even more immersive experience — including visual, audio, and gameplay improvements — while staying faithful to the original game’s thrilling vision.';
      game.background_image = "https://los40.com/los40/imagenes/2023/01/31/videojuegos/1675176872_934497_1675176921_gigante_normal.jpg";
      const carrouselImages = []
      game.images = carrouselImages
  }  
  if(game.name === "For Honor") {
      game.price = '14.99';
      game.description = 'Carve a path of destruction through an intense, believable battlefield in For Honor';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736633/ipnew4tvlkzbjt9enm9k.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741397/pjcc0ka9eoqdjpvnwxfx.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741398/dhsalnkzxcbklyhk23m0.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741399/zehh2fdvyjcljaygae38.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741399/iztzltjjkitgwknzvy2n.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741400/etdkarbf3wvijrupqigk.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741401/oau4aq1mqfabniukvdiz.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741402/txngjoejnx2lxrppdtzl.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Fallout: New Vegas") {
      game.price = '9.99';
      game.description = 'Welcome to Vegas. New Vegas. Enjoy your stay!';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736634/tnznqocilkp8gvbl1shn.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741403/ddgnskfo8s7cruea4owt.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741403/g6rmpygr66zahn6i09uh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741404/v9btrx26myt7olklnebs.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741405/kd6xbbyirowpvmeflhg1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741405/om48j6zu8ahu1dxcfcxt.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741406/rfmxtiwivczmo3hbh6em.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741406/cpbgmjuwcj7vpnbtauk9.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Assassin’s Creed IV: Black Flag") {
      game.price = '39.99';
      game.description = 'The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace.Among these outlaws is a brash young captain named Edward Kenway.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736635/ml6qeapxvgr6cpbsirfp.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741407/jxspvu6cfwpklu1x3efy.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741408/fh74vytshiphcqpkfen8.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741408/asusgsvzxaq106t2eolv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741409/ssz7iehdatbf0yndcev5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741410/qyjhlarzcwyckyn6ow8m.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741410/lfnpv6j2ajfgwl8hn9xs.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741411/hjj0ssxxlfsekqxlhtpe.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Dishonored") {
      game.price = '9.99';
      game.description = 'Reprise your role as a supernatural assassin in Dishonored 2. Declared a “masterpiece” by Eurogamer and hailed “a must-play revenge tale” by Game Informer, Dishonored 2 is the follow up to Arkane’s 1st-person action blockbuster & winner of 100+ "Game of the Year" awards, Dishonored.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736635/a0m7zkxahbsjh7msc3kp.jpg";
      const carrouselImages = []
      game.images = carrouselImages
  }  
  if(game.name === "Company of Heroes 2") {
      game.price = '19.99';
      game.description = 'Experience the ultimate WWII RTS platform with COH2 and its standalone expansions. This package includes the base game, which you can then upgrade by purchasing The Western Front Armies, Ardennes Assault and/or The British Forces. More info in the "About This Game" section below.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736636/aogquv2wj0gifw6esdwl.jpg";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741411/bl3nlpq2fspbibykxluj.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741412/vqkanutuaxjgotekp1ot.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741413/of3farrseoz60b2mtjnt.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741413/cdmtic11uc4sekl4sep4.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741414/eqad7qomeitbjvenfedm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741415/pbyg3liosv7l0fjvgvog.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741415/gxqriq8o8aifvvmmpbuo.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Hellblade: Senua's Sacrifice") { //aqui termina la pagina 4
      game.price = '29.99';
      game.description = 'From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior’s brutal journey into myth and madness. Set in the Viking age, a broken Celtic warrior embarks on a haunting vision quest into Viking Hell to fight for the soul of her dead lover';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736638/qkruaugimeo0t1lveloe.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741421/uyymfg1idgsbpx9wmzfa.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741421/zllwlplitsf53of8skzn.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741422/sclok74qewxy8teq2jpe.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741422/gkqrzegh4knt8gv2rhqp.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741423/mp9kxk7xthsn8esbasl1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741424/atmqiiez5erjwwwebivf.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741424/hbeiafshrgwzpwo3apfd.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Dishonored 2") {
      game.price = '29.99';
      game.description = 'Reprise your role as a supernatural assassin in Dishonored 2. Declared a “masterpiece” by Eurogamer and hailed “a must-play revenge tale” by Game Informer, Dishonored 2 is the follow up to Arkane’s 1st-person action blockbuster & winner of 100+ Game of the Year awards, Dishonored.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736639/ehu5i4mark9zpxca4m1o.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741425/oaxxrkq371gjt7yydbbq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741425/ybxso6e7kck6suagrzq7.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741426/vcuks2hqdynd65eqzwy8.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741427/uo1rdtayngb4slch3xst.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741427/xsfckpqpyp1nm3gn05hy.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741428/odwaxrfsy3ribjf54qc4.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741428/jfnjkhztgylpbawvnmye.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Hitman: Absolution") {
      game.price = '19.99';
      game.description = 'The original assassin is back! Betrayed by the Agency and hunted by the police, Agent 47 finds himself pursuing redemption in a corrupt and twisted world.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736637/nanw7fw9pxiuyi2gvdf6.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741416/q1edw7hpbtdq2udeihvu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741417/d3dsa11zebhypic0fokp.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741417/ixgndeu6xtohexyo4bmm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741418/g87tjxzp8k9zybu6kquf.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741419/rpovgjxlx6xplxp1tasl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741419/yfyxwmzxfzrkfvlmfqss.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741420/i6oebnmwcytznicudck9.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "The Elder Scrolls V: Skyrim Special Edition") {
      game.price = '39.99';
      game.description = 'Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736639/pdhgji9snfhfehy4a5uj.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741429/q6o8iteq1woguaoz8zhv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741430/rwk09ujiudhq4h6fy1or.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741430/yw9yfbu9xkwqw3f6rmof.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741431/wyrgdhhv7gelsbscdzgm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741432/uelvdwi17spti9qorsup.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741433/vn1in9avrnz1lcczbrse.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741433/yntpwyybbamvwvd5dvtl.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Control") {
      game.price = '39.99';
      game.description = 'Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736640/bfa4htnlrxix5qgblcid.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741434/x8o1byysgtsqo7qjxjto.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741435/knht4r64e1hsxuykvks5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741435/nb8zw9mmjmilbmx88nn1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741436/thrmf67n9eqyvzmzutrt.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741437/pp4e3yvgmzdoms7pdwtl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741437/j1gfqsgyijw6yjpu0aw7.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741438/bzumaxmuryy8xvw5fxch.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Death Stranding") {
      game.price = '8.49';
      game.description = 'From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736641/o8uitkesgyyvw98e2pbl.jpg";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741439/yanzo41u6rx3y70go2lj.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741439/gav73qweo8pom7azju7h.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741440/s5lcfzn7azat8taviode.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741441/gkh4yluzqyoh8kao2x5t.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741441/zmt4waa2mr8ylaquvlbv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741442/vo3cmebc64qgj6wwtf0e.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741443/dpcretm0x1zd1kwbhz7k.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Metal Gear Solid V: Ground Zeroes") {
      game.price = '19.99';
      game.description = 'World-renowned Kojima Productions brings the Metal Gear Solid franchise to Steam with METAL GEAR SOLID V: GROUND ZEROES. Play as the legendary hero Snake and infiltrate a Cuban military base to rescue the hostages. Can you make it out alive?';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736642/byfkvqmleoeobwzu8kjp.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741448/wmwjpaueub8zjdrh0okt.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741450/m0n16gw2g0txlvlcrg7w.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741450/irm5fdyfq9r0i1syiwkc.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741451/hrqegwsvqk6igix36x1x.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741451/s44jz3orfhlvf33gf9ev.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741452/grcngxdbrqkysp1najkv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741453/bcmgzkkl2wfbbtptdq77.jpg",]
      game.images = carrouselImages
  }  

  if(game.name === "Star Wars Jedi: Fallen Order") {
      game.price = '39.99';
      game.description = 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736642/mwu8vl5dhvzu5f6pa5rs.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741444/swywknjdpkbtwv9j5hrd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741444/tifnmtniwne0us744zlh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741445/jua3qiu0ha6yn44voi3f.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741446/zhgf4b97hbkmgmtsqhko.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741446/yd5tjmuy8iosw7x62fsj.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741447/ugvl1wpmlpxdmpiappbl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741448/ohyjnm41ofpkqt0fvmo8.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "The Last of Us™ Part I") {
      game.price = '59.99';
      game.description = 'Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.';
      game.background_image = "https://sm.ign.com/ign_br/blogroll/t/the-last-o/the-last-of-us-part-i-review_q6z5.jpg";
      const carrouselImages = []
      game.images = carrouselImages
  }  
  if(game.name === "Mass Effect 2 (2010)") {
      game.price = '19.99';
      game.description = 'Recruit. Explore. Control.Two years after Commander Shepard repelled invading Reapers bent on the destruction of organic life, a mysterious new enemy has emerged. On the fringes of known space, something is silently abducting entire human colonies';
      game.background_image = "https://cdn.mcr.ea.com/3/images/0bffe386-f386-4073-ab6b-079981191d18/1587703563-0x0-0-0.jpg";
      const carrouselImages = []
      game.images = carrouselImages
  }  
  if(game.name === "Just Cause 3") {
      game.price = '19.99';
      game.description = 'With over 1000 km² of complete freedom from sky to seabed, Rico Rodriguez returns to unleash chaos in the most creative and explosive ways imaginable.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736643/v1hmyx8ya0zcfarlloxw.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741453/xaju4vtat13a74hkqope.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741454/kkjvuqtcajxwb4lu410s.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741455/wfxnddb33cimdr3cdda7.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741456/pccicdige9igzewkoiai.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741457/wph7v1x2k1wxjj2jaey5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741457/strotrismblpb16fk0di.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741458/l6tbuneybj3tjiwc2xux.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Mortal Kombat X") {
      game.price = '19.99';
      game.description = 'Experience the Next Generation of the #1 Fighting Franchise. Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736644/c8di3dug7ngqpeogcuzh.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741459/lte2jayu9agdgvdzetwb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741460/mwcelhkbqyqeb4m4edhd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741460/q1jowqcjs1dn6jkuorbc.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741461/sr7bli5fhekalxwdoeay.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741462/t1iesh8cgt988k4hisen.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741462/hyrh3nhmszttkus5p3bl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741463/u17myqeoe0dbsob2vglo.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Bastion") {
      game.price = '14.99';
      game.description = 'Discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736644/cokhftkywqowyjap6n2q.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741464/zj3zbe4lupvzt4spbwmq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741464/jixbaqzcazbxett1clue.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741465/bhojua9vpxpi69sygmqe.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741465/rzz4g9mnjcoxyvxiagpq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741466/x0bgepjccmduxxbioz79.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741467/ltpayualnduuch2hwkw2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741467/rf0rrvlclb1iervs6yjz.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Star Wars Jedi: Fallen Order") {
      game.price = '14.99';
      game.description = 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736642/mwu8vl5dhvzu5f6pa5rs.jpg";
      const carrouselImages = []
      game.images = carrouselImages
  }  
  if(game.name === "Journey") {  //termina pagina 5
      game.price = '14.99';
      game.description = 'Explore the ancient, mysterious world of Journey as you soar above ruins and glide across sands to discover its secrets. Play alone or in the company of a fellow traveler and explore its vast world together. Featuring stunning visuals and a Grammy-nominated musical score, Journey delivers a breathtaking experience like no other.';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736645/u103royxifdtbgy2vumg.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741468/hkdhiaxa9psrhtsxlqmu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741468/rr83nafigcvebe0jcxyn.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741469/p2fjlyohvnwbusaqseiw.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741469/ajpnrmdjdahdmg3gtitu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741470/vks8fu8qd3jy4xzfktzi.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741471/ahcbxye0o9vfsbc3tgm5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741471/ldpekhsm7zskyvxoaibw.jpg",]
      game.images = carrouselImages
  }  
  if(game.name === "Counter-Strike") {
      game.price = '4.99';
      game.description = 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.)';
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736646/grckzhy0e0j6uqerfgcj.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741472/w4crdkjkimeas9jv6mrl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741473/hyzdrhkdecjl6zxpz1gi.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741473/vjxqjndw5cvayroju98p.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741474/cavs3aqygwon1ryiiozu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741475/uahvodovvpxz5pdig6ec.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741475/xuariwqik8mkfm9e9yo2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741476/gmemmi7kpwfrwg6gne2z.jpg",
      ,]
      game.images = carrouselImages
  }
  if(game.name ==='Mad Max'){
      game.price='15.99'
      game.description='Play as Mad Max, a reluctant hero and survivor. Max just longs to leave the madness behind and find peace.'
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736647/eecxzglcorwp4jcnuruu.jpg";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741477/agnug7bq8gmdwd1yshem.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741478/jtfdlj0jwq8nf4bmbpai.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741478/pybngkdsq07sbfa5gszu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741479/g4q0nihbvo2hecqpbszv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741480/plgwkcgozw87su745zi6.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741481/jiuibsg6si0nfl1c9vlm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741482/qkqtw1uekxzufq6vo5zq.jpg",]
      game.images = carrouselImages
  }  
  if(game.name ==='Left 4 Dead'){
      game.price='8.50'
      game.description='From Valve comes Left 4 Dead, a cooperative action-horror game where up to four players face off against hordes of zombies and terrifying mutant monsters in an epic fight for survival.'
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736647/mb9jfbv2vjpl06hvel8c.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741483/w79artfx7ys3dcoiguze.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741483/pv6c8mdhyl9wd2knzgov.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741484/sk0g0jijc18wxpvmtaip.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741485/v4qcgc5mdypmz3fa4nkd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741485/mtkne0dxrhh6wgsoqn2n.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741486/jlwkrzlhr2x7mrqljuiz.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741487/hikrqlzjmdqhqdwvbbtj.jpg",]
      game.images = carrouselImages
  }  
  if(game.name ==='Metro 2033 Redux'){
      game.price='14.99'
      game.description=`In 2013 the world was devastated by an apocalyptic event, annihilating almost all mankind and turning the Earth's surface into a poisonous wasteland. A handful of survivors took refuge in the depths of the Moscow underground, and human civilization entered a new Dark Age. The year is 2033. `
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736648/r5o19bxjq3scwm2fxdn4.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741487/fmv6ky5mgp5jyshkthu6.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741488/zvpmfu9xng5gyrmfhd4e.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741489/jfuu1a8lxxejfk0a8aar.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741490/fxg0murjqps613wzj9g9.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741490/j50lk3slenpfmd0qjgz6.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741491/a62dbhsygzhnlwu7btqd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741492/egemxalf0liicyvnuyp7.jpg",]
      game.images = carrouselImages
  }  
  if(game.name ==='BioShock 2 Remastered'){
      game.price='3.49'
      game.description=`In BioShock 2 you will step into the boots of Rapture's most iconic inhabitant, the Big Daddy, traveling through the decrepit and beautiful ruined city, pursuing an uncertain goal in search of answers and your own survival.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736649/urr0cxl7decw8f8sswtx.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741492/gkzcm1zcm5cwnehmqiff.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741493/cnoes0qitbaw5ti5b5su.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741494/qehhb5iz8gv1cadtjteu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741494/uqklizih3zunw34gjxds.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741495/c6mmceculyhngkywh2ok.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741496/v05pxowvatv6oeablunz.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741496/rkkcwlzasxywz4zxk7ui.jpg",]
      game.images = carrouselImages
  }  

  if(game.name ==='Monster Hunter: World'){
      game.price='24.99'
      game.description=`Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you will be able to enjoy the best gaming experience, using all the resources at your disposal to stalk monsters in a new world brimming with excitement and surprises.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736650/m7bpwiohkpm8uqhhaypa.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741497/cc8euxjvj6mk82clgtyg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741498/zmwoi2rwah0enbctegxn.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741499/txgmfxrimwit2nilkfyd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741499/fkag5hpcck0nr1ukf57l.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741500/cbq6ht4yytyze35jdhyv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741501/vs4wqpcugfstotjhehm1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741501/gy0jy79ukhi7vhhgh3um.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='NieR:Automata'){
      game.price='29.99'
      game.description=`NieR: Automata tells the story of androids 2B, 9S and A2, who fight to reclaim the machine-run dystopian world that has been invaded by powerful mechanical life forms.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736651/syklbqojie83ayhc20ne.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741502/femhfdjy41mieuarnk57.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741503/t6b4ik6x8ifmsj7iv8ds.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741503/bvucg0etyubk2e52pyd3.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741504/bskasyncndn85svgff8z.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741505/gvivzgyjr7i9maysijzb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741506/t7mwl5v31ojhz6cvio46.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741506/mw7cnfwp4mpt9fia0ulr.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='XCOM: Enemy Unknown'){
      game.price='2.99'
      game.description=`XCOM: Enemy Unknown puts you in command of a secret paramilitary organization called XCOM. As XCOM Commander, you will defend Earth from a terrifying alien invasion by managing resources, developing technologies, and overseeing both combat strategies and individual unit tactics.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736652/elgkiqhhiamf3d9s8vfb.jpg";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741507/im9nfzhrhuwazmvxlpvq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741508/grcqqi7qs7pm3fmuycxi.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741509/qvkrkpagtjuh7wczky8u.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741509/umiuuo9feqpejtbgl4bl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741510/t6bmiexc9tj429nwljdp.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741510/hod8zjga6kwvbwlsii2s.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741511/hnk2cu1f3uppxquoxtzp.jpg",
      ,]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Fall Guys: Ultimate Knockout'){
      game.price='5.99'
      game.description=`This is where it all began… Season 1 of Ultimate Knockout had Fall Guys stumbling into the world, full of colorful classic rounds including Door Dash, See Saw and Slime Climb!`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736652/rjdtaepobugso5lm020l.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741512/kzbvinb6aqxrlqgzfa4s.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741513/gw2psc1ccyxlwsjkuqx1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741513/c973iysthf6jcanbxyuy.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741514/not5f71uvspgiavkxuio.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741514/yggmhzfljek0fej7t1vs.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741515/t9lkesnmaiv0drex7l3b.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741516/pji5bigdflzaz57st0ys.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Brutal Legend'){
      game.price='10.99'
      game.description=`Brütal Legend is an action-adventure that marries visceral action combat with open-world freedom. Set in a universe somewhere between Lord of the Rings and Spinal Tap, it’s a fresh take on the action/driving genre, which in this case is full of imitation cover bands, demons intent on enslaving humanity and Heavy metal tunes.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736653/g0cckyatuoafpvnze7nh.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741517/tc09vhsjrcsbttdxscbl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741518/yajnpti4yxhfdmbl8uir.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741518/ttiqfoa7jahx22xs6bg9.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741519/eiiifn5slbtlntndbigx.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741520/erans4tu5rk6amkqbdyk.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741520/iqqzstudkxzkjxa3lefw.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741521/am45gqnskkonvdx4gwxd.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Brothers: A Tale of Two Sons'){
      game.price='10.99'
      game.description=`Join the brothers on their epic fairy tale journey, created by Josef Fares, the visionary Swedish director, and premier developer Starbreeze Studios.Control both br
      others at the same time: a single player game mechanic, but cooperative... Never seen before!`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736654/fof04wnhdzqupxtqbbzp.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741521/cun6dszagw7xaqqf42jx.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741522/scjsaozsptxwrmqqkick.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741523/aft7t6zp7qx0xykirr6v.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741524/zrudva7f2gmcanjzywvv.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741524/c0w158xiwfzvtyrhunkm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741525/dpxz0ptw4o2ujrwmlz9o.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741526/n3ovsabqblesuldkvpdv.jpg",]
     game.images = carrouselImages
      }
  
  if(game.name ==='Heavy Rain'){
      game.price='15.99'
      game.description=`The season is open to hunt down a murderer known only as the "Origami Killer". Four characters, each with their own investigations, have to be part of a desperate attempt to prevent the murderer from claiming a new victim.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736654/zygi9h95m6exxpxuiyso.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741526/ffrwyp5fa0yugvwteqkb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741527/ibk3xmz4tevpvajv0pid.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741528/tyncpd8l0tsa8hmuni0v.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741529/vyd1439tctm7tmh8usvs.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741529/f7dcvcqf72rlgfddzdgi.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741530/peosouzsuxgoftrxwd0h.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741531/w4rama52d9od8tzozbog.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Titanfall 2'){
      game.price='24.99'
      game.description=`Includes all Digital Deluxe content, the Starter Pack to level up and unlock items faster, and the custom Underground paint job for the R-201 Carbine.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736655/rbwfbiwytc1kpqgxg6gx.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741532/qae8624ltmyykrf4zelu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741532/wnmjutoejcqyx1khoht2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741533/fh98fyf4cfyo3ylmslvu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741534/ri21vnupkzzf8qq6sdbb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741535/qci5sejkjeyc3ioawfvd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741535/ntqij4xvvhndzn6juplh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741536/yuhdit8l3xokek6kichv.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Resident Evil 7: Biohazard'){
      game.price='15.99'
      game.description=`Resident Evil 7 biohazard is the next big installment in the renowned Resident Evil series and marks a new milestone for the franchise as it taps into its roots and opens the door to a truly terrifying scare experience.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736656/js75ehvoky9mqznu5cu3.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741537/dvsgpw1ezxsyc0idlmr1.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741537/qjonz7qnjrlch4yji14h.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741538/jxodrgbzszmnlpunfycz.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741539/wgdfptejjxbf4n2gebez.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741540/fhzyjqmexyouthp4lnfj.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741540/sywwygycqbqltsp4m1e6.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741541/bhc28cqthovbheekpmdy.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Cities: Skylines'){
      game.price='24.99'
      game.description=`It introduces new elements to the gameplay to capture the excitement and intricacies of maintaining a real city, while expanding on some of the familiar themes of the urban development experience.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736657/d4mxoamvb7gmaek9a6kb.jpg";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741541/b3t0kpn9pzdcw2ef9j6l.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741542/b3udlg40hd88mlxfmapi.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741543/uhg1iwellenneei7tqgy.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741544/c5qxvh9socyqj4o3j3vt.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741544/kmhnduhagztnhoe6kxrr.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741545/odk8zbdrdvkq6zvid9zb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741546/xgvhzzbtpryf45xznbi5.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Batman: Arkham City - Game of the Year Edition'){
      game.price='14.99'
      game.description=`Batman: Arkham City is based on the intense atmosphere of Batman: Arkham Asylum, taking players through the vast Arkham City (universe five times larger than the Batman: Arkham Asylum game) the new maximum security "home" For all the thugs, gangsters and criminal minds in Gotham City.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736658/jgf2fcovcfcfgpoy2rmf.jpg";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741546/xvhiigfhbbbkbznrxfue.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741547/wsr3fmgjucqzp0zskobq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741548/uexx7j52nyvtq2xddd8s.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741548/aumchgxtamalltha1boa.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741549/kbj6vehredf8j2qrelwg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741550/oc4jirhrrakqqxwhag6d.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741551/jpewv0vgvdrxxz2aoq46.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='SEGA Mega Drive and Genesis Classics'){
      game.price='19.52'
      game.description=`SEGA's collection of Mega Drive & Genesis Classics comes to a new generation, now updated with even more features: online multiplayer, achievements, mirror mode, rewind, save states, VR and more! Over 50 classic games in one great package. Get into the classics!`
      game.background_image = "https://assetsio.reedpopcdn.com/sega-mega-drive-classics-to-get-nintendo-switch-release-1537276949381.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741551/wsuobadkkh3sbmtgjhb8.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741552/dtkw4eczj4zmfobnmgcu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741553/pfozin20esneqxy2zbwl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741553/oypoycnrwvdsral7dswr.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741554/xh65wluyuwnphi0auijs.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741555/mdqmgvnqsafflhdv7f4j.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741555/v7c3ov6ty17c7lskn4tn.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Batman: Arkham Asylum Game of the Year Edition'){
      game.price='14.99'
      game.description=`Experience what it's like to be Batman and face off against Gotham's greatest villains. Explore every corner of Arkham Asylum and roam free on the famous island.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736661/wfm9mvjzkg0wjwn5qym1.jpg";
      const carrouselImages = [
          " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741561/uwvppxr5wxbtmrk2babu.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741562/jiqm9qglvrhlthpnrsed.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741562/ekqio1gderdiqwaamzk7.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741563/hc4fwdnrp7zczyq1ssmk.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741564/vseu7egikkwcmkmqe92l.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741564/bka20wmsxicbxrazdrqb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741565/e8eostnngtoxcuacg5oy.jpg",
      ]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Watch Dogs'){
      game.price='25.99'
      game.description=`In a hyper-connected world like the one we find ourselves in today, the city of Chicago operates under ctOS: the most advanced computer network in the United States.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736660/ydut8ykt0b1q5ahyjowc.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741556/xixcj0mxdykpp93da7rh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741557/niz5eju8zho3xj25jgek.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741558/tpuxgxoj43o5fcespcpi.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741558/gd4vqab99rybyxcrx8p2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741559/fjjkt8rtabihhnmiquq3.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741560/cvc7elkoubil2eyxwyf0.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741560/cnqb42grge9lap6wmbih.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Max Payne 3'){
      game.price='17.99'
      game.description=`No longer a New York City cop, Max Payne moves to São Paulo to protect a wealthy family in an effort to finally escape his troubled past. This complete edition of Max Payne 3 includes the complete original game and all previously released downloadable content. `
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736661/kmshik7zllv5po2sh0lt.jpg";
      const carrouselImages = [ " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741566/xhdd0qlqaeqa8zjx8cdf.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741567/ishdf0b6ngmohwcphdbd.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741567/d8ifaxgquxohsg6wc37o.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741568/zuxox9kuxcy0cn9mkseh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741569/mnqflptvyrmesumuh7b7.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741570/jcazavfiyllgaqerc0zb.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741571/xdr9lwfeldth5p06bdtj.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Middle-earth: Shadow of War'){
      game.price='34.99'
      game.description=`Enjoy an epic open world, recreated by the award-winning Nemesis system. Forge a new Ring of Power, conquer strongholds in great battles, and rule Mordor with your own army of orcs in Middle-earth™: Shadow of War™.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736662/mnnh5im7vhlq9vketkb1.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741571/dkjr65dkwkvir8fgqlwh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741572/iesg3b6gupe8fh1yptck.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741573/ae7blc5ikigp7xexgbnt.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741573/n9lzipxrdzp3vvsd1tgl.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741574/hnfadypvo9dc1vzqpbi5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741575/oo4bfjrrx65ckypd64ks.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741576/zbearsv8er40myy8p3wz.jpg"]
      game.images = carrouselImages
  }  
  
  if(game.name ==='Far Cry 5'){
      game.price='46.99'
      game.description=`Welcome to Hope County, Montana, the land of the brave and the free, but also of the doomsday sect known as "Eden's Gate." Take on cult leader Joseph Seed and his brothers to free the community of Hope.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736663/vhiivolgq4ort0k3zwxd.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741576/fygxptymmwml1hdp0znh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741577/fbrgzku8tpmtvihj8loz.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741578/wssq0xsecrkxwgvxlxoa.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741578/mu72ggtey9wm04aszz4h.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741579/qzvt2f5vaedq0vu2jz4v.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741580/tmockkqvc4xo4regnwjg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741580/sodfjelvtawwhgajkcqj.jpg",]
      game.images = carrouselImages
  }  
  
  if(game.name ==='The Darkness II'){
      game.price='3.99'
      game.description=`An intense first person shooter that offers a twisted and gripping tale, modern police drama and supernatural horror.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736664/yq0iimybe2ofpqruvtqp.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741581/uvn9ps4bdpt4re0d5kos.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741582/ifyqqeppgv5qipxabplh.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741583/ugbyoje3odijujzhnaly.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741583/kvnyd0iofx4phnnaqlpm.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741585/v371llq1zilhx8yr3eor.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741585/gia11okaxfnuvhljp661.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741586/danttye1wzdhfvldznz1.jpg",]
      game.images = carrouselImages
  }  
  if(game.name ==='INSIDE'){
      game.price='16.99'
      game.description=`Persecuted and alone, a boy finds himself, without eating or drinking him, in the middle of a dark project.`
      game.background_image = "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Inside_image1600w.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741592/olrozdz2pzbgzeetoueg.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741593/mtohg3gbyvewautspsvy.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741593/im9glj5wve1vcgubslpp.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741594/mmf13ajdelop5ytcfpo2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741594/jhtidmvfm26zw54wbsh2.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741595/fazpxuyp1gtdegsnvhzi.jpg",
      " https://res.cloudinary.com/dynnwv7md/image/upload/v1681741774/mnd3eulvq3zun0gwb1qz.jpg",]
      game.images = carrouselImages
  }  
  if(game.name ==='Shadow of the Tomb Raider'){
      game.price='29.92'
      game.description=`As Lara Croft tries to save the world from a Mayan apocalypse, she must become the tomb raider she was destined to be.`
      game.background_image = "https://res.cloudinary.com/dc4tnfdej/image/upload/v1681736665/fli6z28a4mnhdt2ivzed.jpg";
      const carrouselImages = [" https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741587/pyacckh5cepdh7r7jieq.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741587/dnkgx0qyyv4q0ndwdfjx.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741588/pljt1ndlzmlus17nd53u.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741589/cscljyhsxatmycon0rrs.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741590/jdt0wptmtrc0ajq1iyn5.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741590/k0bo5wnpp2wydiccs0ut.jpg",
      " https://res.cloudinary.com/dc4tnfdej/image/upload/v1681741591/rmz4cramrzvnb3oc2s5x.jpg",]
      game.images = carrouselImages
  }  

};

const addAllProperties = game => {
  addPrice(game);
  addPropertieGenres(game);
  addPropertiePlatforms(game);
  addPropertieStore(game);
  // addPropertyImages(game);
  const {id,name,background_image,released,rating,playtime,platforms,genres,stores,price,images,description  } = game;
  const gameClear = { id,name,released,background_image,rating,playtime,platforms,genres,stores,price,images,description };
  return gameClear;
};
module.exports ={ addAllProperties };