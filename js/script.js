// 3d scroll

const doc = document;

let 
    zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = doc.querySelectorAll('.frame'),
    frames = Array.from($frames),
    zVals = [];


window.onscroll = () => {
    let 
        top = doc.documentElement.scrollTop,
        delta = lastPos - top;

    lastPos = top;

    frames.forEach((n, i) => {
        let frame, transform, opacity;

        zVals.push((i * zSpacing) + zSpacing);
        zVals[i] += delta * -5;
        
        frame = frames[i];
        transform = `translateZ(${zVals[i]}px)`;
        opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    });
}

window.scrollTo(0, 1);