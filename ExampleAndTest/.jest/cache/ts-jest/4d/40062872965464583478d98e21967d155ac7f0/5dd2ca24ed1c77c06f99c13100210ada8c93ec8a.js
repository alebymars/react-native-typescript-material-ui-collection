"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const indicator_1 = require("../indicator");
const styles_1 = require("./styles");
class MaterialIndicator extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.renderComponent = this.renderComponent.bind(this);
    }
    renderComponent({ index, count, progress }) {
        count = count;
        let { size, color, animationDuration } = this.props;
        let frames = 60 * animationDuration / 1000;
        let easing = react_native_1.Easing.bezier(0.4, 0.0, 0.7, 1.0);
        let inputRange = Array
            .from(new Array(frames), (undefined = { undefined }, frameIndex) => frameIndex / (frames - 1));
        let outputRange = Array
            .from(new Array(frames), (undefined, frameIndex) => {
            undefined = undefined;
            let progress = 2 * frameIndex / (frames - 1);
            let rotation = index
                ? +(360 - 15)
                : -(180 - 15);
            if (progress > 1.0) {
                progress = 2.0 - progress;
            }
            let direction = index
                ? -1
                : +1;
            return (direction * (180 - 30) * easing(progress) + rotation) + 'deg';
        });
        let layerStyle = {
            width: size,
            height: size,
            transform: [{
                    rotate: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [(0 + 30 + 15) + 'deg', (2 * 360 + 30 + 15) + 'deg']
                    })
                }]
        };
        let viewportStyle = {
            width: size,
            height: size,
            transform: [{
                    translateY: index ? -size / 2 : 0
                }, {
                    rotate: progress.interpolate({ inputRange, outputRange })
                }]
        };
        let containerStyle = {
            width: size,
            height: size / 2,
            overflow: 'hidden'
        };
        let offsetStyle = index
            ? { top: size / 2 }
            : null;
        let lineStyle = {
            width: size,
            height: size,
            borderColor: color,
            borderWidth: size / 10,
            borderRadius: size / 2
        };
        return (React.createElement(react_native_1.Animated.View, Object.assign({ style: styles_1.default.layer }, { key: index }),
            React.createElement(react_native_1.Animated.View, { style: layerStyle },
                React.createElement(react_native_1.Animated.View, { style: [containerStyle, offsetStyle], collapsable: false },
                    React.createElement(react_native_1.Animated.View, { style: viewportStyle },
                        React.createElement(react_native_1.Animated.View, { style: containerStyle, collapsable: false },
                            React.createElement(react_native_1.Animated.View, { style: lineStyle })))))));
    }
    render() {
        let _a = this.props, { style, size: width, size: height } = _a, props = __rest(_a, ["style", "size", "size"]);
        return (React.createElement(react_native_1.View, { style: [styles_1.default.container, style] },
            React.createElement(indicator_1.default, Object.assign({ style: { width, height }, renderComponent: this.renderComponent }, props, { count: 2 }))));
    }
}
MaterialIndicator.defaultProps = {
    animationDuration: 2400,
    color: 'rgb(0, 0, 0)',
    size: 40
};
exports.default = MaterialIndicator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxQcm9ncmVzc1xcTWF0ZXJpYWxJbmRpY2F0b3JcXG1hdGVyaWFsLWluZGljYXRvclxcaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLGlDQUFzQztBQUV0QywrQ0FBcUQ7QUFFckQsNENBQXFEO0FBQ3JELHFDQUE2QjtBQVM3QixNQUFxQixpQkFBa0IsU0FBUSxxQkFBcUM7SUFPaEYsWUFBYSxLQUFLO1FBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRVosSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsZUFBZSxDQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUVuRCxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFBO1FBQzFDLElBQUksTUFBTSxHQUFHLHFCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRTlDLElBQUksVUFBVSxHQUFHLEtBQUs7YUFDakIsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUU5RixJQUFJLFdBQVcsR0FBRyxL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RSxhQUFhO3dCQUMvQixvQkFBQyx1QkFBUSxDQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxLQUFLOzRCQUNwRCxvQkFBQyx1QkFBUSxDQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsU0FBUyxHQUFJLENBQ3ZCLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDbkIsQ0FBQTtJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxlQUEyRCxFQUEzRCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLE9BQXlCLEVBQXZCLDZDQUF1QixDQUFBO1FBRS9ELE9BQU8sQ0FDSCxvQkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxDQUFDLGdCQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUNsQyxvQkFBQyxtQkFBUyxrQkFDTixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxJQUNqQyxLQUFLLElBQ1QsS0FBSyxFQUFFLENBQUMsSUFDVixDQUNDLENBQ1YsQ0FBQTtJQUNMLENBQUM7O0FBNUdNLDhCQUFZLEdBQUc7SUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixLQUFLLEVBQUUsY0FBYztJQUNyQixJQUFJLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFMTixvQ0E4R0MiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxQcm9ncmVzc1xcTWF0ZXJpYWxJbmRpY2F0b3JcXG1hdGVyaWFsLWluZGljYXRvclxcaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgVmlldywgQW5pbWF0ZWQsIEVhc2luZyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSdcblxuaW1wb3J0IEluZGljYXRvcix7SW5kaWNhdG9yUHJvcHN9IGZyb20gJy4uL2luZGljYXRvcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0ZXJpYWxJbmRpY2F0b3JQcm9wcyBleHRlbmRzIEluZGljYXRvclByb3Bze1xuICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHN0eWxlPzpvYmplY3RcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbEluZGljYXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8TWF0ZXJpYWxJbmRpY2F0b3JQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyNDAwLFxuICAgICAgICBjb2xvcjogJ3JnYigwLCAwLCAwKScsXG4gICAgICAgIHNpemU6IDQwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IHRoaXMucmVuZGVyQ29tcG9uZW50LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXJDb21wb25lbnQgKHsgaW5kZXgsIGNvdW50LCBwcm9ncmVzcyB9KSB7XG4gICAgICAgIGNvdW50ID0gY291bnQ7XG4gICAgICAgIGxldCB7IHNpemUsIGNvbG9yLCBhbmltYXRpb25EdXJhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGxldCBmcmFtZXMgPSA2MCAqIGFuaW1hdGlvbkR1cmF0aW9uIC8gMTAwMFxuICAgICAgICBsZXQgZWFzaW5nID0gRWFzaW5nLmJlemllcigwLjQsIDAuMCwgMC43LCAxLjApXG5cbiAgICAgICAgbGV0IGlucHV0UmFuZ2UgPSBBcnJheVxuICAgICAgICAgICAgLmZyb20obmV3IEFycmF5KGZyYW1lcyksICh1bmRlZmluZWQ9e3VuZGVmaW5lZH0sIGZyYW1lSW5kZXgpID0+IGZyYW1lSW5kZXggLyAoZnJhbWVzIC0gMSkpXG5cbiAgICAgICAgbGV0IG91dHB1dFJhbmdlID0gQXJyYXlcbiAgICAgICAgICAgIC5mcm9tKG5ldyBBcnJheShmcmFtZXMpLCAodW5kZWZpbmVkLCBmcmFtZUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkPXVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAyICogZnJhbWVJbmRleCAvIChmcmFtZXMgLSAxKVxuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IGluZGV4XG4gICAgICAgICAgICAgICAgICAgID8gKygzNjAgLSAxNSlcbiAgICAgICAgICAgICAgICAgICAgOiAtKDE4MCAtIDE1KVxuXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMi4wIC0gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICA6ICsxXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKGRpcmVjdGlvbiAqICgxODAgLSAzMCkgKiBlYXNpbmcocHJvZ3Jlc3MpICsgcm90YXRpb24pICsgJ2RlZydcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGxheWVyU3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogW3tcbiAgICAgICAgICAgICAgICByb3RhdGU6IHByb2dyZXNzLmludGVycG9sYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRSYW5nZTogWzAsIDFdLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRSYW5nZTogWygwICsgMzAgKyAxNSkgKyAnZGVnJywgKDIgKiAzNjAgKyAzMCArIDE1KSArICdkZWcnXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZpZXdwb3J0U3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogW3tcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBpbmRleCA/IC1zaXplIC8gMiA6IDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb3RhdGU6IHByb2dyZXNzLmludGVycG9sYXRlKHsgaW5wdXRSYW5nZSwgb3V0cHV0UmFuZ2UgfSlcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSAvIDIsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvZmZzZXRTdHlsZSA9IGluZGV4XG4gICAgICAgICAgICA/IHsgdG9wOiBzaXplIC8gMiB9XG4gICAgICAgICAgICA6IG51bGxcblxuICAgICAgICBsZXQgbGluZVN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogc2l6ZSAvIDEwLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBzaXplIC8gMlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXtzdHlsZXMubGF5ZXJ9IHsuLi57IGtleTogaW5kZXggfX0+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkLlZpZXcgc3R5bGU9e2xheWVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17W2NvbnRhaW5lclN0eWxlLCBvZmZzZXRTdHlsZV19IGNvbGxhcHNhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17dmlld3BvcnRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkLlZpZXcgc3R5bGU9e2NvbnRhaW5lclN0eWxlfSBjb2xsYXBzYWJsZT17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17bGluZVN0eWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZC5WaWV3PlxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCB7IHN0eWxlLCBzaXplOiB3aWR0aCwgc2l6ZTogaGVpZ2h0LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5jb250YWluZXIsIHN0eWxlXX0+XG4gICAgICAgICAgICAgICAgPEluZGljYXRvclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudD17dGhpcy5yZW5kZXJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY291bnQ9ezJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==