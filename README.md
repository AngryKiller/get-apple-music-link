# Get Apple Music Link

A simple module to get an Apple Music link from a track name and artist

### Usage

#### With track name and artist

```js
getAppleMusicLink.track("Greatest", "Eminem", function(res, err){
     if(err){
         console.log("not found");
     }
     else{
         console.log(res);
     }
 });
```
#### Will return

`https://music.apple.com/us/album/greatest/1434770366?i=1434770506&uo=4`


Maybe I will add other parameters to find a song if I have the time and want to...

