// eslint-disable-next-line node/no-extraneous-import
import interact from 'interactjs';
// Interactables
interact(document.body);
interact(document);
interact(window);
interact('.drag-and-resize')
    .draggable({
    modifiers: [
        interact.modifiers.snap({
            targets: [
                { x: 100, y: 200 },
                (x, y) => ({ x: x % 20, y }),
            ],
            offset: 'startCoords',
            relativePoints: [{ x: 0, y: 1 }],
            endOnly: true,
        }),
        interact.modifiers.snapSize({
            targets: [
                { x: 100, y: 200 },
                (x, y) => ({ x: x % 20, y }),
            ],
            endOnly: true,
        }),
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
        }),
        interact.modifiers.restrict({
            restriction: _ => ({ top: 0, left: 0, bottom: 1, right: 1 }),
        }),
        interact.modifiers.restrict({
            restriction: _ => document.body,
        }),
        interact.modifiers.restrictSize({
            min: document.body,
            max: 'parent',
        }),
        interact.modifiers.restrictEdges({
            inner: document.body,
            outer: 'parent',
        }),
    ],
})
    .resizable({
    inertia: true,
});
// Selector context
const myList = document.querySelector('#my-list');
interact('li', {
    context: myList,
})
    .draggable({ /* ... */});
// Action options
const target = 'li';
interact(target)
    .draggable({
    max: 1,
    maxPerElement: 2,
    manualStart: true,
    modifiers: [],
    inertia: { /* ... */},
    autoScroll: { /* ... */},
    lockAxis: 'x' || 'y' || 'start',
    startAxis: 'x' || 'y',
})
    .resizable({
    max: 1,
    maxPerElement: 2,
    manualStart: true,
    modifiers: [],
    inertia: { /* ... */},
    autoScroll: { /* ... */},
    margin: 50,
    square: true || false,
    axis: 'x' || 'y',
})
    .gesturable({
    max: 1,
    maxPerElement: 2,
    manualStart: true,
    modifiers: [],
});
// autoscroll
const element = 'li';
interact(element)
    .draggable({
    autoScroll: true,
})
    .resizable({
    autoScroll: {
        container: document.body,
        margin: 50,
        distance: 5,
        interval: 10,
    },
});
// axis
interact(target).draggable({
    startAxis: 'x',
    lockAxis: 'y',
}).draggable({
    startAxis: 'xy',
    lockAxis: 'x',
});
interact(target).resizable({
    axis: 'x',
});
const handleEl = 'li';
interact(target).resizable({
    edges: {
        top: true,
        left: false,
        bottom: '.resize-s',
        right: handleEl,
    },
});
// resize invert
interact(target).resizable({
    edges: { bottom: true, right: true },
    invert: 'reposition',
});
// resize square
interact(target).resizable({
    squareResize: true,
});
// dropzone  accept
interact(target).dropzone({
    accept: '.drag0, .drag1',
});
// dropzone overlap
interact(target).dropzone({
    overlap: 0.25,
});
// dropzone checker
interact(target).dropzone({
    checker(_dragEvent, // related dragmove or dragend
    _event, // Touch, Pointer or Mouse Event
    dropped, // bool default checker result
    _dropzone, // dropzone Interactable
    dropElement, // dropzone elemnt
    _draggable, // draggable Interactable
    _draggableElement) {
        // only allow drops into empty dropzone elements
        return dropped && !dropElement.hasChildNodes();
    },
});
interact.dynamicDrop();
interact.dynamicDrop(false);
// Events
function listener(event) {
    const { type, pageX, pageY } = event;
    alert({ type, pageX, pageY });
}
interact(target)
    .on('dragstart', listener)
    .on('dragmove dragend', listener)
    .on(['resizemove', 'resizeend'], listener)
    .on({
    gesturestart: listener,
    gestureend: listener,
});
interact.on('resize', (event) => {
    const { rect, deltaRect } = event;
    alert(JSON.stringify({ rect, deltaRect }));
});
interact(target).resizable({
    listeners: [
        { start: listener, move: listener },
    ],
});
interact(target).draggable({
    listeners: { start: listener, end: listener },
});
interact(target).draggable({
    onstart: listener,
    onmove: listener,
    onend: listener,
});
interact.on(['dragmove', 'resizestart'], listener);
const dropTarget = 'div';
// Drop Events
interact(dropTarget)
    .dropzone({
    ondrop(event) {
        alert(event.relatedTarget.id +
            ' was dropped into ' +
            event.target.id);
    },
})
    .on('dropactivate', event => {
    event.target.classList.add('drop-activated');
});
interact(target).on('up', _event => { });
// fast click
interact('a[href]').on('tap', event => {
    window.location.href = event.currentTarget.href;
    event.preventDefault();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rqcy10ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZXJhY3Rqcy10ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFxRDtBQUNyRCxPQUFPLFFBQVEsTUFBTSxZQUFZLENBQUE7QUFFakMsZ0JBQWdCO0FBQ2hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdkIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ2xCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUVoQixRQUFRLENBQUMsa0JBQWtCLENBQUM7S0FDekIsU0FBUyxDQUFDO0lBQ1QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUNsQixDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUM3QztZQUNELE1BQU0sRUFBRSxhQUFhO1lBQ3JCLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBQ0YsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDMUIsT0FBTyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUNsQixDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUM3QztZQUNELE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztRQUNGLFFB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QUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUE7SUFFL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO0FBQ3hCLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tZXh0cmFuZW91cy1pbXBvcnRcbmltcG9ydCBpbnRlcmFjdCBmcm9tICdpbnRlcmFjdGpzJ1xuXG4vLyBJbnRlcmFjdGFibGVzXG5pbnRlcmFjdChkb2N1bWVudC5ib2R5KVxuaW50ZXJhY3QoZG9jdW1lbnQpXG5pbnRlcmFjdCh3aW5kb3cpXG5cbmludGVyYWN0KCcuZHJhZy1hbmQtcmVzaXplJylcbiAgLmRyYWdnYWJsZSh7XG4gICAgbW9kaWZpZXJzOiBbXG4gICAgICBpbnRlcmFjdC5tb2RpZmllcnMuc25hcCh7XG4gICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICB7IHg6IDEwMCwgeTogMjAwIH0sXG4gICAgICAgICAgKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiAoeyB4OiB4ICUgMjAsIHkgfSksXG4gICAgICAgIF0sXG4gICAgICAgIG9mZnNldDogJ3N0YXJ0Q29vcmRzJyxcbiAgICAgICAgcmVsYXRpdmVQb2ludHM6IFt7IHg6IDAsIHk6IDEgfV0sXG4gICAgICAgIGVuZE9ubHk6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIGludGVyYWN0Lm1vZGlmaWVycy5zbmFwU2l6ZSh7XG4gICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICB7IHg6IDEwMCwgeTogMjAwIH0sXG4gICAgICAgICAgKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiAoeyB4OiB4ICUgMjAsIHkgfSksXG4gICAgICAgIF0sXG4gICAgICAgIGVuZE9ubHk6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIGludGVyYWN0Lm1vZGlmaWVycy5yZXN0cmljdFJlY3Qoe1xuICAgICAgICByZXN0cmljdGlvbjogJ3BhcmVudCcsXG4gICAgICAgIGVuZE9ubHk6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIGludGVyYWN0Lm1vZGlmaWVycy5yZXN0cmljdCh7XG4gICAgICAgIHJlc3RyaWN0aW9uOiBfID0+ICh7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAxLCByaWdodDogMSB9KSxcbiAgICAgIH0pLFxuICAgICAgaW50ZXJhY3QubW9kaWZpZXJzLnJlc3RyaWN0KHtcbiAgICAgICAgcmVzdHJpY3Rpb246IF8gPT4gZG9jdW1lbnQuYm9keSxcbiAgICAgIH0pLFxuICAgICAgaW50ZXJhY3QubW9kaWZpZXJzLnJlc3RyaWN0U2l6ZSh7XG4gICAgICAgIG1pbjogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgbWF4OiAncGFyZW50JyxcbiAgICAgIH0pLFxuICAgICAgaW50ZXJhY3QubW9kaWZpZXJzLnJlc3RyaWN0RWRnZXMoe1xuICAgICAgICBpbm5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgb3V0ZXI6ICdwYXJlbnQnLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSlcbiAgLnJlc2l6YWJsZSh7XG4gICAgaW5lcnRpYTogdHJ1ZSxcbiAgfSlcblxuLy8gU2VsZWN0b3IgY29udGV4dFxuY29uc3QgbXlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWxpc3QnKVxuXG5pbnRlcmFjdCgnbGknLCB7XG4gIGNvbnRleHQ6IG15TGlzdCxcbn0pXG4gIC5kcmFnZ2FibGUoeyAvKiAuLi4gKi8gfSlcblxuLy8gQWN0aW9uIG9wdGlvbnNcbmNvbnN0IHRhcmdldCA9ICdsaSdcbmludGVyYWN0KHRhcmdldClcbiAgLmRyYWdnYWJsZSh7XG4gICAgbWF4ICAgICAgICAgIDogMSxcbiAgICBtYXhQZXJFbGVtZW50OiAyLFxuICAgIG1hbnVhbFN0YXJ0ICA6IHRydWUsXG4gICAgbW9kaWZpZXJzICAgIDogW10sXG4gICAgaW5lcnRpYSAgICAgIDogey8qIC4uLiAqL30sXG4gICAgYXV0b1Njcm9sbCAgIDogey8qIC4uLiAqL30sXG5cbiAgICBsb2NrQXhpcyAgICAgOiAneCcgfHwgJ3knIHx8ICdzdGFydCcsXG4gICAgc3RhcnRBeGlzICAgIDogJ3gnIHx8ICd5JyxcbiAgfSlcbiAgLnJlc2l6YWJsZSh7XG4gICAgbWF4ICAgICAgICAgIDogMSxcbiAgICBtYXhQZXJFbGVtZW50OiAyLFxuICAgIG1hbnVhbFN0YXJ0ICA6IHRydWUsXG4gICAgbW9kaWZpZXJzICAgIDogW10sXG4gICAgaW5lcnRpYSAgICAgIDogey8qIC4uLiAqL30sXG4gICAgYXV0b1Njcm9sbCAgIDogey8qIC4uLiAqL30sXG4gICAgbWFyZ2luICAgICAgIDogNTAsXG5cbiAgICBzcXVhcmUgICAgICAgOiB0cnVlIHx8IGZhbHNlLFxuICAgIGF4aXMgICAgICAgICA6ICd4JyB8fCAneScsXG4gIH0pXG4gIC5nZXN0dXJhYmxlKHtcbiAgICBtYXggICAgICAgICAgOiAxLFxuICAgIG1heFBlckVsZW1lbnQ6IDIsXG4gICAgbWFudWFsU3RhcnQgIDogdHJ1ZSxcbiAgICBtb2RpZmllcnMgICAgOiBbXSxcbiAgfSlcblxuLy8gYXV0b3Njcm9sbFxuY29uc3QgZWxlbWVudCA9ICdsaSdcbmludGVyYWN0KGVsZW1lbnQpXG4gIC5kcmFnZ2FibGUoe1xuICAgIGF1dG9TY3JvbGw6IHRydWUsXG4gIH0pXG4gIC5yZXNpemFibGUoe1xuICAgIGF1dG9TY3JvbGw6IHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIG1hcmdpbjogNTAsXG4gICAgICBkaXN0YW5jZTogNSxcbiAgICAgIGludGVydmFsOiAxMCxcbiAgICB9LFxuICB9KVxuXG4vLyBheGlzXG5pbnRlcmFjdCh0YXJnZXQpLmRyYWdnYWJsZSh7XG4gIHN0YXJ0QXhpczogJ3gnLFxuICBsb2NrQXhpczogJ3knLFxufSkuZHJhZ2dhYmxlKHtcbiAgc3RhcnRBeGlzOiAneHknLFxuICBsb2NrQXhpczogJ3gnLFxufSlcblxuaW50ZXJhY3QodGFyZ2V0KS5yZXNpemFibGUoe1xuICBheGlzOiAneCcsXG59KVxuXG5jb25zdCBoYW5kbGVFbCA9ICdsaSdcbmludGVyYWN0KHRhcmdldCkucmVzaXphYmxlKHtcbiAgZWRnZXM6IHtcbiAgICB0b3AgICA6IHRydWUsICAgICAgIC8vIFVzZSBwb2ludGVyIGNvb3JkcyB0byBjaGVjayBmb3IgcmVzaXplLlxuICAgIGxlZnQgIDogZmFsc2UsICAgICAgLy8gRGlzYWJsZSByZXNpemluZyBmcm9tIGxlZnQgZWRnZS5cbiAgICBib3R0b206ICcucmVzaXplLXMnLCAvLyBSZXNpemUgaWYgcG9pbnRlciB0YXJnZXQgbWF0Y2hlcyBzZWxlY3RvclxuICAgIHJpZ2h0IDogaGFuZGxlRWwsICAgIC8vIFJlc2l6ZSBpZiBwb2ludGVyIHRhcmdldCBpcyB0aGUgZ2l2ZW4gRWxlbWVudFxuICB9LFxufSlcblxuLy8gcmVzaXplIGludmVydFxuaW50ZXJhY3QodGFyZ2V0KS5yZXNpemFibGUoe1xuICBlZGdlczogeyBib3R0b206IHRydWUsIHJpZ2h0OiB0cnVlIH0sXG4gIGludmVydDogJ3JlcG9zaXRpb24nLFxufSlcblxuLy8gcmVzaXplIHNxdWFyZVxuaW50ZXJhY3QodGFyZ2V0KS5yZXNpemFibGUoe1xuICBzcXVhcmVSZXNpemU6IHRydWUsXG59KVxuXG4vLyBkcm9wem9uZSAgYWNjZXB0XG5pbnRlcmFjdCh0YXJnZXQpLmRyb3B6b25lKHtcbiAgYWNjZXB0OiAnLmRyYWcwLCAuZHJhZzEnLFxufSlcblxuLy8gZHJvcHpvbmUgb3ZlcmxhcFxuaW50ZXJhY3QodGFyZ2V0KS5kcm9wem9uZSh7XG4gIG92ZXJsYXA6IDAuMjUsXG59KVxuXG4vLyBkcm9wem9uZSBjaGVja2VyXG5pbnRlcmFjdCh0YXJnZXQpLmRyb3B6b25lKHtcbiAgY2hlY2tlciAoXG4gICAgX2RyYWdFdmVudDogRWxlbWVudCwgICAgICAgICAgLy8gcmVsYXRlZCBkcmFnbW92ZSBvciBkcmFnZW5kXG4gICAgX2V2ZW50OiBFdmVudCwgICAgICAgICAgICAgICAgLy8gVG91Y2gsIFBvaW50ZXIgb3IgTW91c2UgRXZlbnRcbiAgICBkcm9wcGVkOiBib29sZWFuLCAgICAgICAgICAgICAvLyBib29sIGRlZmF1bHQgY2hlY2tlciByZXN1bHRcbiAgICBfZHJvcHpvbmU6IEludGVyYWN0LkludGVyYWN0YWJsZSwgICAgICAvLyBkcm9wem9uZSBJbnRlcmFjdGFibGVcbiAgICBkcm9wRWxlbWVudDogRWxlbWVudCwgICAgICAgICAvLyBkcm9wem9uZSBlbGVtbnRcbiAgICBfZHJhZ2dhYmxlOiBJbnRlcmFjdC5JbnRlcmFjdGFibGUsICAgICAvLyBkcmFnZ2FibGUgSW50ZXJhY3RhYmxlXG4gICAgX2RyYWdnYWJsZUVsZW1lbnQ6IEVsZW1lbnQpIHsgLy8gZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICAvLyBvbmx5IGFsbG93IGRyb3BzIGludG8gZW1wdHkgZHJvcHpvbmUgZWxlbWVudHNcbiAgICByZXR1cm4gZHJvcHBlZCAmJiAhZHJvcEVsZW1lbnQuaGFzQ2hpbGROb2RlcygpXG4gIH0sXG59KVxuXG5pbnRlcmFjdC5keW5hbWljRHJvcCgpXG5pbnRlcmFjdC5keW5hbWljRHJvcChmYWxzZSlcblxuLy8gRXZlbnRzXG5mdW5jdGlvbiBsaXN0ZW5lciAoZXZlbnQpIHtcbiAgY29uc3QgeyB0eXBlLCBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50XG4gIGFsZXJ0KHsgdHlwZSwgcGFnZVgsIHBhZ2VZIH0pXG59XG5cbmludGVyYWN0KHRhcmdldClcbiAgLm9uKCdkcmFnc3RhcnQnLCBsaXN0ZW5lcilcbiAgLm9uKCdkcmFnbW92ZSBkcmFnZW5kJywgbGlzdGVuZXIpXG4gIC5vbihbJ3Jlc2l6ZW1vdmUnLCAncmVzaXplZW5kJ10sIGxpc3RlbmVyKVxuICAub24oe1xuICAgIGdlc3R1cmVzdGFydDogbGlzdGVuZXIsXG4gICAgZ2VzdHVyZWVuZDogbGlzdGVuZXIsXG4gIH0pXG5cbmludGVyYWN0Lm9uKCdyZXNpemUnLCAoZXZlbnQ6IEludGVyYWN0LlJlc2l6ZUV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgcmVjdCwgZGVsdGFSZWN0IH0gPSBldmVudFxuICBhbGVydChKU09OLnN0cmluZ2lmeSh7IHJlY3QsIGRlbHRhUmVjdCB9KSlcbn0pXG5cbmludGVyYWN0KHRhcmdldCkucmVzaXphYmxlKHtcbiAgbGlzdGVuZXJzOiBbXG4gICAgeyBzdGFydDogbGlzdGVuZXIsIG1vdmU6IGxpc3RlbmVyIH0sXG4gIF0sXG59KVxuXG5pbnRlcmFjdCh0YXJnZXQpLmRyYWdnYWJsZSh7XG4gIGxpc3RlbmVyczogeyBzdGFydDogbGlzdGVuZXIsIGVuZDogbGlzdGVuZXIgfSxcbn0pXG5cbmludGVyYWN0KHRhcmdldCkuZHJhZ2dhYmxlKHtcbiAgb25zdGFydDogbGlzdGVuZXIsXG4gIG9ubW92ZTogbGlzdGVuZXIsXG4gIG9uZW5kOiBsaXN0ZW5lcixcbn0pXG5cbmludGVyYWN0Lm9uKFsnZHJhZ21vdmUnLCAncmVzaXplc3RhcnQnXSwgbGlzdGVuZXIpXG5cbmNvbnN0IGRyb3BUYXJnZXQgPSAnZGl2J1xuLy8gRHJvcCBFdmVudHNcbmludGVyYWN0KGRyb3BUYXJnZXQpXG4gIC5kcm9wem9uZSh7XG4gICAgb25kcm9wIChldmVudCkge1xuICAgICAgYWxlcnQoZXZlbnQucmVsYXRlZFRhcmdldC5pZCArXG4gICAgICAgICAgICAnIHdhcyBkcm9wcGVkIGludG8gJyArXG4gICAgICAgICAgICBldmVudC50YXJnZXQuaWQpXG4gICAgfSxcbiAgfSlcbiAgLm9uKCdkcm9wYWN0aXZhdGUnLCBldmVudCA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtYWN0aXZhdGVkJylcbiAgfSlcblxuaW50ZXJhY3QodGFyZ2V0KS5vbigndXAnLCBfZXZlbnQgPT4ge30pXG5cbi8vIGZhc3QgY2xpY2tcbmludGVyYWN0KCdhW2hyZWZdJykub24oJ3RhcCcsIGV2ZW50ID0+IHtcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC5jdXJyZW50VGFyZ2V0LmhyZWZcblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG59KVxuIl19