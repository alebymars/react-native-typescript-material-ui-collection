"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_material_ripple_1 = require("react-native-material-ripple");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
const __1 = require("../..");
const react_1 = require("react");
class MaterialCheckbox extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.isChecked
        };
    }
    render() {
        return (!this.props.rtl ?
            React.createElement(__1.MaterialHorizontalLinear, null,
                !this.props.progress ?
                    React.createElement(react_native_material_ripple_1.default, { rippleColor: this.props.textColor, onPress: () => {
                            this.setState({ isChecked: !this.state.isChecked }, () => {
                                this.props.onCheckedChange(this.state.isChecked);
                            });
                        }, style: {
                            borderRadius: 4,
                            height: 36,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center'
                        } },
                        React.createElement(MaterialCommunityIcons_1.default, { style: { margin: 8 }, name: this.state.isChecked ? "checkbox-marked" : "checkbox-blank-outline", size: 24, color: this.state.isChecked ? this.props.checkBoxColor : "grey" }))
                    :
                        React.createElement(react_native_1.View, { style: { margin: 8 } },
                            React.createElement(__1.MaterialProgress, { color: this.props.checkBoxColor, small: true })),
                React.createElement(react_native_1.Text, { style: {
                        fontFamily: this.props.textFont,
                        color: this.props.textColor,
                        fontSize: 14
                    } }, this.props.text))
            :
                React.createElement(__1.MaterialHorizontalLinear, null,
                    React.createElement(react_native_1.Text, { style: {
                            fontFamily: this.props.textFont,
                            color: this.props.textColor,
                            fontSize: 14
                        } }, this.props.text),
                    !this.props.progress ?
                        React.createElement(react_native_material_ripple_1.default, { rippleColor: this.props.textColor, onPress: () => {
                                this.setState({ isChecked: !this.state.isChecked }, () => {
                                    this.props.onCheckedChange(this.state.isChecked);
                                });
                            }, style: {
                                borderRadius: 4,
                                height: 36,
                                overflow: 'hidden',
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                            React.createElement(MaterialCommunityIcons_1.default, { style: { margin: 8 }, name: this.state.isChecked ? "checkbox-marked" : "checkbox-blank-outline", size: 24, color: this.state.isChecked ? this.props.checkBoxColor : "grey" }))
                        :
                            React.createElement(react_native_1.View, { style: { margin: 8 } },
                                React.createElement(__1.MaterialProgress, { color: this.props.checkBoxColor, small: true }))));
    }
}
exports.default = MaterialCheckbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxDaGVja2JveFxcaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLCtDQUF3QztBQUN4QywrRUFBa0Q7QUFDbEQsNkZBQXFGO0FBQ3JGLDZCQUFpRTtBQUNqRSxpQ0FBb0M7QUFvQnBDLE1BQXFCLGdCQUFpQixTQUFRLHFCQUEyRDtJQUNyRyxZQUFZLEtBQUs7UUFDYixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzdCLENBQUE7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sQ0FDSCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixvQkFBQyw0QkFBd0I7Z0JBQ3BCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFbkIsb0JBQUMsc0NBQU0sSUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQ2pDLE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDLEVBQUUsR0FBRyxFQUFFO2dDQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUNyRCxDQUFDLENBQUMsQ0FBQTt3QkFDTixDQUFDLEVBQ0QsS0FBSyxFQUFFOzRCQUNILFlBQVksRUFBRSxDQUFDOzRCQUNmLE1BQU0sRUFBRSxFQUFFOzRCQUNWLFFBQVEsRUFBRSxRQUFROzRCQUNsQixVQUFVLEVBQUUsUUFBUTs0QkFDcEIsY0FBYyxFQUFFLFFBQVE7eUJBQzNCO3dCQUNELG9CQUFDLGdDQUFzQixJQUNuQixLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFDdkcsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUNqRSxDQUNHO29CQUNULENBQUM7d0JBQ0Qsb0JBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDOzRCQUNwQixvQkFBQyxvQkFBZ0IsSUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFFLENBQ3hEO2dCQUVYLG9CQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFO3dCQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7d0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7d0JBQzNCLFFBQVEsRUFBRSxFQUFFO3FCQUNmLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVEsQ0FDSjtZQUMzQixDQUFDO2dCQUNELG9CQUFDLDRCQUF3QjtvQkFDckIsb0JBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUU7NEJBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs0QkFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs0QkFDM0IsUUFBUSxFQUFFLEVBQUU7eUJBQ2YsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBUTtvQkFDMUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUVuQixvQkFBQyxzQ0FBTSxJQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQ0FDVixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUMsRUFBRSxHQUFHLEVBQUU7b0NBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0NBQ3JELENBQUMsQ0FBQyxDQUFBOzRCQUNOLENBQUMsRUFDRCxLQUFLLEVBQUU7Z0NBQ0gsWUFBWSxFQUFFLENBQUM7Z0NBQ2YsTUFBTSxFQUFFLEVBQUU7Z0NBQ1YsUUFBUSxFQUFFLFFBQVE7Z0NBQ2xCLFVBQVUsRUFBRSxRQUFRO2dDQUNwQixjQUFjLEVBQUUsUUFBUTs2QkFDM0I7NEJBQ0Qsb0JBQUMsZ0NBQXNCLElBQ25CLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUN2RyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQ2pFLENBQ0c7d0JBQ1QsQ0FBQzs0QkFDRCxvQkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUM7Z0NBQ3BCLG9CQUFDLG9CQUFnQixJQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQUUsQ0FDeEQsQ0FFWSxDQUNsQyxDQUFBO0lBQ0wsQ0FBQztDQUNKO0FBaEZELG1DQWdGQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJEOlxcQ29kaW5nUHJvamVjdHNcXEdpdGh1YlxcdHlwZXNjcmlwdC1tYXRlcmlhbC11aS1jb2xsZWN0aW9uXFxFeGFtcGxlQW5kVGVzdFxcbGliXFxDb21wb25lbnRzXFxNYXRlcmlhbENoZWNrYm94XFxpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RleHQsIFZpZXd9IGZyb20gXCJyZWFjdC1uYXRpdmVcIjtcbmltcG9ydCBSaXBwbGUgZnJvbSAncmVhY3QtbmF0aXZlLW1hdGVyaWFsLXJpcHBsZSc7XG5pbXBvcnQgTWF0ZXJpYWxDb21tdW5pdHlJY29ucyBmcm9tICdyZWFjdC1uYXRpdmUtdmVjdG9yLWljb25zL01hdGVyaWFsQ29tbXVuaXR5SWNvbnMnXG5pbXBvcnQge01hdGVyaWFsUHJvZ3Jlc3MsIE1hdGVyaWFsSG9yaXpvbnRhbExpbmVhcn0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQge1B1cmVDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0ZXJpYWxDaGVja2JveFByb3BzIHtcbiAgICB0ZXh0Pzogc3RyaW5nLFxuICAgIGlzQ2hlY2tlZD86IGJvb2xlYW4sXG4gICAgdGV4dEZvbnQ/OiBzdHJpbmcsXG5cbiAgICBvbkNoZWNrZWRDaGFuZ2U/KGlzQ2hlY2tlZDogYm9vbGVhbik6IHZvaWQsXG5cbiAgICBjaGVja0JveENvbG9yPzogc3RyaW5nLFxuICAgIHRleHRDb2xvcj86IHN0cmluZyxcbiAgICBydGw/OiBib29sZWFuLFxuICAgIHByb2dyZXNzPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hdGVyaWFsQ2hlY2tib3hTdGF0ZSB7XG4gICAgaXNDaGVja2VkPzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDaGVja2JveCBleHRlbmRzIFB1cmVDb21wb25lbnQ8TWF0ZXJpYWxDaGVja2JveFByb3BzLCBNYXRlcmlhbENoZWNrYm94U3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0NoZWNrZWQ6IHByb3BzLmlzQ2hlY2tlZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMucHJvcHMucnRsID9cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxIb3Jpem9udGFsTGluZWFyPlxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMucHJvZ3Jlc3MgP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlwcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlwcGxlQ29sb3I9e3RoaXMucHJvcHMudGV4dENvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNDaGVja2VkOiAhdGhpcy5zdGF0ZS5pc0NoZWNrZWR9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hlY2tlZENoYW5nZSh0aGlzLnN0YXRlLmlzQ2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbENvbW11bml0eUljb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiA4fX0gbmFtZT17dGhpcy5zdGF0ZS5pc0NoZWNrZWQgPyBcImNoZWNrYm94LW1hcmtlZFwiIDogXCJjaGVja2JveC1ibGFuay1vdXRsaW5lXCJ9IHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGhpcy5zdGF0ZS5pc0NoZWNrZWQgPyB0aGlzLnByb3BzLmNoZWNrQm94Q29sb3IgOiBcImdyZXlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SaXBwbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17e21hcmdpbjogOH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbFByb2dyZXNzICBjb2xvcj17dGhpcy5wcm9wcy5jaGVja0JveENvbG9yfSBzbWFsbC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMucHJvcHMudGV4dEZvbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgICAgICAgICAgICAgfX0+e3RoaXMucHJvcHMudGV4dH08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9NYXRlcmlhbEhvcml6b250YWxMaW5lYXI+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbEhvcml6b250YWxMaW5lYXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLnByb3BzLnRleHRGb250LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0XG4gICAgICAgICAgICAgICAgICAgIH19Pnt0aGlzLnByb3BzLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMucHJvZ3Jlc3MgP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlwcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlwcGxlQ29sb3I9e3RoaXMucHJvcHMudGV4dENvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNDaGVja2VkOiAhdGhpcy5zdGF0ZS5pc0NoZWNrZWR9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hlY2tlZENoYW5nZSh0aGlzLnN0YXRlLmlzQ2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbENvbW11bml0eUljb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiA4fX0gbmFtZT17dGhpcy5zdGF0ZS5pc0NoZWNrZWQgPyBcImNoZWNrYm94LW1hcmtlZFwiIDogXCJjaGVja2JveC1ibGFuay1vdXRsaW5lXCJ9IHNpemU9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGhpcy5zdGF0ZS5pc0NoZWNrZWQgPyB0aGlzLnByb3BzLmNoZWNrQm94Q29sb3IgOiBcImdyZXlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SaXBwbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17e21hcmdpbjogOH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbFByb2dyZXNzICBjb2xvcj17dGhpcy5wcm9wcy5jaGVja0JveENvbG9yfSBzbWFsbC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsSG9yaXpvbnRhbExpbmVhcj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==