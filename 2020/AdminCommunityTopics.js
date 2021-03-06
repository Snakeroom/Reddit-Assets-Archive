// https://www.redditstatic.com/desktop2x/AdminCommunityTopics.20fcd8b6738640815979.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AdminCommunityTopics"], {
		"./src/reddit/components/CommunityTopics/AdminCommunityTopics/ModeratorSelectedOption/index.m.less": function(e, t, s) {
			e.exports = {
				selectedOptionComponentContainer: "_34N_GjBInmBypZtrT34c6L",
				closeIcon: "_3EFvmDWjFnm4s0z8WW4mES",
				irrelevantSelectedOption: "_3fjyR3OTNaMZrJ4KhbQ2qs",
				selectedOptionComponentContainerError: "_2DeIrWsW5bZQaoi7ShRiQ2"
			}
		},
		"./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_33EJz9cMfAfZ2FihfKUM0D",
				content: "_2EMYvkawGbOjsemWVHvB48",
				expandButton: "_1Vr7bKyPOCySgGKAvTCCw",
				header: "_1-8q8nQZVVpSUAd9MzhwsX"
			}
		},
		"./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/tags/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/components/CommunityTopics/index.tsx"),
				c = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/reselect/es/index.js")),
				l = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				u = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/tags.ts"),
				b = s("./src/reddit/components/CommunityTopics/AdminCommunityTopics/ModeratorSelectedOption/index.m.less"),
				x = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const y = Object(c.c)({
				subredditId: O.d,
				optionIsRelevant: (e, t) => {
					let {
						option: s
					} = t;
					const n = Object(O.d)(e);
					if (!n || !s.id) return !0;
					const o = Object(m.s)(e, {
						itemId: n
					})[s.id];
					return !o || o.isRelevant
				}
			});
			var C = Object(r.b)(y, (e, t) => ({
					onModeratorSelectedOptionClicked: (s, n) => {
						s && t.option.id && e(Object(a.r)(s, [{
							subredditId: s,
							tagId: t.option.id,
							isRelevant: !n
						}], [], h.a.communitySettings))
					}
				}))(e => {
					const {
						className: t,
						innerRef: s,
						onClickHandler: n,
						option: o,
						maxLength: r,
						subredditId: a,
						onModeratorSelectedOptionClicked: d,
						optionIsRelevant: p
					} = e, c = g(e, ["className", "innerRef", "onClickHandler", "option", "maxLength", "subredditId", "onModeratorSelectedOptionClicked", "optionIsRelevant"]), h = [x.a.selectedOptionComponentContainer, t];
					return r && r < o.displayText.length && h.push(x.a.selectedOptionComponentContainerError), p || h.push(x.a.irrelevantSelectedOption), i.a.createElement("div", f({
						className: Object(l.a)(...h),
						ref: s,
						onClick: () => e.onModeratorSelectedOptionClicked(a, p)
					}, c), o.displayText, p && i.a.createElement(u.a, {
						className: x.a.closeIcon
					}))
				}),
				v = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				T = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				j = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				I = s("./src/reddit/models/Tags/index.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/reducers/tags/selected/index.ts"),
				R = s("./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.m.less"),
				D = s.n(R);
			const _ = Object(c.c)({
					availableSubredditTags: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(m.d)(e, {
							subredditId: s
						})
					},
					subredditTags: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(m.C)(e, {
							itemId: s
						})
					},
					availableGlobalOptions: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(m.a)(e, {
							thingId: s,
							suggested: !0
						})
					},
					selectedOptions: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(m.w)(e, {
							subredditId: s
						})
					},
					isLoading: e => Object(m.E)(e),
					currentInput: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(m.m)(e, {
							subredditId: s
						})
					}
				}),
				B = Object(r.b)(_, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						optionSelected: t => {
							e(Object(a.q)({
								subredditId: s,
								option: t
							})), e(Object(a.h)(s, Object.assign(Object.assign({}, t), {
								action: w.a.ADD
							}), h.a.communitySettings))
						},
						optionDeselected: t => {
							e(Object(a.p)({
								subredditId: s,
								option: t
							})), e(Object(a.e)(s, Object.assign(Object.assign({}, t), {
								action: w.a.REMOVE
							}), h.a.communitySettings))
						},
						onInputChanged: t => e(Object(a.o)({
							subredditId: s,
							input: t
						})),
						onSearchBarFocused: () => e(() => {}),
						onMaxTopicsHit: () => e((e, t) => {
							e(Object(d.e)(Object.assign(Object.assign({}, Object(d.d)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", I.a.toString())], {
								hk: "1OySAh"
							}), E.b.Error)), {
								duration: d.a
							})))
						})
					}
				})(p.a);
			class M extends i.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => e.stopPropagation(), this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !1
					}
				}
				componentDidMount() {
					this.props.subredditDataRequested()
				}
				render() {
					return i.a.createElement("div", {
						className: D.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(v.o, {
						className: D.a.expandButton,
						onClick: this.onExpandButtonClick
					}, n.fbt._("Admin Community Topics", null, {
						hk: "37srVU"
					}), this.state.isOpen ? i.a.createElement(j.a, null) : i.a.createElement(T.a, null)), this.state.isOpen && i.a.createElement("div", {
						className: D.a.content
					}, i.a.createElement("div", {
						className: D.a.header
					}, n.fbt._("Moderator Added Topics", null, {
						hk: "3GQoal"
					})), i.a.createElement(p.b, {
						context: h.a.communitySettings,
						subredditId: this.props.subredditId,
						readOnlyMode: S.a.readOnly,
						selectedOptionComponent: C
					}), i.a.createElement("br", null), i.a.createElement("div", {
						className: D.a.header
					}, n.fbt._("Admin Suggested Topics", null, {
						hk: "12wo5g"
					})), i.a.createElement(B, {
						context: h.a.communitySettings,
						subredditId: this.props.subredditId
					})))
				}
			}
			t.default = Object(r.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					subredditDataRequested: () => e(Object(a.k)(s, h.a.communitySettings))
				}
			})(M)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tags/index.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				l = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				h = s("./src/reddit/models/Tags/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/tags.ts"),
				m = s("./src/reddit/components/CommunityTopics/index.m.less"),
				b = s.n(m);
			const x = Object(a.c)({
				availableSubredditTags: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(O.d)(e, {
						subredditId: s
					})
				},
				subredditTags: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(O.s)(e, {
						itemId: s
					})
				},
				availableGlobalOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(O.a)(e, {
						thingId: s
					})
				},
				selectedOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(O.v)(e, {
						subredditId: s
					})
				},
				isLoading: e => Object(O.E)(e),
				currentInput: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(O.l)(e, {
						subredditId: s
					})
				}
			});
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							s = e.filter(e => !e.selected);
						this.onOptionsSelected(t), s.forEach(e => this.onOptionDeselected(e))
					}, this.onFocus = () => {
						this.props.onSearchBarFocused(), this.props.onFocus && this.props.onFocus()
					}
				}
				onOptionsSelected(e) {
					const t = h.a - this.props.selectedOptions.length,
						s = e.filter(e => !!e.displayText.trim()),
						n = s.slice(0, t);
					n.forEach(e => {
						if (!e.id) {
							const t = Object(O.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(h.f)(t, !0))
						}
						this.props.optionSelected(Object.assign(Object.assign({}, e), {
							displayText: e.displayText.trim()
						}))
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return i.a.createElement("div", {
						className: b.a.communityTopicsContainer
					}, i.a.createElement(c.a, {
						readOnlyMode: this.props.readOnlyMode,
						addText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						childClassNames: this.props.childClassNames,
						dropdownHeaderText: n.fbt._("Suggested topics", null, {
							hk: "1RASWg"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > h.a,
						isLoading: this.props.isLoading,
						maxOptionLength: h.b,
						maxOptionsToDisplay: this.props.maxTopicsToDisplay,
						onSearchBarFocus: this.onFocus,
						onSearchBarBlur: this.props.onBlur,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: !0
					}, this.props.children))
				}
			}
			t.b = Object(r.b)(x, (e, t) => {
				let {
					subredditId: s,
					context: o
				} = t;
				return {
					optionSelected: t => {
						e(Object(d.n)({
							subredditId: s,
							option: t
						})), e((e, n) => {
							l.e(n(), s, t, {
								context: o
							})
						})
					},
					optionDeselected: t => {
						e(Object(d.m)({
							subredditId: s,
							option: t
						})), e((e, n) => {
							l.d(n(), s, t, {
								context: o
							})
						})
					},
					onInputChanged: t => e(Object(d.l)({
						subredditId: s,
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {
						l.b(t(), s, {
							context: o
						})
					}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(p.e)(Object.assign(Object.assign({}, Object(p.d)(n.fbt._({
							"*": "You can only add up to max {number} community topics",
							_1: "You can only add up to max 1 community topic"
						}, [n.fbt._plural(h.a, "number")], {
							hk: "s07I1"
						}), u.b.Error)), {
							duration: p.a
						})))
					})
				}
			})(f)
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
				freeTextOption: "_2H29-4MOHAslt1eKYtcGaV",
				lastFixedOption: "_1ClyNNAK4vP9o_uoSwKe0Q",
				option: "_1xWVaijFIih7uj-n4FXzH2",
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
			var n = s("./node_modules/lodash/some.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/keycodes.ts"),
				p = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less")),
				c = s.n(p);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
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
							divRef: n,
							handleOnMouseEnter: o,
							handleOptionSelected: i,
							index: d,
							className: p
						} = e,
						u = h(e, ["addText", "displayText", "divRef", "handleOnMouseEnter", "handleOptionSelected", "index", "className"]);
					return r.a.createElement("div", l({
						className: Object(a.a)(c.a.availableOptionContainer, p)
					}, u, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: n
					}), t && r.a.createElement("span", {
						className: c.a.addText
					}, t, " "), s)
				}
			}
			class O extends r.a.Component {
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
					this.props.onOptionsChanged(e.map(e => Object.assign(Object.assign({}, e), {
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
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(d.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === d.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === d.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === d.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === d.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
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
						className: c.a.relativeContainer
					}, r.a.createElement("div", {
						className: Object(a.a)(c.a.dropdown, this.props.className),
						ref: this.scrollContainer
					}, r.a.createElement("div", {
						ref: this.optionsContainer,
						tabIndex: -1,
						className: c.a.optionsContainer,
						onMouseOut: this.clearSelectedIndex
					}, this.shouldRenderDropdownHeaderText() && r.a.createElement("h3", {
						className: c.a.dropdownHeaderText
					}, this.props.dropdownHeaderText), this.props.selectableOptions.map((e, t) => {
						const s = [this.state.selectedIndex === t ? c.a.activeOption : c.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && s.push(c.a.lastFixedOption), r.a.createElement(u, {
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
						className: Object(a.a)(c.a.freeTextOption, this.state.selectedIndex === this.getOptionsLength() - 1 ? c.a.activeOption : c.a.option),
						handleOptionSelected: () => this.handleFreeTextOptionSelected(),
						handleOnMouseEnter: this.setFreeTextOptionActive,
						divRef: this.getOptionsLength() - 1 === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
						addText: this.props.addText,
						displayText: this.props.currentInput
					}))))
				}
			}
			var m = s("./src/reddit/icons/svgs/Close/index.tsx"),
				b = s("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				x = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			var y = e => {
					const {
						className: t,
						innerRef: s,
						onClickHandler: n,
						option: o,
						maxLength: i
					} = e, d = g(e, ["className", "innerRef", "onClickHandler", "option", "maxLength"]), p = [x.a.selectedOptionComponentContainer, t];
					return i && i < o.displayText.length && p.push(x.a.selectedOptionComponentContainerError), r.a.createElement("div", f({
						className: Object(a.a)(...p),
						ref: s
					}, d, {
						onClick: n
					}), o.displayText, r.a.createElement(m.a, {
						className: x.a.closeIcon
					}))
				},
				C = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				S = s("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				T = s.n(S);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = 10,
				E = e => e.stopPropagation();
			class w extends r.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== d.a.Delete && e.which !== d.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
					}, this.handleMouseEnterSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !0
						})
					}, this.handleMouseLeaveSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !1
						})
					}, this.onSearchBarFocus = e => {
						Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
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
					Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
						isFocused: !0
					}))
				}
				reset() {
					this.inputRef.current && (this.inputRef.current.value = "")
				}
				deselectOption(e) {
					this.props.onOptionsChanged([Object.assign(Object.assign({}, e), {
						selected: !1
					})]), this.setState({
						isHoveringOverSelectedOption: !1
					})
				}
				onSelectedOptionComponentKeyDown(e, t) {
					this.state.isHoveringOverSelectedOption || e.which !== d.a.Delete && e.which !== d.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(v.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || y,
						s = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return r.a.createElement("div", j({
						"aria-invalid": this.props.isError,
						className: Object(a.a)(this.props.className, T.a.optionSearchBarContainer, {
							[T.a.optionSearchBarError]: this.props.isError,
							[T.a.optionSearchBarReadOnly]: Object(v.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, n) => {
						if (!(s && n >= (this.props.maxOptionsToDisplay || 0))) return r.a.createElement(t, {
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
							innerRef: n === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), s && r.a.createElement("span", {
						className: T.a.optionsOverflowIndication
					}, "+".concat(this.props.options.length - (this.props.maxOptionsToDisplay || 0))), this.props.children, !Object(v.c)(this.props.readOnlyMode) && r.a.createElement("input", {
						className: Object(a.a)(T.a.input, {
							[T.a.hiddenInput]: Object(v.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && r.a.createElement(C.a, {
						className: T.a.loadingIcon,
						sizePx: I
					}), this.state.isFocused && r.a.createElement(O, {
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
			var R = s("./node_modules/reselect/es/index.js");
			const D = [],
				_ = {};
			class B extends r.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(R.a)(e => e.availableOptions || D, e => e.input, (e, t) => e.filter(e => {
						const s = e.displayText.toLowerCase(),
							n = t.toLowerCase();
						return 0 === s.indexOf(n) || o()(s.split(/[\s\/]+/), e => 0 === e.indexOf(n))
					})), this.onSearchBarFocus = () => {
						Object(v.c)(this.props.readOnlyMode) || this.state.searchBarIsFocused || (this.setState({
							searchBarIsFocused: !0
						}), this.props.onSearchBarFocus && this.props.onSearchBarFocus())
					}, this.onSearchBarBlur = e => {
						if (!Object(v.c)(this.props.readOnlyMode)) return e.relatedTarget && this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.matchesDOMElement(e.relatedTarget) ? (e.stopPropagation(), e.preventDefault(), void setTimeout(() => {
							this.optionSearchBarRef.current && this.optionSearchBarRef.current.focus()
						}, 0)) : (this.setState({
							searchBarIsFocused: !1
						}), void(this.props.onSearchBarBlur && this.props.onSearchBarBlur(e)))
					}, this.setInput = e => {
						Object(v.b)(this.props.readOnlyMode) || this.props.input !== e && this.props.onInputChanged(e)
					}, this.onOptionChanged = e => {
						this.onOptionsChanged([e])
					}, this.onOptionsChanged = e => {
						this.props.onOptionsChanged(e), o()(e, e => !!e.selected) && this.setInput("")
					}, this.onInputChanged = e => {
						Object(v.b)(this.props.readOnlyMode) || this.setInput(e.currentTarget.value)
					}, this.onKeyDown = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handleKeyPress(e)
					}, this.onPaste = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handlePaste(e)
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
					}, r.a.createElement(w, {
						className: e.searchBarClassName,
						dropdownClassName: e.optionsListDropdownClassName,
						isError: this.props.isError,
						readOnlyMode: this.props.readOnlyMode || v.a.editable,
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
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return o
				})), s.d(t, "c", (function() {
					return i
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(n || (n = {}));
			const o = e => i(e) || e === n.focusableReadOnly,
				i = e => e === n.readOnly
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AdminCommunityTopics.20fcd8b6738640815979.js.map