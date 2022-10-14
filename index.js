const songs = [
      {
            title: "Show Me How To Live",
            artist: "Audioslave",
            genre: "Rock",
            duration: 4.38
      },
      {
            title: "A Potion For Love",
            artist: "Aurora",
            genre: "Pop",
            duration: 3.37
      },
      {
            title: "Nutshell",
            artist: "Alice In Chains",
            genre: "Rock",
            duration: 4.19
      },
      {
            title: "Don't Follow",
            artist: "Alice In Chains",
            genre: "Rock",
            duration: 4.22
      },
      {
            title: "Exist For Love",
            artist: "Aurora",
            genre: "Pop",
            duration: 4.19
      },
      {
            title: "Finnaly Free",
            artist: "Dream Theater",
            genre: "Rock",
            duration: 9.55
      },
      {
            title: "The Best Of Time",
            artist: "Dream Theater",
            genre: "Rock",
            duration: 13.8
      },
      {
            title: "Smells Like Teen Spirit",
            artist: "Nirvana",
            genre: "Rock",
            duration: 4.38
      },
      {
            title: "You Know Your Right",
            artist: "Nirvana",
            genre: "Rock",
            duration: 3.41
      },
      {
            title: "Heart Shapep Box",
            artist: "Nirvana",
            genre: "Rock",
            duration: 4.43
      },
      {
            title: "The Feels",
            artist: "Twice",
            genre: "Kpop",
            duration: 3.2
      },
      {
            title: "What Is Love?",
            artist: "Twice",
            genre: "Kpop",
            duration: 3.34
      },
      {
            title: "Alcohol Free",
            artist: "Twice",
            genre: "Kpop",
            duration: 3.34
      },
      {
            title: "I Can't Stop Me",
            artist: "Twice",
            genre: "Kpop",
            duration: 3.41
      },
      {
            title: "Vigil",
            artist: "Lamb Of God",
            genre: "Metal",
            duration: 4.48
      },
      {
            title: "Duality",
            artist: "Slipknot",
            genre: "Metal",
            duration: 3.34
      },
      {
            title: "Psycosocial",
            artist: "Slipknot",
            genre: "Metal",
            duration: 5.2
      },
      {
            title: "Start The Healing",
            artist: "Korn",
            genre: "Metal",
            duration: 0
      },
      {
            title: "Did My Time",
            artist: "Korn",
            genre: "Metal",
            duration: 4.5
      },
      {
            title: "Blind",
            artist: "Korn",
            genre: "Metal",
            duration: 4.18
      }
];

////////////////////////////////////////////////////

function getSongsByGenre(data, genre) {
      const songs = [...data];

      const output = songs.filter(song => {
            return song.genre.includes(genre);
      });

      return output;
}

function getSongsByArtist(data, artist) {
      const songs = [...data];

      const output = songs.filter(song => {
            return song.artist.includes(artist);
      });

      return output;
}

function generateRandomPlaylist(data) {
      // bikin reference baru
      // biar nggak ada side effect
      const songs = [...data];

      // buat nampung output
      const output = {
            duration: 0,
            playlist: []
      };

      while (true) {
            // random number
            const rnum = getRandomNumber(0, songs.length - 1);

            // ngambil data di array songs
            // pake method .splice() sekalian
            // ngehapus data yang udah diambil
            // biar nggak ada duplikasi lagu di playlist
            const [song] = songs.splice(rnum, 1);

            // test nambah total durasi. kalo setelah ditambah ternyata
            // durasinya lebih dari 60 menit, udah stop. kalo ngga ya lanjut
            if ((output.duration + song.duration) > 60) break;

            // push song ke output.playlist
            output.playlist.push(song);

            // sama increment total durasinya.
            output.duration += song.duration;
      }

      return output;
}

// helper buat dapetin angka random
function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
}

////////////////////////////////////////////////////

// const songsByGenre = getSongsByGenre(songs, "Rock");
// const songsByArtist = getSongsByArtist(songs, "Twice");
// const randomPlaylist = generateRandomPlaylist(songs);

// console.log("songs by genre:", songsByGenre);
// console.log("songs by artist:", songsByArtist);
// console.log("random playlist:", randomPlaylist);
