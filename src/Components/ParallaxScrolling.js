import React from 'react'
import '../homeStyle.css'

function ParallaxScrolling() {
    return (
        <>
            <div className='bgimg-1' >
                <div className='caption' >
                    <span className='border' >SCROLL DOWN&#128512;</span>
                </div>
            </div>
            <div style={{ color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
                <h3 style={{ textAlign: "center" }} >Parallex demo</h3>
                <p>
                    "Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo."
                </p>
            </div>
            <div className='bgimg-2' >
                <div className='caption' >
                    <span className='border' style={{
                        backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7'
                    }} >LESS HEIGHT</span>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <div style={{ color: "#ddd", backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
                    <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
            </div>
            <div class="bgimg-3">
                <div class="caption">
                    <span class="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>SCROLL UP</span>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }}>
                    <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                </div>
            </div>
            <div class="bgimg-1">
                <div class="caption">
                    <span class="border">COOL!</span>
                </div>
            </div>
        </>
    )
}

export default ParallaxScrolling