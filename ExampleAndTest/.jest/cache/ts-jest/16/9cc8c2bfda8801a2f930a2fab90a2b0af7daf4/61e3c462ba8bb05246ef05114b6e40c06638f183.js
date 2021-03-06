"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.ButtonTransform = new react_native_1.Animated.Value(0);
        this.disable = () => {
            this.setState({ isActive: false }, () => {
                if (this.props.onValueChanged) {
                    this.props.onValueChanged(false);
                }
            });
            react_native_1.Animated.timing(this.ButtonTransform, {
                useNativeDriver: true,
                toValue: 0,
                duration: 100,
            }).start();
        };
        this.enable = () => {
            this.setState({ isActive: true }, () => {
                if (this.props.onValueChanged) {
                    this.props.onValueChanged(true);
                }
            });
            react_native_1.Animated.timing(this.ButtonTransform, {
                useNativeDriver: true,
                toValue: 16,
                duration: 100,
            }).start();
        };
        this.state = { isActive: false };
    }
    render() {
        return (React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: () => { this.state.isActive ? this.disable() : this.enable(); } },
            React.createElement(react_native_1.Animated.View, { style: { width: 36, height: 20, justifyContent: 'center' } },
                React.createElement(react_native_1.View, { style: {
                        position: 'absolute',
                        width: '100%',
                        height: 16,
                        opacity: 0.5,
                        backgroundColor: this.state.isActive ? this.props.color : '#212121',
                        borderRadius: 10
                    } }),
                React.createElement(react_native_1.Animated.View, { style: {
                        transform: [
                            { translateX: this.ButtonTransform },
                        ],
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: this.state.isActive ? this.props.color : 'white',
                        elevation: 2,
                        shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowRadius: 2,
                        shadowOpacity: 0.24
                    } }))));
    }
}
exports.default = Switch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxTd2l0Y2hcXFN3aXRjaC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsK0NBQXFFO0FBV3JFLE1BQXFCLE1BQU8sU0FBUSxLQUFLLENBQUMsU0FBb0M7SUFDNUUsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR2Ysb0JBQWUsR0FBRyxJQUFJLHVCQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBbUN4QyxZQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsdUJBQVEsQ0FBQyxNQUFNLENBQ2IsSUFBSSxDQUFDLGVBQWUsRUFDcEI7Z0JBQ0UsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FDRixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO1FBQ0YsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO29CQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILHVCQUFRLENBQUMsTUFBTSxDQUNiLElBQUksQ0FBQyxlQUFlLEVBQ3BCO2dCQUNFLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxRQUFRLEVBQUUsR0FBRzthQUNkLENBQ0YsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQTtRQWxFQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxDQUNMLG9CQUFDLHVDQUF3QixJQUFDLE9BQU8sRUFBRSxHQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUEsQ0FBQSxDQUFDO1lBQ3ZGLG9CQUFDLHVCQUFRLENBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFDO2dCQUNyRSxvQkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRTt3QkFDWCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsS0FBSyxFQUFFLE1BQU07d0JBQ2IsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsT0FBTyxFQUFFLEdBQUc7d0JBQ1osZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUzt3QkFDbkUsWUFBWSxFQUFFLEVBQUU7cUJBQ2pCLEdBQUc7Z0JBQ0osb0JBQUMsdUJBQVEsQ0FBQyxJQUFJLElBQUMsS0FBSyxFQUFFO3dCQUNwQixTQUFTLEVBQUU7NEJBQ1QsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBQzt5QkFDbkM7d0JBQ0QsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU87d0JBQ2pFLFNBQVMsRUFBRSxDQUFDO3dCQUNaLFdBQVcsRUFBQyxPQUFPO3dCQUNuQixZQUFZLEVBQUU7NEJBQ1osS0FBSyxFQUFFLENBQUM7NEJBQ1IsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0QsWUFBWSxFQUFFLENBQUM7d0JBQ2YsYUFBYSxFQUFFLElBQUk7cUJBQ3BCLEdBQUcsQ0FDVSxDQUNTLENBQzVCLENBQUE7SUFDSCxDQUFDO0NBaUNGO0FBdkVELHlCQXVFQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJEOlxcQ29kaW5nUHJvamVjdHNcXEdpdGh1YlxcdHlwZXNjcmlwdC1tYXRlcmlhbC11aS1jb2xsZWN0aW9uXFxFeGFtcGxlQW5kVGVzdFxcbGliXFxDb21wb25lbnRzXFxNYXRlcmlhbFN3aXRjaFxcU3dpdGNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7VmlldywgVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrLCBBbmltYXRlZH0gZnJvbSAncmVhY3QtbmF0aXZlJ1xuXG5pbnRlcmZhY2UgU3dpdGNoUHJvcHMge1xuICBjb2xvcjogc3RyaW5nLFxuICBvblZhbHVlQ2hhbmdlZD8odmFsdWU6Ym9vbGVhbik6dm9pZFxufVxuXG5pbnRlcmZhY2UgU3dpdGNoU3RhdGUge1xuICBpc0FjdGl2ZTogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgPFN3aXRjaFByb3BzLCBTd2l0Y2hTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge2lzQWN0aXZlOiBmYWxzZX1cbiAgfVxuICBCdXR0b25UcmFuc2Zvcm0gPSBuZXcgQW5pbWF0ZWQuVmFsdWUoMCk7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFjayBvblByZXNzPXsoKT0+e3RoaXMuc3RhdGUuaXNBY3RpdmU/dGhpcy5kaXNhYmxlKCk6dGhpcy5lbmFibGUoKX19PlxuICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17e3dpZHRoOiAzNiwgaGVpZ2h0OiAyMCwganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogMTYsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaXNBY3RpdmUgPyB0aGlzLnByb3BzLmNvbG9yIDogJyMyMTIxMjEnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMFxuICAgICAgICAgIH19Lz5cbiAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBbXG4gICAgICAgICAgICAgIHt0cmFuc2xhdGVYOiB0aGlzLkJ1dHRvblRyYW5zZm9ybX0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaXNBY3RpdmUgPyB0aGlzLnByb3BzLmNvbG9yIDogJ3doaXRlJyxcbiAgICAgICAgICAgIGVsZXZhdGlvbjogMixcbiAgICAgICAgICAgIHNoYWRvd0NvbG9yOidibGFjaycsXG4gICAgICAgICAgICBzaGFkb3dPZmZzZXQ6IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgIGhlaWdodDogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd1JhZGl1czogMixcbiAgICAgICAgICAgIHNoYWRvd09wYWNpdHk6IDAuMjRcbiAgICAgICAgICB9fS8+XG4gICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgIDwvVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrPlxuICAgIClcbiAgfVxuXG4gIGRpc2FibGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNBY3RpdmU6IGZhbHNlfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgQW5pbWF0ZWQudGltaW5nKFxuICAgICAgdGhpcy5CdXR0b25UcmFuc2Zvcm0sXG4gICAgICB7XG4gICAgICAgIHVzZU5hdGl2ZURyaXZlcjogdHJ1ZSxcbiAgICAgICAgdG9WYWx1ZTogMCxcbiAgICAgICAgZHVyYXRpb246IDEwMCxcbiAgICAgIH1cbiAgICApLnN0YXJ0KCk7XG4gIH07XG4gIGVuYWJsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0FjdGl2ZTogdHJ1ZX0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgQW5pbWF0ZWQudGltaW5nKFxuICAgICAgdGhpcy5CdXR0b25UcmFuc2Zvcm0sXG4gICAgICB7XG4gICAgICAgIHVzZU5hdGl2ZURyaXZlcjogdHJ1ZSxcbiAgICAgICAgdG9WYWx1ZTogMTYsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICB9XG4gICAgKS5zdGFydCgpO1xuICB9XG5cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==