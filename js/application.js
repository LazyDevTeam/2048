// Wait till the browser is ready to render the game (avoids glitches)
var a = 8;
window.requestAnimationFrame(function () {
  new GameManager(a, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
