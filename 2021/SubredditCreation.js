// https://www.redditstatic.com/desktop2x/SubredditCreation.aaa6d05f48a582c086ea.js
// Retrieved at 4/26/2021, 4:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditCreation"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, a, o) {
				for (var i = -1, r = s(n((t - e) / (a || 1)), 0), l = Array(r); r--;) l[o ? r : ++i] = e, e += a;
				return l
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, i) {
					return i && "number" != typeof i && a(t, n, i) && (n = i = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), i = void 0 === i ? t < n ? 1 : -1 : o(i), s(t, n, i, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return s(e) + t
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				a = function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, a) {
							return "number" == typeof s || "string" == typeof s ? a ? "idx-" + a : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				},
				o = (a(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: a()
					}
				}),
				i = o(),
				r = s.createContext(o()),
				l = function() {
					return s.useState((e = s.useContext(r), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || i) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				c = function() {
					return l()[0].uid
				},
				d = function() {
					return l()[0].gen
				}
		},
		"./src/reddit/actions/pages/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "subredditCreationPageRequested", (function() {
				return c
			}));
			var s = n("./src/lib/pageTitle.ts"),
				a = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/tags/index.ts"),
				i = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const c = () => async (e, t) => {
				e(a.l({
					title: Object(s.j)()
				})), await e(Object(i.r)());
				const n = t();
				Object(l.J)(n) ? await e(Object(o.f)()) : Object(r.a)(e, n)
			}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				r = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				l = n.n(r);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(i.b, {
				className: Object(o.a)(e.className, l.a.container, e.text.length >= e.maxChars ? l.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, n) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tags/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/ContentTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/localStorage/index.ts"),
				h = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				x = n("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				b = n.n(x);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class C extends o.a.Component {
				componentDidMount() {
					this.props.sendEvent(h.e), this.props.onViewTooltip()
				}
				render() {
					const {
						translatedTitle: e,
						translatedDesc: t,
						translatedButtonText: n
					} = this.props;
					return o.a.createElement("div", {
						className: b.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, o.a.createElement("span", {
						className: b.a.topRow
					}, o.a.createElement("h3", {
						className: b.a.title
					}, e)), o.a.createElement("p", {
						className: b.a.tooltipBody
					}, t), o.a.createElement(u.i, {
						className: b.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, n || f._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var v = Object(i.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(c.i)()), Object(m.kb)()
				},
				onViewTooltip: () => {
					Object(m.Cb)()
				}
			}))(Object(p.c)(C));
			const g = "editable-primary-topic-idcard";
			var O = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				E = n("./src/reddit/models/Tags/index.ts"),
				y = n("./src/reddit/selectors/tags.ts"),
				w = n("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				_ = n.n(w);
			const T = ({
					hasPrimaryTag: e,
					hasSecondaryTags: t
				}) => {
					if (e) return null;
					let n = s.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						a = s.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return t && (n = s.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), a = s.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), o.a.createElement(d.a, {
						className: _.a.tooltip,
						tooltipId: g,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, o.a.createElement(v, {
						translatedTitle: n,
						translatedDesc: a
					}))
				},
				S = {
					availablePrimaryTags: y.t
				},
				k = Object(r.c)({
					...S,
					selectedPrimaryTag: (e, {
						subredditId: t
					}) => t && Object(y.A)(e, {
						subredditId: t
					}) || null,
					hasSecondaryTags: (e, {
						subredditId: t
					}) => Object.keys(Object(y.s)(e, {
						itemId: t
					})).length > 0,
					isSaving: y.G
				}),
				I = Object(r.c)({
					...S,
					selectedPrimaryTag: y.y,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(y.G)(e)
				});
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					const e = this.props.onShowTooltip;
					this.setState({
						tooltipDismissed: Object(m.q)()
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
						hasSecondaryTags: n,
						isSaving: a,
						onPrimaryTopicSelected: i,
						selectedPrimaryTag: r
					} = this.props, l = r && r.text;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(O.b, {
						id: this.isTooltipEnabled() ? g : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: l || s.fbt._("Add a Primary Topic", null, {
							hk: "1HgVte"
						}),
						options: e.map(e => ({
							displayText: e.text,
							value: e.id,
							isSelected: !!r && r.id === e.id
						})),
						onSelect: i,
						menuItemsClassName: _.a.menuItemsWrapper,
						showSelectedCheckmark: !0,
						isSaving: a
					}), this.isTooltipEnabled() && o.a.createElement(T, {
						hasPrimaryTag: !!r,
						hasSecondaryTags: n
					}))
				}
			}
			const j = Object(i.b)(I, e => ({
					onPrimaryTopicSelected: t => {
						e(Object(l.d)({
							primaryTagId: t.value
						}))
					}
				}))(N),
				D = Object(i.b)(k, (e, {
					subredditId: t,
					onPrimarySelect: n
				}) => ({
					onPrimaryTopicSelected: s => {
						s.isSelected || !n ? s.isSelected || e(Object(l.s)(t, {
							tagId: s.value,
							state: E.d.TAGGED
						})) : n(s.value)
					},
					onShowTooltip: () => {
						e(Object(c.f)({
							tooltipId: g
						}))
					}
				}));
			t.b = D(N)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, n) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/ContentTooltip/index.m.less"),
				x = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = {
					height: 200,
					width: 200
				},
				C = e => {
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
				v = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: s,
						caretPosition: a,
						caretColor: i,
						onClick: r,
						...l
					} = e;
					return o.a.createElement("div", b({
						onClick: r,
						className: Object(c.a)(n, x.a.StyledTooltipContainer, {
							[x.a.caretOnTop]: "top" === a,
							[x.a.caretOnLeft]: "left" === a,
							[x.a.caretOnRight]: "right" === a,
							[x.a.caretOnBottom]: "bottom" === a
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": i && i[a] ? i[a] : Object(u.a)(e).body
						}
					}, l), t)
				}),
				g = Object(r.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				O = Object(l.a)(v, [s.a.Click, s.a.Keydown]),
				E = Object(i.b)(g);
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						p.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const s = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let a = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									a = window.innerHeight - s.bottom > t.height;
									break;
								case "left":
									a = s.left > t.width;
									break;
								case "right":
									a = s.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									a = s.top > t.height
							}
							this.setState({
								position: a ? this.props.defaultTooltipPosition : C(this.props.defaultTooltipPosition)
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
						tooltipPosition: n,
						caretPosition: s
					} = this.getPositions(e);
					return o.a.createElement(O, b({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = E(y)
		},
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailInvitePaintedDoor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailInvitePaintedDoor").then(n.bind(null, "./src/reddit/components/EmailInvitePaintedDoor/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailInvitePaintedDoor/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less": function(e, t, n) {
			e.exports = {
				selectedOptionComponentContainer: "_3nUaRUcJJfrvOWldA3i10S",
				closeIcon: "_1RvgsgnXdbtv2cwTTTbT7o",
				selectedOptionComponentContainerError: "_2Qpr0YORGp3CmDjJW9Txrf"
			}
		},
		"./src/reddit/components/MultiOptionSelect/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/some.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less"),
				d = n.n(c);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends i.a.Component {
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
					const {
						addText: e,
						displayText: t,
						divRef: n,
						handleOnMouseEnter: s,
						handleOptionSelected: a,
						index: o,
						className: l,
						...c
					} = this.props;
					return i.a.createElement("div", p({
						className: Object(r.a)(d.a.availableOptionContainer, l)
					}, c, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: n
					}), e && i.a.createElement("span", {
						className: d.a.addText
					}, e, " "), t)
				}
			}
			class m extends i.a.Component {
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
					}, this.scrollContainer = i.a.createRef(), this.optionsContainer = i.a.createRef(), this.activeOptionDOMRef = i.a.createRef()
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
					this.props.onOptionsChanged(e.map(e => ({
						...e,
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
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(l.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === l.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === l.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === l.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === l.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
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
					return i.a.createElement("div", {
						className: d.a.relativeContainer
					}, i.a.createElement("div", {
						className: Object(r.a)(d.a.dropdown, this.props.className),
						ref: this.scrollContainer
					}, i.a.createElement("div", {
						ref: this.optionsContainer,
						tabIndex: -1,
						className: d.a.optionsContainer,
						onMouseOut: this.clearSelectedIndex
					}, this.shouldRenderDropdownHeaderText() && i.a.createElement("h3", {
						className: d.a.dropdownHeaderText
					}, this.props.dropdownHeaderText), this.props.selectableOptions.map((e, t) => {
						const n = [this.state.selectedIndex === t ? d.a.activeOption : d.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && n.push(d.a.lastFixedOption), i.a.createElement(u, {
							key: e.id,
							className: Object(r.a)(...n),
							index: t,
							handleOptionSelected: this.handleOptionSelectedByIndex,
							handleOnMouseEnter: this.setOptionActiveByIndex,
							divRef: t === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
							displayText: e.displayText
						})
					}), this.freeTextEntryActive() && i.a.createElement(u, {
						key: "options-list-dropdown-free-text-option",
						className: Object(r.a)(d.a.freeTextOption, this.state.selectedIndex === this.getOptionsLength() - 1 ? d.a.activeOption : d.a.option),
						handleOptionSelected: () => this.handleFreeTextOptionSelected(),
						handleOnMouseEnter: this.setFreeTextOptionActive,
						divRef: this.getOptionsLength() - 1 === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
						addText: this.props.addText,
						displayText: this.props.currentInput
					}))))
				}
			}
			var h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				b = n.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var C = e => {
					const {
						className: t,
						innerRef: n,
						onClickHandler: s,
						option: a,
						maxLength: o,
						...l
					} = e, c = [b.a.selectedOptionComponentContainer, t];
					return o && o < a.displayText.length && c.push(b.a.selectedOptionComponentContainerError), i.a.createElement("div", f({
						className: Object(r.a)(...c),
						ref: n
					}, l, {
						onClick: s
					}), a.displayText, i.a.createElement(h.a, {
						className: b.a.closeIcon
					}))
				},
				v = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/helpers/readOnlyMode/index.ts"),
				O = n("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				E = n.n(O);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = 10,
				_ = e => e.stopPropagation();
			class T extends i.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== l.a.Delete && e.which !== l.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
					}, this.handleMouseEnterSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !0
						})
					}, this.handleMouseLeaveSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !1
						})
					}, this.onSearchBarFocus = e => {
						Object(g.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
							isFocused: !0
						}), this.props.onFocus && this.inputRef.current === e.target && this.props.onFocus())
					}, this.onSearchBarBlur = e => {
						if (this.containerRef.current && e.relatedTarget && this.containerRef.current.contains(e.relatedTarget)) return e.preventDefault(), void e.stopPropagation();
						this.props.onBlur && this.props.onBlur(e), this.setState({
							isFocused: !1
						})
					}, this.inputRef = i.a.createRef(), this.containerRef = i.a.createRef(), this.lastSelectedOptionComponentRef = i.a.createRef(), this.state = {
						isHoveringOverSelectedOption: !1,
						isFocused: !1
					}
				}
				focus() {
					Object(g.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
						isFocused: !0
					}))
				}
				reset() {
					this.inputRef.current && (this.inputRef.current.value = "")
				}
				deselectOption(e) {
					this.props.onOptionsChanged([{
						...e,
						selected: !1
					}]), this.setState({
						isHoveringOverSelectedOption: !1
					})
				}
				onSelectedOptionComponentKeyDown(e, t) {
					this.state.isHoveringOverSelectedOption || e.which !== l.a.Delete && e.which !== l.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(g.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || C,
						n = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return i.a.createElement("div", y({
						"aria-invalid": this.props.isError,
						className: Object(r.a)(this.props.className, E.a.optionSearchBarContainer, {
							[E.a.optionSearchBarError]: this.props.isError,
							[E.a.optionSearchBarReadOnly]: Object(g.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, s) => {
						if (!(n && s >= (this.props.maxOptionsToDisplay || 0))) return i.a.createElement(t, {
							tabIndex: 0,
							onFocus: _,
							key: e.id || e.displayText,
							option: e,
							onKeyDown: t => this.onSelectedOptionComponentKeyDown(t, e),
							onClickHandler: () => {
								this.deselectOption(e), this.focus()
							},
							onMouseEnter: this.handleMouseEnterSelectedOptionComponent,
							onMouseLeave: this.handleMouseLeaveSelectedOptionComponent,
							maxLength: this.props.maxLength,
							innerRef: s === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), n && i.a.createElement("span", {
						className: E.a.optionsOverflowIndication
					}, `+${this.props.options.length-(this.props.maxOptionsToDisplay||0)}`), this.props.children, !Object(g.c)(this.props.readOnlyMode) && i.a.createElement("input", {
						className: Object(r.a)(E.a.input, {
							[E.a.hiddenInput]: Object(g.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && i.a.createElement(v.a, {
						className: E.a.loadingIcon,
						sizePx: w
					}), this.state.isFocused && i.a.createElement(m, {
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
			var S = n("./node_modules/reselect/es/index.js");
			const k = [],
				I = {};
			class N extends i.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(S.a)(e => e.availableOptions || k, e => e.input, (e, t) => e.filter(e => {
						const n = e.displayText.toLowerCase(),
							s = t.toLowerCase();
						return 0 === n.indexOf(s) || a()(n.split(/[\s\/]+/), e => 0 === e.indexOf(s))
					})), this.onSearchBarFocus = () => {
						Object(g.c)(this.props.readOnlyMode) || this.state.searchBarIsFocused || (this.setState({
							searchBarIsFocused: !0
						}), this.props.onSearchBarFocus && this.props.onSearchBarFocus())
					}, this.onSearchBarBlur = e => {
						if (!Object(g.c)(this.props.readOnlyMode)) return e.relatedTarget && this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.matchesDOMElement(e.relatedTarget) ? (e.stopPropagation(), e.preventDefault(), void setTimeout(() => {
							this.optionSearchBarRef.current && this.optionSearchBarRef.current.focus()
						}, 0)) : (this.setState({
							searchBarIsFocused: !1
						}), void(this.props.onSearchBarBlur && this.props.onSearchBarBlur(e)))
					}, this.setInput = e => {
						Object(g.b)(this.props.readOnlyMode) || this.props.input !== e && this.props.onInputChanged(e)
					}, this.onOptionChanged = e => {
						this.onOptionsChanged([e])
					}, this.onOptionsChanged = e => {
						this.props.onOptionsChanged(e), a()(e, e => !!e.selected) && this.setInput("")
					}, this.onInputChanged = e => {
						Object(g.b)(this.props.readOnlyMode) || this.setInput(e.currentTarget.value)
					}, this.onKeyDown = e => {
						Object(g.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handleKeyPress(e)
					}, this.onPaste = e => {
						Object(g.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handlePaste(e)
					}, this.state = {
						searchBarIsFocused: !1
					}, this.optionsListDropdownRef = i.a.createRef(), this.optionSearchBarRef = i.a.createRef()
				}
				getSelectableOptions() {
					return this._selectableOptionsSelector(this.props)
				}
				render() {
					const {
						childClassNames: e = I
					} = this.props;
					return i.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, i.a.createElement(T, {
						className: e.searchBarClassName,
						dropdownClassName: e.optionsListDropdownClassName,
						isError: this.props.isError,
						readOnlyMode: this.props.readOnlyMode || g.a.editable,
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
			t.a = N
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				l = n.n(r);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = i.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: s,
					text: i,
					tooltipContentClass: r,
					...d
				} = e;
				return a.a.createElement("div", c({}, d, {
					className: Object(o.a)(l.a.container, n)
				}), i ? a.a.createElement("div", {
					className: Object(o.a)(l.a.tooltip, r, s ? l.a.below : l.a.above)
				}, i) : null, t)
			}, "HoverTooltip", l.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return K
			})), n.d(t, "j", (function() {
				return Y
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "i", (function() {
				return me
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "f", (function() {
				return xe
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "d", (function() {
				return ye
			})), n.d(t, "h", (function() {
				return we
			})), n.d(t, "c", (function() {
				return _e
			})), n.d(t, "e", (function() {
				return Te
			})), n.d(t, "g", (function() {
				return Se
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				r = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/controls/FormFields/index.tsx"),
				f = n("./src/lib/lessComponent.tsx"),
				C = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Select/index.m.less"),
				g = n.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = f.a.span("Wrapper", g.a),
				y = f.a.select("Inner", g.a),
				w = f.a.wrapped(C.b, "Caret", g.a);

			function _({
				className: e,
				innerClassName: t,
				...n
			}) {
				const s = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return a.a.createElement(E, {
					className: e
				}, a.a.createElement(y, O({
					className: t
				}, n)), a.a.createElement(w, O({
					isSubreddit: !0
				}, s)))
			}
			var T = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = n("./src/reddit/controls/Typography/index.tsx"),
				k = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				j = n("./node_modules/lodash/range.js"),
				D = n.n(j),
				R = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/layout/row/Inline/index.tsx"),
				M = n("./src/reddit/models/Flair/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				A = n.n(F);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(d.a)(h.a),
				V = f.a.wrapped(I.a, "Circle", A.a),
				G = f.a.h3("Label", A.a),
				K = f.a.wrapped(S.c, "Subtext", A.a),
				q = f.a.wrapped(u.a, "HoverTooltip", A.a),
				Q = f.a.div("ControlContainer", A.a),
				J = f.a.div("TextContainer", A.a),
				z = f.a.div("ActionContainer", A.a),
				Y = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: s,
					isNightModeOn: o,
					disabled: i,
					indent: r,
					last: c,
					...d
				}) => a.a.createElement("div", H({}, d, {
					className: Object(l.a)(A.a.Wrapper, e, {
						[A.a.mColumn]: "column" === t,
						[A.a.mDisabled]: !!i,
						[A.a.mIndent]: !!r,
						[A.a.mLast]: !!c,
						[A.a.isCreateCommunity]: !!n,
						[A.a.inModal]: !!s,
						[A.a.isNightModeOn]: !!o
					})
				})),
				U = f.a.a("Link", A.a),
				X = f.a.wrapped(U, "SubtextLink", A.a),
				Z = f.a.wrapped(N.a, "LinkIcon", A.a),
				$ = f.a.button("LinkButton", A.a),
				ee = f.a.wrapped(k.a, "ArrowRight", A.a),
				te = e => a.a.createElement(Y, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(J, {
					className: e.textContainerClassName
				}, a.a.createElement(G, null, e.label, e.isRequired && a.a.createElement(V, null)), a.a.createElement(K, null, e.subtext)), a.a.createElement(z, null, e.children)),
				ne = f.a.div("StyledFlair", A.a),
				se = f.a.wrapped(ne, "SpoilerFlair", A.a),
				ae = f.a.wrapped(ne, "NSFWFlair", A.a),
				oe = e => {
					switch (e.flair) {
						case M.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case M.f.Spoiler:
							return a.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				ie = e => {
					const t = Object(i.a)();
					return a.a.createElement(Y, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(J, null, a.a.createElement(P.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(G, null, e.label))), a.a.createElement(K, null, e.subtext)), a.a.createElement(z, null, a.a.createElement(Q, null, e.tooltip && a.a.createElement(q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(T.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				re = f.a.input("RangeSliderInput", A.a),
				le = f.a.div("RangeSlider", A.a),
				ce = f.a.div("Ticks", A.a),
				de = f.a.div("TickText", A.a),
				pe = f.a.div("PreSubText", A.a),
				ue = Object(r.c)({
					isNightModeOn: L.V
				}),
				me = Object(o.b)(ue)(e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, a.a.createElement(J, {
					style: {
						flex: 5
					}
				}, !e.inModal && a.a.createElement(P.a, null, a.a.createElement(G, null, e.label)), a.a.createElement(K, null, " ", a.a.createElement(pe, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(z, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(le, null, a.a.createElement(re, {
					style: {
						background: "linear-gradient(to right, " + D()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange
				}), a.a.createElement(ce, null, Object.keys(e.ticks).map((t, n) => a.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				he = e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(J, null, a.a.createElement(P.a, null, a.a.createElement(G, null, e.label)), a.a.createElement(K, null, e.subtext)), a.a.createElement(z, null, a.a.createElement(Q, null, a.a.createElement(R.l, {
					onClick: e.onClick
				}, e.actionText)))),
				xe = e => a.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(J, null, a.a.createElement(U, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(Z, null)), a.a.createElement(K, null, e.subtext)), a.a.createElement(z, null, a.a.createElement(U, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				be = e => a.a.createElement(Y, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(J, null, a.a.createElement($, {
					onClick: e.onClick
				}, e.label), a.a.createElement(K, null, e.subtext)), a.a.createElement(z, null, a.a.createElement($, {
					onClick: e.onClick
				}, a.a.createElement(ee, null)))),
				fe = f.a.div("DropdownWrapper", A.a),
				Ce = f.a.wrapped(x.b, "DropdownRow", A.a),
				ve = f.a.span("Row", A.a),
				ge = f.a.wrapped(C.b, "DropdownTriangle", A.a),
				Oe = f.a.div("DescriptionsRow", A.a),
				Ee = Object(r.c)({
					isOpen: (e, t) => Object(B.b)(t.id)(e)
				}),
				ye = Object(o.b)(Ee, (e, t) => ({
					openDropdown: () => {
						e(Object(c.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(J, null, a.a.createElement(G, null, e.label), a.a.createElement(K, null, e.subtext)), a.a.createElement(z, null, (e => a.a.createElement(fe, {
					onClick: e.openDropdown
				}, a.a.createElement(ve, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(ge, null), a.a.createElement(W, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => a.a.createElement(Ce, {
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: n
				}))), e.descriptions && a.a.createElement(Oe, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				we = ({
					disabled: e,
					last: t,
					onChange: n,
					...o
				}) => {
					const i = Object(s.useCallback)(e => n(e.target.value), [n]),
						{
							items: r
						} = o;
					return a.a.createElement(Y, {
						disabled: e
					}, a.a.createElement(J, null, a.a.createElement(G, null, o.label), a.a.createElement(K, null, o.subtext)), a.a.createElement("div", {
						className: A.a.Wrapper__LineBreak
					}), a.a.createElement(Y, {
						last: t,
						indent: !0,
						disabled: e
					}, a.a.createElement(_, {
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: i,
						value: o.selected
					}, Object.keys(r).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, r[e].displayName)))))
				},
				_e = e => a.a.createElement(Y, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(J, null, a.a.createElement(G, null, e.label), a.a.createElement(K, null, e.subtext)), a.a.createElement(z, null, e.children)),
				Te = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(b.a, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && a.a.createElement(p.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Se = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(m.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), a.a.createElement("div", {
					className: A.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && a.a.createElement(p.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), e.warning && e.warning, !!e.actionLink && a.a.createElement("div", {
					className: A.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return i
			})), n.d(t, "p", (function() {
				return r
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "j", (function() {
				return O
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(a);
			const i = s.a.section("FormPage", o.a),
				r = s.a.h1("HomePageTitle", o.a),
				l = s.a.button("HomePageBreadcrumb", o.a),
				c = s.a.div("HomePageGroup", o.a),
				d = s.a.h1("FormPageTitle", o.a),
				p = s.a.div("FormPageSection", o.a),
				u = s.a.div("FormGroup", o.a),
				m = s.a.h2("FormGroupTitle", o.a),
				h = s.a.div("FormElement", o.a),
				x = s.a.div("FormGroupDescription", o.a),
				b = s.a.div("FormItem", o.a),
				f = s.a.h3("FormElementTitle", o.a),
				C = s.a.div("FormElementDescription", o.a),
				v = s.a.div("FormElementError", o.a),
				g = s.a.div("FormElementSubGroup", o.a),
				O = s.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "g", (function() {
				return v
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				r = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const p = s.a.wrapped(a.a, "ModalInput", d.a),
				u = s.a.input("Input", d.a),
				m = s.a.wrapped(l.a, "RadioOn", d.a),
				h = s.a.wrapped(r.a, "RadioOff", d.a),
				x = s.a.wrapped(o.a, "Checkbox", d.a),
				b = s.a.wrapped(i.a, "CheckboxSelected", d.a),
				f = s.a.textarea("Textarea", d.a),
				C = s.a.label("StyledLabel", d.a),
				v = s.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(c);
			t.a = e => a.a.createElement(l.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(o.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, a.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? a.a.createElement(r.a, {
				className: d.a.checkboxSelected
			}) : a.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				p = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(u),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				x = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(r.a)(x.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(l.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(r.a)(x.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(p.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(r.a)(x.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: x.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(r.a)(x.a.row, e, {
					[x.a.mIsInteractive]: !t.noHover,
					[x.a.mIsSelected]: t.isSelected,
					[x.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(f, b({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				i = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/icons/svgs/Dropdown/index.tsx");
			const m = e => {
				e.preventDefault()
			};
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = a.a.createRef(), this.menuItems = a.a.createRef(), this.containerRef = a.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: s
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), s(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							const n = this.menuItems.current.getElementsByClassName(i.a.menuOption);
							for (let s = 0; s < n.length; s++) e.relatedTarget === n[s] && (t = !0)
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
							const t = this.menuItems.current.getElementsByClassName(i.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
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
					const e = this.menuItems.current.getElementsByClassName(i.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n
					} = this.props;
					return e.map((e, s) => a.a.createElement(c.b, {
						key: s + e.displayText,
						className: Object(r.a)(i.a.menuOption, {
							[i.a.topics]: n
						}),
						noIcon: !0,
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isTopicsStyle: o,
						menuItemsClassName: c,
						name: h,
						isSaving: x
					} = this.props, {
						isOpen: b
					} = this.state;
					return a.a.createElement(l.b.Consumer, null, ({
						[l.a.Icons]: f
					}) => a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(r.a)(i.a.dropdownMenu, t, {
							[i.a.topics]: o
						})
					}, a.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(r.a)(e, i.a.selector, {
							[i.a.compact]: s
						}, {
							[i.a.topics]: o
						}),
						name: h,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: i.a.selectorContent,
						tabIndex: -1
					}, n), x ? a.a.createElement(d.a, {
						sizePx: 8,
						className: i.a.loadingIcon
					}) : f ? a.a.createElement(p.a, {
						name: "caret_down"
					}) : a.a.createElement(u.b, {
						className: i.a.caretDown
					})), a.a.createElement("div", {
						className: Object(r.a)(i.a.menuItems, c, {
							[i.a.topics]: o
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, b && this.getDropdownMenuItems())))
				}
			}
			t.b = h
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(a),
				i = n("./node_modules/raf/index.js"),
				r = n.n(i),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/higherOrderComponents/asModal/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = n.n(C);
			var g = Object(x.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: v.a.wrapper
					}, c.a.createElement(f.a, {
						className: v.a.titleRow
					}, n), c.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), c.a.createElement(f.a, {
						className: v.a.buttonRow
					}, c.a.createElement(b.i, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				O = n("./src/reddit/controls/ErrorText/index.m.less"),
				E = n.n(O);
			const y = Object(p.c)({
				activeModalId: h.a
			});
			class w extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					r()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: n,
						errorModalBody: a,
						errorModalTitle: o = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: r,
						textHasOverflowed: l
					} = this.state;
					return c.a.createElement("div", {
						className: Object(u.a)(E.a.wrapper, n)
					}, c.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), l && c.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, i), t === r && c.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: o
					}, a || e))
				}
			}
			const _ = Object(d.b)(y, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(w),
				T = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: a,
						messages: o = []
					} = e, i = o.length ? o : a ? [a] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(_, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				S = e => c.a.createElement(T, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				p = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.input("input", p.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: i,
						...r
					} = e, l = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(o.a)(p.a.inputWrapper, i, {
							[p.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, a.a.createElement(m, u({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, r)), e.label && a.a.createElement("label", {
						className: Object(o.a)(p.a.label, {
							[p.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: i,
						className: r,
						redditStyle: l,
						...c
					} = e, d = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(o.a)(p.a.inputMovingLabelWrapper, r, {
							[p.a.mIsInvalid]: i,
							[p.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, a.a.createElement(m, u({
						innerRef: s
					}, c)), e.label && a.a.createElement("label", {
						className: Object(o.a)(p.a.label, {
							[p.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				f = e => a.a.createElement("div", {
					className: Object(o.a)(p.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(l.a, {
					className: p.a.plus
				}));
			var C;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(C || (C = {}));
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: C.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: C.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: s,
						errors: o = []
					} = this.props;
					return e.map((e, i) => a.a.createElement(x, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!o[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: p.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, a.a.createElement(c.b, {
						className: p.a.trash
					})), !!o[i] && a.a.createElement(r.b, {
						className: p.a.errorText
					}, o[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: i,
						disabled: r
					} = this.props;
					this.focusedInput = null;
					const l = !(!!s && n.length >= s) && !r;
					return a.a.createElement("div", {
						className: Object(o.a)(p.a.multiInputWrapper, e)
					}, t && l && a.a.createElement(f, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && l && a.a.createElement(f, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				r = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(r.a.loadingIcon, t, {
					[r.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(o);
			t.a = s.a.wrapped(a.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(s || (s = {}));
			const a = e => o(e) || e === s.focusableReadOnly,
				o = e => e === s.readOnly
		},
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...a.defaults(t),
					subreddit: a.subreddit(t),
					actionInfo: a.actionInfo(t),
					correlationId: Object(s.d)(s.a.SubredditCreation, !1)
				}),
				i = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...a.defaults(e),
					subreddit: a.subreddit(e),
					actionInfo: a.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				r = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...a.defaults(t),
					subreddit: a.subreddit(t),
					actionInfo: a.actionInfo(t),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				l = n.n(r);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return a.a.createElement("i", {
					className: `${Object(i.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", l.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				r = n.n(i);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(e.className, r.a.admin, {
					[r.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), a.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, a.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				r = n.n(i);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(r.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, a.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, a.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				r = n.n(i);
			const l = e => a.a.createElement("svg", {
				className: Object(o.a)(r.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/pages/SubredditCreation/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				Sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				isOverlay: "_3JejK3woZKuE7psWYzZMk-",
				Content: "_2wEvMk0HNO1vMRXR89R4YE",
				content: "_2wEvMk0HNO1vMRXR89R4YE",
				Container: "_3rOOumzhn2kQeSbQA1BtJI",
				container: "_3rOOumzhn2kQeSbQA1BtJI",
				OuterContainer: "_1t_20Pp0ozZf5JHADFW277",
				outerContainer: "_1t_20Pp0ozZf5JHADFW277"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.m.less": function(e, t, n) {
			e.exports = {
				sublabel: "_3iEQMbJzyCJP7q0YQLg6j4",
				subtitle: "_1NkQ5U2m0s_6vOfhCgiIgT",
				radioDescription: "_2VfO_j9K0NqNwA6JyAl8Dk",
				buttonContainer: "rktXqe6ilbY86M7UI5N0",
				isOverlay: "_2-RGOjReVDKqocc0lhfKCD",
				field: "lzEa7-AzGmC9abTt7-RJG",
				isCreatePending: "_3rxpxb7pMWAbGQ6_JA_my7",
				subredditCreation: "_3eSVsnKJOqAQo-ixxTeJcl",
				container: "_2oaybRT7snUp8XlyHlRiSP",
				title: "_19pYcIVThkZW5KMHTi8qsc",
				nsfw: "_hnZsl3c6qOjy4qOD9r0R",
				createButton: "rJOmFCS_DMZSRltlKtpyt",
				pendingText: "oXus6jwjzhkeznWdE45YL",
				metaFieldDescription: "fd5WCBCH7kTLTlNepW054",
				numCommunityTopicsSelected: "_1QES7ND3zudXR2epk08OVa",
				subtextContainer: "_1V23LtWm6tqb0xlD1Xkh-W",
				radioContainer: "_3qUROz4qvkxCG-oEJTkW3x",
				radioContent: "luCqkz2vQaP-L_NeDD98b",
				textButton: "_1HeLiu_c_KBBmvtR1puoSk",
				fullWidthTextContainer: "_2jvToia6nJCdTHqp_Tw_fp",
				Info: "cP738yi9DxlBmCQTtFLop",
				info: "cP738yi9DxlBmCQTtFLop",
				RadioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				radioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				StyledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				styledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				Public: "_3fiOvK-VXqZ9cZO0d912xA",
				public: "_3fiOvK-VXqZ9cZO0d912xA",
				RadioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				radioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				Restricted: "_3RYKKCLydFkeZVJov0xebO",
				restricted: "_3RYKKCLydFkeZVJov0xebO",
				Private: "_19fLjAFVy42ZR2vocDvgUW",
				private: "_19fLjAFVy42ZR2vocDvgUW",
				Employee: "ExNY0v88NVrkWCfrt55XJ",
				employee: "ExNY0v88NVrkWCfrt55XJ",
				CloseButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				closeButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				ErrorText: "_2ay6MX8oi5mY0chgCSBVHO",
				errorText: "_2ay6MX8oi5mY0chgCSBVHO"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "radioOptions", (function() {
				return _e
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/formatApiError/index.ts"),
				p = n("./src/reddit/actions/subredditCreation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/actions/tags/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				b = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				f = n("./src/reddit/models/Tags/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/tags.ts"),
				g = n("./src/reddit/components/CommunityTopics/index.m.less"),
				O = n.n(g);
			const E = Object(l.c)({
				availableGlobalOptions: v.f,
				selectedOptions: v.k,
				isLoading: v.E,
				currentInput: v.g,
				selectedPrimaryTag: v.y,
				hasSecondaryTags: v.q
			});
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							n = e.filter(e => !e.selected);
						this.onOptionsSelected(t), n.forEach(e => this.onOptionDeselected(e))
					}
				}
				onOptionsSelected(e) {
					const t = f.a - this.props.selectedOptions.length,
						n = e.filter(e => !!e.displayText.trim()),
						s = n.slice(0, t);
					s.forEach(e => {
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), s.length !== n.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected({
						...e,
						displayText: e.displayText.trim()
					})
				}
				render() {
					return o.a.createElement("div", {
						className: O.a.communityTopicsContainer
					}, o.a.createElement(x.a, null), (!!this.props.selectedPrimaryTag || this.props.hasSecondaryTags) && o.a.createElement(b.a, {
						addText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						dropdownHeaderText: s.fbt._("Suggested topics", null, {
							hk: "1qNrZC"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > f.a,
						isLoading: this.props.isLoading,
						maxOptionLength: f.b,
						onSearchBarFocus: this.props.onSearchBarFocused,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						splitOnCommaPress: !0
					}))
				}
			}
			var w = Object(i.b)(E, e => ({
					optionSelected: t => {
						e(Object(m.c)({
							option: t
						}))
					},
					optionDeselected: t => {
						e(Object(m.b)({
							option: t
						}))
					},
					onInputChanged: t => e(Object(m.a)({
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(h.f)({
							...Object(h.e)(s.fbt._("You can only add up to {max number of topics} community topics", [s.fbt._param("max number of topics", f.a.toString())], {
								hk: "1OySAh"
							}), C.b.Error),
							duration: h.a
						}))
					})
				}))(y),
				_ = n("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				T = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				S = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				k = n("./src/reddit/components/TrackingHelper/index.tsx"),
				I = n("./src/reddit/constants/history.ts"),
				N = n("./src/reddit/contexts/InsideOverlay.tsx"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				R = n("./src/reddit/controls/ErrorText/index.tsx"),
				P = n("./src/reddit/controls/RadioInput/index.tsx"),
				M = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				B = n("./src/reddit/controls/TextButton/index.tsx"),
				L = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				F = n("./src/reddit/helpers/trackers/screenview.ts"),
				A = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				H = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				W = n("./src/reddit/icons/svgs/Close/index.tsx"),
				V = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				G = n("./src/reddit/icons/svgs/Info/index.tsx"),
				K = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				q = n("./src/reddit/icons/svgs/User/index.tsx"),
				Q = n("./src/reddit/models/Subreddit/index.ts"),
				J = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				z = n("./src/config.ts"),
				Y = n("./src/reddit/pages/SubredditCreation/Layout/index.m.less"),
				U = n.n(Y);
			var X = e => o.a.createElement("div", {
					className: U.a.OuterContainer
				}, o.a.createElement("div", {
					className: Object(c.a)(e.className, U.a.Container, {
						[U.a.isOverlay]: e.isOverlay
					})
				}, o.a.createElement("div", {
					className: Object(c.a)(U.a.Sidebar, {
						[U.a.isOverlay]: e.isOverlay
					}),
					style: {
						backgroundImage: `url(${z.a.assetPath}/img/${e.isOverlay?"community-creation":"partner-connection"}.png)`
					}
				}), o.a.createElement("div", {
					className: Object(c.a)(U.a.Content, {
						[U.a.isOverlay]: e.isOverlay
					})
				}, e.children))),
				Z = n("./src/reddit/constants/experiments.ts"),
				$ = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ee = n("./src/reddit/selectors/experiments/utils.ts"),
				te = n("./src/reddit/selectors/user.ts");
			const ne = Object(l.a)(e => Object($.c)(e, {
					experimentName: Z.y,
					experimentEligibilitySelector: se
				}), ee.a),
				se = e => Object(te.I)(e) || Object(te.J)(e),
				ae = Object(l.a)(ne, e => e === Z.E.Optional),
				oe = Object(l.a)(ne, e => e === Z.E.Remove);
			var ie = n("./src/reddit/selectors/experiments/emailInvite.ts"),
				re = n("./src/reddit/selectors/subreddit.ts"),
				le = n("./src/reddit/pages/SubredditCreation/index.m.less"),
				ce = n.n(le),
				de = n("./src/lib/lessComponent.tsx");
			const pe = 21,
				ue = 500,
				me = "create-title-info",
				he = de.a.wrapped(G.a, "Info", ce.a),
				xe = de.a.wrapped(M.a, "RadioOption", ce.a),
				be = de.a.wrapped(T.c, "Tooltip", ce.a),
				fe = de.a.wrapped(q.a, "Public", ce.a),
				Ce = de.a.wrapped(V.a, "Restricted", ce.a),
				ve = de.a.wrapped(K.a, "Private", ce.a),
				ge = de.a.wrapped(H.a, "Employee", ce.a),
				Oe = de.a.wrapped(W.a, "CloseButton", ce.a),
				Ee = de.a.wrapped(R.b, "ErrorText", ce.a),
				ye = Object(l.c)({
					error: re.h,
					isCreatePending: re.k,
					isEmailInviteExperimentEnabled: ie.a,
					isEmployee: te.G,
					isTopicOptional: ae,
					isTopicRemoved: oe,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(te.gb)(e),
					userIsSuspended: te.O,
					allTags: v.e,
					existingTags: v.h,
					newTags: v.i,
					selectedCommunityTopicsOptions: v.k,
					selectedPrimaryTagId: v.j
				}),
				we = Object(i.b)(ye, e => ({
					createCommunity: t => e(Object(p.f)(t)),
					clearErrors: () => e(Object(p.e)()),
					onCloseLocation: t => e(Object(r.b)(t)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: me
					})),
					onHideTooltip: () => e(Object(u.i)())
				})),
				_e = (e, t) => [o.a.createElement(xe, {
					key: "public",
					showButton: !0,
					value: "public"
				}, o.a.createElement("div", {
					className: ce.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(fe, null)), o.a.createElement("div", {
					className: ce.a.radioContainer
				}, o.a.createElement("div", {
					className: ce.a.sublabel
				}, s.fbt._("Public", null, {
					hk: "DK992"
				})), o.a.createElement("div", {
					className: Object(c.a)(ce.a.metafieldDescription, ce.a.radioDescription)
				}, s.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), o.a.createElement(xe, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, o.a.createElement("div", {
					className: ce.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(Ce, null)), o.a.createElement("div", {
					className: ce.a.radioContainer
				}, o.a.createElement("div", {
					className: ce.a.sublabel
				}, s.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), o.a.createElement("div", {
					className: Object(c.a)(ce.a.metafieldDescription, ce.a.radioDescription)
				}, Object(J.g)(t))))), o.a.createElement(xe, {
					key: "private",
					showButton: !0,
					value: "private"
				}, o.a.createElement("div", {
					className: ce.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(ve, null)), o.a.createElement("div", {
					className: ce.a.radioContainer
				}, o.a.createElement("div", {
					className: ce.a.sublabel
				}, s.fbt._("Private", null, {
					hk: "3q5SYn"
				})), o.a.createElement("div", {
					className: Object(c.a)(ce.a.metafieldDescription, ce.a.radioDescription)
				}, s.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), o.a.createElement(xe, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, o.a.createElement("div", {
					className: ce.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(ge, null)), o.a.createElement("div", {
					className: ce.a.radioContainer
				}, o.a.createElement("div", {
					className: ce.a.sublabel
				}, s.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), o.a.createElement("div", {
					className: Object(c.a)(ce.a.metafieldDescription, ce.a.radioDescription)
				}, s.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class Te extends o.a.Component {
				constructor(e) {
					super(e), this.onNameChange = e => {
						this.setState({
							name: e.target.value
						})
					}, this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.update = (e, t) => this.setState({
						[t]: e
					}), this.onTypeChange = e => {
						this.setState({
							type: e
						})
					}, this.onInviteViaEmailClick = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(L.a)("community_creation")), this.setState({
							showEmailInviteModal: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInviteModal: !1
						})
					}, this.onCreateCommunityClick = () => {
						this.props.isCreatePending || (clearTimeout(this.timeout), this.props.createCommunity({
							name: this.state.name,
							publicDescription: this.state.description,
							type: this.state.type,
							over18: this.state.over18,
							restrictCommenting: this.state.restrictCommenting,
							restrictPosting: this.state.restrictPosting,
							allTags: this.props.allTags,
							newTags: this.props.newTags,
							existingTags: this.props.existingTags,
							primaryTagId: this.props.selectedPrimaryTagId || void 0
						}), this.timeout = window.setTimeout(() => {
							this.props.isCreatePending && this.setState({
								waitingForSuccessfulCommunity: !0
							})
						}, 2e3))
					}, this.errorHelper = e => {
						if (!e) return {};
						const t = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
							n = e.type;
						if ("name" === t) {
							if ("NO_TEXT" === n) return {
								name: s.fbt._("A community name is required", null, {
									hk: "QIlYS"
								})
							};
							if ("BAD_SR_NAME" === n) return {
								name: s.fbt._("Make sure your community name follows all of the formatting rules", null, {
									hk: "1yzUHm"
								})
							};
							if ("SUBREDDIT_EXISTS" === n) return {
								name: s.fbt._("This community name is already taken", null, {
									hk: "3xeE7r"
								})
							};
							if ("SUBREDDIT_UNAVAILABLE" === n) return {
								name: s.fbt._("This community name is unavailable", null, {
									hk: "15j6BB"
								})
							}
						} else {
							if ("public_description" === t) return {
								publicDescription: s.fbt._("A community description is required", null, {
									hk: "32uyXy"
								})
							};
							if ("topics" === t && "TOPICS_MISSING" === n) return {
								topics: s.fbt._("A primary topic is required", null, {
									hk: "2W8L8A"
								})
							}
						}
						return {
							generic: Object(d.a)(e)
						}
					}, this.state = {
						name: "",
						description: "",
						type: Q.e.Public,
						over18: !1,
						waitingForSuccessfulCommunity: !1,
						restrictCommenting: !1,
						restrictPosting: !0,
						showEmailInviteModal: !1
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(F.w)()), this.props.clearErrors()
				}
				componentWillUnmount() {
					clearTimeout(this.timeout)
				}
				render() {
					const {
						error: e,
						location: t,
						isCreatePending: n,
						isEmailInviteExperimentEnabled: a,
						isEmployee: i,
						isOverlay: r,
						isTopicOptional: l,
						isTopicRemoved: d,
						onCloseLocation: p,
						onHideTooltip: u,
						onShowTooltip: m,
						sendEvent: h,
						userDoesNotHaveEnoughExpToCreateCommunity: x,
						userIsSuspended: b
					} = this.props, C = this.errorHelper(e), {
						over18: v,
						showEmailInviteModal: g,
						waitingForSuccessfulCommunity: O
					} = this.state;
					return o.a.createElement(X, {
						className: Object(c.a)(ce.a.subredditCreation, {
							[ce.a.isOverlay]: r
						}),
						isOverlay: r
					}, o.a.createElement("div", {
						className: ce.a.container
					}, o.a.createElement("h1", {
						className: ce.a.title
					}, s.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), r && o.a.createElement(Oe, {
						onClick: () => {
							h(Object(A.a)()), p(t.state[I.a.CloseLocation])
						}
					})), x ? o.a.createElement("h2", {
						className: ce.a.sublabel
					}, s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : b ? o.a.createElement("h2", {
						className: ce.a.sublabel
					}, s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(S.e, {
						hideCountdown: !0,
						isCreateCommunity: !0,
						isRequired: !0,
						label: s.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: ce.a.fullWidthTextContainer,
						onChange: this.onNameChange,
						maxChars: pe,
						value: this.state.name,
						subtext: o.a.createElement("span", {
							className: ce.a.subtextContainer
						}, s.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), o.a.createElement("span", {
							id: me,
							onMouseEnter: m,
							onMouseLeave: u,
							className: ce.a.info
						}, o.a.createElement(he, null), o.a.createElement(be, {
							caretOnTop: !0,
							tooltipId: me,
							text: s.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), C.name && o.a.createElement(Ee, null, C.name), !d && o.a.createElement(o.a.Fragment, null, o.a.createElement(S.k, {
						isRequired: !l,
						label: s.fbt._("Topics", null, {
							hk: "2iixv1"
						}),
						textContainerClassName: ce.a.fullWidthTextContainer,
						subtext: o.a.createElement("span", {
							className: ce.a.subtextContainer
						}, s.fbt._("This will help relevant users find your community.", null, {
							hk: "3LM2Jb"
						}), o.a.createElement("span", null, `${this.props.selectedCommunityTopicsOptions.length}/${f.a}`)),
						direction: "column"
					}, o.a.createElement(w, null)), C.topics && o.a.createElement(Ee, null, C.topics)), o.a.createElement(S.g, {
						hideCountdown: !0,
						isCreateCommunity: !0,
						isRequired: !0,
						label: s.fbt._("Description", null, {
							hk: "4gli9v"
						}),
						onChange: this.onDescriptionChange,
						maxChars: ue,
						rows: 2,
						subtext: s.fbt._("This is how new members come to understand your community.", null, {
							hk: "35Gh2u"
						}),
						textContainerClassName: ce.a.fullWidthTextContainer,
						value: this.state.description
					}), C.publicDescription && o.a.createElement(Ee, null, C.publicDescription), o.a.createElement(S.k, {
						label: s.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: ce.a.fullWidthTextContainer
					}, o.a.createElement(P.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, _e(i, "post"))), o.a.createElement("div", {
						className: Object(c.a)(ce.a.field, {
							[ce.a.isCreatePending]: n
						})
					}, o.a.createElement("div", {
						className: ce.a.subtitle
					}, s.fbt._("Adult content", null, {
						hk: "20arB"
					})), o.a.createElement(D.a, {
						name: "over18",
						value: v,
						onChange: () => this.update(!this.state.over18, "over18"),
						disabled: n
					}, o.a.createElement("div", {
						className: ce.a.nsfw
					}, "NSFW"), o.a.createElement("div", {
						className: ce.a.sublabel
					}, s.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), a && o.a.createElement("div", {
						className: Object(c.a)(ce.a.field, {
							[ce.a.isCreatePending]: n
						})
					}, o.a.createElement(B.a, {
						className: ce.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, s.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), C.generic && o.a.createElement(Ee, null, C.generic), O && o.a.createElement("div", {
						className: ce.a.pendingText
					}, s.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), o.a.createElement("div", {
						className: Object(c.a)(ce.a.buttonContainer, {
							[ce.a.isOverlay]: r
						})
					}, r && o.a.createElement(j.q, {
						disabled: n,
						className: ce.a.createButton,
						onClick: () => {
							p(t.state[I.a.CloseLocation]), h(Object(A.a)())
						},
						priority: j.b.Secondary
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(j.q, {
						disabled: n,
						className: ce.a.createButton,
						onClick: this.onCreateCommunityClick
					}, s.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), g && o.a.createElement(_.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: h
					}))
				}
			}
			t.default = Object(k.c)(we(Object(N.b)(Te)))
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: s.Hb
				});
				return !(!t || Object(s.sd)(t))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditCreation.aaa6d05f48a582c086ea.js.map