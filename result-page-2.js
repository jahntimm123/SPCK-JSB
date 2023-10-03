const listCostumes = [
    {
      color: "white",
      style: "creepy",
      imageUrl: "https://i.etsystatic.com/20486599/r/il/f4fda9/1981310428/il_1588xN.1981310428_613b.jpg",
      name: "Ghostly Specter",
      description: "A haunting apparition, perfect for a scare.",
    },
    {
      color: "black",
      style: "creepy",
      imageUrl: "https://images.halloweencostumes.ca/products/57381/1-1/womens-cool-witch-costume.jpg",
      name: "Wicked Witch",
      description: "A classic witch costume with a sinister twist.",
    },
    {
      color: "white",
      style: "funny",
      imageUrl: "https://images.halloweencostumes.com/media/13/ghosts/kids-friendly-ghost-costume.jpg",
      name: "Friendly Ghost",
      description: "A cute and friendly ghost for a fun Halloween.",
    },
    {
      color: "blue",
      style: "creepy",
      imageUrl: "https://images.halloweencostumes.co.uk/products/13846/1-1/blue-afro-clown-wig.jpg",
      name: "Zombie Clown",
      description: "A creepy clown with a zombie twist, not for the faint-hearted.",
    },
    {
      color: "white",
      style: "funny",
      imageUrl: "https://i.pinimg.com/736x/10/d0/9a/10d09af8e594d29a6504c649ae241b54--halloween-costumes-for-boys-scary-costumes.jpg",
      name: "Adorable Pumpkin",
      description: "A cute pumpkin costume perfect for a whimsical Halloween.",
    },
    {
      color: "black",
      style: "funny",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.rhUmW_r-UuDpHYxLZWK3kwHaKl&pid=Api&P=0&h=180",
      name: "Vampire Bat",
      description: "A funny and spooky vampire bat costume.",
    },
    {
      color: "blue",
      style: "funny",
      imageUrl: "https://ae01.alicdn.com/kf/HTB1jv8nRXXXXXb9XVXXq6xXFXXXX/cosplay-Sesame-Street-Blue-Cookie-Monster-mascot-costume-Cheap-Elmo-Mascot-Adult-Character-Costume-Fancy-Dress.jpg",
      name: "Playful Blue Monster",
      description: "A playful blue monster for a lighthearted Halloween.",
    },
    {
      color: "black",
      style: "cute",
      imageUrl: "https://i5.walmartimages.com/asr/5b8c10bd-2795-4e13-a06e-9c789c810b22_1.caad52f4a98d27abdc1dcc66e2d93bb1.jpeg",
      name: "Mysterious Phantom",
      description: "A mysterious and cute phantom costume.",
    },
    {
      color: "white",
      style: "cute",
      imageUrl: "https://images.halloweencostumes.com/products/1525/1-1/adult-divine-angel-costume.jpg",
      name: "Angelic Angel",
      description: "An angelic and cute costume perfect for a heavenly look.",
    },
  ];
  
  
  document.addEventListener('DOMContentLoaded', function(){
    const getUrlParam = new URLSearchParams(window.location.search);
    const userColor = getUrlParam.get('color');
    const userStyle = getUrlParam.get('style');
    const costumeName = document.getElementById('costume-name');
    const resultImage = document.getElementById('result-image');
    const resultDescription = document.getElementById('costume-description');
    const selectedCostume = listCostumes.find(
        (costume) => costume.color === userColor && costume.style === userStyle
    );
    if(selectedCostume){
        costumeName.innerText = selectedCostume.name;
        resultImage.src = selectedCostume.imageUrl;
        resultDescription.innerText = selectedCostume.description;
    }
  })