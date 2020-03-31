// https://www.redditstatic.com/desktop2x/SubredditCreation~SubredditInlineEditing.e839779355960bbac56c.js
// Retrieved at 3/31/2020, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditCreation~SubredditInlineEditing"], {
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, s) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/tags/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/ContentTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				O = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				f = s.n(O);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class y extends i.a.Component {
				componentDidMount() {
					this.props.sendEvent(m.e), this.props.onViewTooltip()
				}
				render() {
					const {
						translatedTitle: e,
						translatedDesc: t,
						translatedButtonText: s
					} = this.props;
					return i.a.createElement("div", {
						className: f.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, i.a.createElement("span", {
						className: f.a.topRow
					}, i.a.createElement("h3", {
						className: f.a.title
					}, e)), i.a.createElement("p", {
						className: f.a.tooltipBody
					}, t), i.a.createElement(h.f, {
						className: f.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, s || x._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var g = Object(r.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(c.i)()), Object(u.K)()
				},
				onViewTooltip: () => {
					Object(u.U)()
				}
			}))(Object(d.c)(y));
			const b = "editable-primary-topic-idcard";
			var v = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				S = s("./src/reddit/models/Tags/index.ts"),
				C = s("./src/reddit/selectors/tags.ts"),
				T = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				w = s.n(T);
			s.d(t, "a", (function() {
				return R
			}));
			const D = e => {
					let {
						hasPrimaryTag: t,
						hasSecondaryTags: s
					} = e;
					if (t) return null;
					let n = o.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						r = o.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return s && (n = o.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), r = o.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), i.a.createElement(l.a, {
						className: w.a.tooltip,
						tooltipId: b,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, i.a.createElement(g, {
						translatedTitle: n,
						translatedDesc: r
					}))
				},
				I = {
					availablePrimaryTags: C.t
				},
				E = Object(a.c)(Object.assign({}, I, {
					selectedPrimaryTag: (e, t) => {
						let {
							subredditId: s
						} = t;
						return s && Object(C.A)(e, {
							subredditId: s
						}) || null
					},
					hasSecondaryTags: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object.keys(Object(C.s)(e, {
							itemId: s
						})).length > 0
					},
					isSaving: C.G
				})),
				j = Object(a.c)(Object.assign({}, I, {
					selectedPrimaryTag: C.y,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(C.G)(e)
				}));
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					const e = this.props.onShowTooltip;
					this.setState({
						tooltipDismissed: Object(u.l)()
					}, () => {
						this.isTooltipEnabled() && e && e()
					})
				}
				isTooltipEnabled() {
					const {
						shouldShowTooltip: e = !1,
						selectedPrimaryTag: t
					} = this.props;
					return !this.state.tooltipDismissed && !t && e
				}
				render() {
					const {
						availablePrimaryTags: e,
						className: t,
						hasSecondaryTags: s,
						isSaving: n,
						onPrimaryTopicSelected: r,
						selectedPrimaryTag: a
					} = this.props, p = a && a.text;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(v.b, {
						id: this.isTooltipEnabled() ? b : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: p || o.fbt._("Add a Primary Topic", null, {
							hk: "1HgVte"
						}),
						options: e.map(e => ({
							displayText: e.text,
							value: e.id,
							isSelected: !!a && a.id === e.id
						})),
						onSelect: r,
						menuItemsClassName: w.a.menuItemsWrapper,
						showSelectedCheckmark: !0,
						isSaving: n
					}), this.isTooltipEnabled() && i.a.createElement(D, {
						hasPrimaryTag: !!a,
						hasSecondaryTags: s
					}))
				}
			}
			const R = Object(r.b)(j, e => ({
					onPrimaryTopicSelected: t => {
						e(Object(p.d)({
							primaryTagId: t.value
						}))
					}
				}))(P),
				_ = Object(r.b)(E, (e, t) => {
					let {
						subredditId: s,
						onPrimarySelect: o
					} = t;
					return {
						onPrimaryTopicSelected: t => {
							t.isSelected || !o ? t.isSelected || e(Object(p.s)(s, {
								tagId: t.value,
								state: S.d.TAGGED
							})) : o(t.value)
						},
						onShowTooltip: () => {
							e(Object(c.f)({
								tooltipId: b
							}))
						}
					}
				});
			t.b = _(P)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				p = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/fastdom/index.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ContentTooltip/index.m.less"),
				O = s.n(m);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const y = {
					height: 200,
					width: 200
				},
				g = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				b = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: o,
						caretPosition: n,
						caretColor: r
					} = e, a = x(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return i.a.createElement("div", f({
						className: Object(c.a)(s, O.a.StyledTooltipContainer, {
							[O.a.caretOnTop]: "top" === n,
							[O.a.caretOnLeft]: "left" === n,
							[O.a.caretOnRight]: "right" === n,
							[O.a.caretOnBottom]: "bottom" === n
						}),
						style: Object.assign({}, o, {
							"--contentTooltip-caretColor": r && r[n] ? r[n] : Object(h.a)(e).body
						})
					}, a), t)
				}),
				v = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				S = Object(p.a)(b, [o.a.Click, o.a.Keydown]),
				C = Object(r.b)(v);
			class T extends i.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = y
						} = this.props;
						d.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const o = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let n = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									n = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									n = o.left > t.width;
									break;
								case "right":
									n = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									n = o.top > t.height
							}
							this.setState({
								position: n ? this.props.defaultTooltipPosition : g(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: o
					} = this.getPositions(e);
					return i.a.createElement(S, f({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = C(T)
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				optionSearchBarContainer: "_3eVrzdp5khbz6W2NhQv7kl",
				optionSearchBarError: "_3va8RfTnDLBo2hfMm5URpu",
				optionSearchBarReadOnly: "_2siJVLOBn72IxBt8i_A1gZ",
				loadingIcon: "_3UsfWdV2CKiIs_EOeGhVxv",
				input: "_1OEtZmrYX2ct3ycV1AaUZS",
				hiddenInput: "_3WSlf55CAQYRdOxtxENgA7",
				optionsOverflowIndication: "_2qfFc8Ix-QpBqu8UNEXeH3"
			}
		},
		"./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				activeOption: "_2Kg5EXAuLcqhsBbdEr4SGZ",
				option: "_1xWVaijFIih7uj-n4FXzH2",
				freeTextOption: "_2H29-4MOHAslt1eKYtcGaV",
				lastFixedOption: "_1ClyNNAK4vP9o_uoSwKe0Q",
				availableOptionContainer: "T2jLhmuhOy8DeOHjz6WRG",
				addText: "_1OqThwyrfhl2eJ9YhWoy2I",
				optionsContainer: "_1ZmC1GBXYnksnMU9IrTAHd",
				relativeContainer: "_3SrGeaD5FxXfpWjhSAFBD-",
				dropdown: "_2dqCXnStO_Dc8Srt_lJqVj",
				dropdownHeaderText: "_2EaXrPilAtjz6VRh_xvOGU"
			}
		},
		"./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less": function(e, t, s) {
			e.exports = {
				selectedOptionComponentContainer: "_3nUaRUcJJfrvOWldA3i10S",
				closeIcon: "_1RvgsgnXdbtv2cwTTTbT7o",
				selectedOptionComponentContainerError: "_2Qpr0YORGp3CmDjJW9Txrf"
			}
		},
		"./src/reddit/components/MultiOptionSelect/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var o = s("./node_modules/lodash/some.js"),
				n = s.n(o),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/constants/keycodes.ts"),
				c = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less")),
				l = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			class u extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.handleOptionSelected(this.props.index)
					}, this.handleMouseEnter = () => {
						this.props.handleOnMouseEnter(this.props.index)
					}
				}
				shouldComponentUpdate(e) {
					return e.className !== this.props.className || e.divRef !== this.props.divRef || e.displayText !== this.props.displayText
				}
				render() {
					const e = this.props,
						{
							addText: t,
							displayText: s,
							divRef: o,
							handleOnMouseEnter: n,
							handleOptionSelected: i,
							index: p,
							className: c
						} = e,
						u = h(e, ["addText", "displayText", "divRef", "handleOnMouseEnter", "handleOptionSelected", "index", "className"]);
					return r.a.createElement("div", d({
						className: Object(a.a)(l.a.availableOptionContainer, c)
					}, u, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: o
					}), t && r.a.createElement("span", {
						className: l.a.addText
					}, t, " "), s)
				}
			}
			class m extends r.a.Component {
				constructor(e) {
					super(e), this.handleOptionSelectedByIndex = e => {
						this.props.selectableOptions[e] && this.handleOptionSelected(this.props.selectableOptions[e])
					}, this.handleFreeTextOptionSelected = () => {
						this.handleOptionSelected({
							id: null,
							displayText: this.props.currentInput,
							selected: !0
						})
					}, this.clearSelectedIndex = () => {
						this.setSelectedIndex(-1)
					}, this.setOptionActiveByIndex = e => {
						"number" == typeof e && e > -1 && this.setSelectedIndex(e)
					}, this.setFreeTextOptionActive = () => {
						this.setSelectedIndex(this.getOptionsLength() - 1)
					}, this.state = {
						selectedIndex: -1
					}, this.scrollContainer = r.a.createRef(), this.optionsContainer = r.a.createRef(), this.activeOptionDOMRef = r.a.createRef()
				}
				focus() {
					this.optionsContainer.current && this.optionsContainer.current.focus()
				}
				matchesDOMElement(e) {
					return this.optionsContainer.current === e
				}
				handleOptionSelected(e) {
					this.handleOptionsSelected([e])
				}
				handleOptionsSelected(e) {
					this.props.onOptionsChanged(e.map(e => Object.assign({}, e, {
						selected: !0
					})))
				}
				setSelectedIndex(e) {
					this.setState({
						selectedIndex: e
					})
				}
				freeTextEntryActive() {
					return this.props.allowFreeTextEntry && this.props.currentInput
				}
				getOptionsLength() {
					return this.freeTextEntryActive() ? this.props.selectableOptions.length + 1 : this.props.selectableOptions.length
				}
				freeTextOptionSelected() {
					return this.freeTextEntryActive() && this.state.selectedIndex === this.getOptionsLength() - 1
				}
				validOptionSelected() {
					return this.state.selectedIndex > -1 && this.state.selectedIndex < this.getOptionsLength()
				}
				handlePaste(e) {
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(p.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === p.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === p.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === p.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === p.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
				}
				componentDidUpdate() {
					if (!this.activeOptionDOMRef.current || !this.scrollContainer.current) return;
					const e = this.activeOptionDOMRef.current.getBoundingClientRect(),
						t = this.scrollContainer.current.getBoundingClientRect();
					if (e.top < t.top || e.bottom > t.bottom) {
						if (0 === this.state.selectedIndex) return void(this.scrollContainer.current.scrollTop = 0);
						if (e.top < t.top) return void(this.scrollContainer.current.scrollTop = this.activeOptionDOMRef.current.offsetTop);
						this.scrollContainer.current.scrollTop += e.bottom - t.bottom
					}
				}
				shouldRenderDropdownHeaderText() {
					return !!this.props.dropdownHeaderText && (!this.freeTextEntryActive() || this.props.selectableOptions.length > 0)
				}
				render() {
					return r.a.createElement("div", {
						className: l.a.relativeContainer
					}, r.a.createElement("div", {
						className: Object(a.a)(l.a.dropdown, this.props.className),
						ref: this.scrollContainer
					}, r.a.createElement("div", {
						ref: this.optionsContainer,
						tabIndex: -1,
						className: l.a.optionsContainer,
						onMouseOut: this.clearSelectedIndex
					}, this.shouldRenderDropdownHeaderText() && r.a.createElement("h3", {
						className: l.a.dropdownHeaderText
					}, this.props.dropdownHeaderText), this.props.selectableOptions.map((e, t) => {
						const s = [this.state.selectedIndex === t ? l.a.activeOption : l.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && s.push(l.a.lastFixedOption), r.a.createElement(u, {
							key: e.id,
							className: Object(a.a)(...s),
							index: t,
							handleOptionSelected: this.handleOptionSelectedByIndex,
							handleOnMouseEnter: this.setOptionActiveByIndex,
							divRef: t === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
							displayText: e.displayText
						})
					}), this.freeTextEntryActive() && r.a.createElement(u, {
						key: "options-list-dropdown-free-text-option",
						className: Object(a.a)(l.a.freeTextOption, this.state.selectedIndex === this.getOptionsLength() - 1 ? l.a.activeOption : l.a.option),
						handleOptionSelected: () => this.handleFreeTextOptionSelected(),
						handleOnMouseEnter: this.setFreeTextOptionActive,
						divRef: this.getOptionsLength() - 1 === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
						addText: this.props.addText,
						displayText: this.props.currentInput
					}))))
				}
			}
			var O = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				x = s.n(f);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			var b = e => {
					const {
						className: t,
						innerRef: s,
						onClickHandler: o,
						option: n,
						maxLength: i
					} = e, p = g(e, ["className", "innerRef", "onClickHandler", "option", "maxLength"]), c = [x.a.selectedOptionComponentContainer, t];
					return i && i < n.displayText.length && c.push(x.a.selectedOptionComponentContainerError), r.a.createElement("div", y({
						className: Object(a.a)(...c),
						ref: s
					}, p, {
						onClick: o
					}), n.displayText, r.a.createElement(O.a, {
						className: x.a.closeIcon
					}))
				},
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				T = s("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				w = s.n(T);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = 10,
				E = e => e.stopPropagation();
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== p.a.Delete && e.which !== p.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
					}, this.handleMouseEnterSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !0
						})
					}, this.handleMouseLeaveSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !1
						})
					}, this.onSearchBarFocus = e => {
						Object(S.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
							isFocused: !0
						}), this.props.onFocus && this.inputRef.current === e.target && this.props.onFocus())
					}, this.onSearchBarBlur = e => {
						if (this.containerRef.current && e.relatedTarget && this.containerRef.current.contains(e.relatedTarget)) return e.preventDefault(), void e.stopPropagation();
						this.props.onBlur && this.props.onBlur(e), this.setState({
							isFocused: !1
						})
					}, this.inputRef = r.a.createRef(), this.containerRef = r.a.createRef(), this.lastSelectedOptionComponentRef = r.a.createRef(), this.state = {
						isHoveringOverSelectedOption: !1,
						isFocused: !1
					}
				}
				focus() {
					Object(S.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
						isFocused: !0
					}))
				}
				reset() {
					this.inputRef.current && (this.inputRef.current.value = "")
				}
				deselectOption(e) {
					this.props.onOptionsChanged([Object.assign({}, e, {
						selected: !1
					})]), this.setState({
						isHoveringOverSelectedOption: !1
					})
				}
				onSelectedOptionComponentKeyDown(e, t) {
					this.state.isHoveringOverSelectedOption || e.which !== p.a.Delete && e.which !== p.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(S.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || b,
						s = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return r.a.createElement("div", D({
						"aria-invalid": this.props.isError,
						className: Object(a.a)(this.props.className, w.a.optionSearchBarContainer, {
							[w.a.optionSearchBarError]: this.props.isError,
							[w.a.optionSearchBarReadOnly]: Object(S.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, o) => {
						if (!(s && o >= (this.props.maxOptionsToDisplay || 0))) return r.a.createElement(t, {
							tabIndex: 0,
							onFocus: E,
							key: e.id || e.displayText,
							option: e,
							onKeyDown: t => this.onSelectedOptionComponentKeyDown(t, e),
							onClickHandler: () => {
								this.deselectOption(e), this.focus()
							},
							onMouseEnter: this.handleMouseEnterSelectedOptionComponent,
							onMouseLeave: this.handleMouseLeaveSelectedOptionComponent,
							maxLength: this.props.maxLength,
							innerRef: o === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), s && r.a.createElement("span", {
						className: w.a.optionsOverflowIndication
					}, r.a.createElement(C.c, null, "+".concat(this.props.options.length - (this.props.maxOptionsToDisplay || 0)))), this.props.children, !Object(S.c)(this.props.readOnlyMode) && r.a.createElement("input", {
						className: Object(a.a)(w.a.input, {
							[w.a.hiddenInput]: Object(S.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && r.a.createElement(v.a, {
						className: w.a.loadingIcon,
						sizePx: I
					}), this.state.isFocused && r.a.createElement(m, {
						className: this.props.dropdownClassName,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						selectableOptions: this.props.selectableOptions,
						onOptionsChanged: this.props.onOptionsChanged,
						ref: this.props.dropdownRef,
						currentInput: this.props.value,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						splitOnCommaPress: this.props.splitOnCommaPress
					}))
				}
			}
			var P = s("./node_modules/reselect/es/index.js");
			const R = [],
				_ = {};
			class B extends r.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(P.a)(e => e.availableOptions || R, e => e.input, (e, t) => e.filter(e => {
						const s = e.displayText.toLowerCase(),
							o = t.toLowerCase();
						return 0 === s.indexOf(o) || n()(s.split(/[\s\/]+/), e => 0 === e.indexOf(o))
					})), this.onSearchBarFocus = () => {
						Object(S.c)(this.props.readOnlyMode) || this.state.searchBarIsFocused || (this.setState({
							searchBarIsFocused: !0
						}), this.props.onSearchBarFocus && this.props.onSearchBarFocus())
					}, this.onSearchBarBlur = e => {
						if (!Object(S.c)(this.props.readOnlyMode)) return this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.matchesDOMElement(e.relatedTarget) ? (e.stopPropagation(), e.preventDefault(), void setTimeout(() => {
							this.optionSearchBarRef.current && this.optionSearchBarRef.current.focus()
						}, 0)) : (this.setState({
							searchBarIsFocused: !1
						}), void(this.props.onSearchBarBlur && this.props.onSearchBarBlur(e)))
					}, this.setInput = e => {
						Object(S.b)(this.props.readOnlyMode) || this.props.input !== e && this.props.onInputChanged(e)
					}, this.onOptionChanged = e => {
						this.onOptionsChanged([e])
					}, this.onOptionsChanged = e => {
						this.props.onOptionsChanged(e), n()(e, e => !!e.selected) && this.setInput("")
					}, this.onInputChanged = e => {
						Object(S.b)(this.props.readOnlyMode) || this.setInput(e.currentTarget.value)
					}, this.onKeyDown = e => {
						Object(S.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handleKeyPress(e)
					}, this.onPaste = e => {
						Object(S.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handlePaste(e)
					}, this.state = {
						searchBarIsFocused: !1
					}, this.optionsListDropdownRef = r.a.createRef(), this.optionSearchBarRef = r.a.createRef()
				}
				getSelectableOptions() {
					return this._selectableOptionsSelector(this.props)
				}
				render() {
					const {
						childClassNames: e = _
					} = this.props;
					return r.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, r.a.createElement(j, {
						className: e.searchBarClassName,
						dropdownClassName: e.optionsListDropdownClassName,
						isError: this.props.isError,
						readOnlyMode: this.props.readOnlyMode || S.a.editable,
						isLoading: this.props.isLoading,
						ref: this.optionSearchBarRef,
						options: this.props.selectedOptions,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur,
						onOptionsChanged: this.onOptionsChanged,
						onInputChanged: this.onInputChanged,
						maxLength: this.props.maxOptionLength,
						maxOptionsToDisplay: this.props.maxOptionsToDisplay,
						value: this.props.input,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						selectableOptions: this.getSelectableOptions(),
						dropdownRef: this.optionsListDropdownRef,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: this.props.splitOnCommaPress
					}, this.props.children))
				}
			}
			t.a = B
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, s) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-dom/index.js"),
				r = s.n(i),
				a = s("./src/reddit/controls/DropdownSelector/index.m.less"),
				p = s.n(a),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = n.a.createRef(), this.menuItems = n.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						const t = r.a.findDOMNode(this);
						t && (t.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, s) => {
						const {
							onSelect: o
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), o(t), s && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const s = this.menuItems.current.getElementsByClassName(p.a.menuOption);
							for (let o = 0; o < s.length; o++) e.relatedTarget === s[o] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(p.a.menuOption);
							for (let s = 0; s < t.length; s++) t[s] === e.target && (38 === e.keyCode && s > 0 && t[s - 1].focus(), 40 === e.keyCode && s < t.length - 1 && t[s + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(p.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: s
					} = this.props;
					return e.map((e, o) => n.a.createElement(l.b, {
						key: o + e.displayText,
						className: Object(c.a)(p.a.menuOption, {
							[p.a.topics]: s
						}),
						noIcon: !0,
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: s
					}, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: s,
						isCompactStyle: o,
						isTopicsStyle: i,
						menuItemsClassName: r,
						name: a,
						isSaving: l
					} = this.props, {
						isOpen: m
					} = this.state;
					return n.a.createElement("div", {
						id: this.props.id,
						className: Object(c.a)(p.a.dropdownMenu, t, {
							[p.a.topics]: i
						})
					}, n.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(c.a)(e, p.a.selector, {
							[p.a.compact]: o
						}, {
							[p.a.topics]: i
						}),
						name: a,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, n.a.createElement("span", {
						className: p.a.selectorContent,
						tabIndex: -1
					}, s), l ? n.a.createElement(d.a, {
						sizePx: 8,
						className: p.a.loadingIcon
					}) : n.a.createElement(h.b, {
						className: p.a.caretDown
					})), n.a.createElement("div", {
						className: Object(c.a)(p.a.menuItems, r, {
							[p.a.topics]: i
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, m && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		},
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "c", (function() {
					return i
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(o || (o = {}));
			const n = e => i(e) || e === o.focusableReadOnly,
				i = e => e === o.readOnly
		}
	}
]);
//# sourceMappingURL=SubredditCreation~SubredditInlineEditing.e839779355960bbac56c.js.map