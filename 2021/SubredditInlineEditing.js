// https://www.redditstatic.com/desktop2x/SubredditInlineEditing.13a25a12d0a9014ce9ed.js
// Retrieved at 4/21/2021, 11:20:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditInlineEditing"], {
		"./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/models/Tags/index.ts"),
				c = s("./src/reddit/selectors/tags.ts");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = Object(r.c)({
				selectedOptions: (e, {
					subredditId: t
				}) => Object(c.v)(e, {
					subredditId: t
				})
			});
			t.a = Object(i.b)(l)(e => o.a.createElement(o.a.Fragment, null, e.selectedOptions.length, "/", a.a))
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, s) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tags/index.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/ContentTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				O = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				b = s.n(O);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class g extends i.a.Component {
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
						className: b.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, i.a.createElement("span", {
						className: b.a.topRow
					}, i.a.createElement("h3", {
						className: b.a.title
					}, e)), i.a.createElement("p", {
						className: b.a.tooltipBody
					}, t), i.a.createElement(h.i, {
						className: b.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, s || x._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var f = Object(r.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(d.i)()), Object(u.ib)()
				},
				onViewTooltip: () => {
					Object(u.Ab)()
				}
			}))(Object(p.c)(g));
			const T = "editable-primary-topic-idcard";
			var y = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				S = s("./src/reddit/models/Tags/index.ts"),
				C = s("./src/reddit/selectors/tags.ts"),
				v = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				I = s.n(v);
			const E = ({
					hasPrimaryTag: e,
					hasSecondaryTags: t
				}) => {
					if (e) return null;
					let s = n.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						o = n.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return t && (s = n.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), o = n.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), i.a.createElement(l.a, {
						className: I.a.tooltip,
						tooltipId: T,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, i.a.createElement(f, {
						translatedTitle: s,
						translatedDesc: o
					}))
				},
				w = {
					availablePrimaryTags: C.t
				},
				j = Object(a.c)({
					...w,
					selectedPrimaryTag: (e, {
						subredditId: t
					}) => t && Object(C.A)(e, {
						subredditId: t
					}) || null,
					hasSecondaryTags: (e, {
						subredditId: t
					}) => Object.keys(Object(C.s)(e, {
						itemId: t
					})).length > 0,
					isSaving: C.G
				}),
				D = Object(a.c)({
					...w,
					selectedPrimaryTag: C.y,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(C.G)(e)
				});
			class _ extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					const e = this.props.onShowTooltip;
					this.setState({
						tooltipDismissed: Object(u.p)()
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
						isSaving: o,
						onPrimaryTopicSelected: r,
						selectedPrimaryTag: a
					} = this.props, c = a && a.text;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(y.b, {
						id: this.isTooltipEnabled() ? T : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: c || n.fbt._("Add a Primary Topic", null, {
							hk: "1HgVte"
						}),
						options: e.map(e => ({
							displayText: e.text,
							value: e.id,
							isSelected: !!a && a.id === e.id
						})),
						onSelect: r,
						menuItemsClassName: I.a.menuItemsWrapper,
						showSelectedCheckmark: !0,
						isSaving: o
					}), this.isTooltipEnabled() && i.a.createElement(E, {
						hasPrimaryTag: !!a,
						hasSecondaryTags: s
					}))
				}
			}
			const P = Object(r.b)(D, e => ({
					onPrimaryTopicSelected: t => {
						e(Object(c.d)({
							primaryTagId: t.value
						}))
					}
				}))(_),
				R = Object(r.b)(j, (e, {
					subredditId: t,
					onPrimarySelect: s
				}) => ({
					onPrimaryTopicSelected: n => {
						n.isSelected || !s ? n.isSelected || e(Object(c.s)(t, {
							tagId: n.value,
							state: S.d.TAGGED
						})) : s(n.value)
					},
					onShowTooltip: () => {
						e(Object(d.f)({
							tooltipId: T
						}))
					}
				}));
			t.b = R(_)
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less": function(e, t, s) {
			e.exports = {
				suggestedTopicsContainer: "_3qCTJNZ-iSCZa0wyVfs6my",
				relatedText: "_389N9jvZJu60U3E7vIF00n",
				closeIcon: "M40GQ3RaivlkCl8WQ-pXo",
				plusIcon: "_2OYvdU1reofcbKMJ0wvC_x",
				suggestedTopic: "_1RmiLhJpOUx_hgduPf3F5O",
				closeIconContainer: "sHLJV3zATRod0k1f_m71I",
				suggestedTopicText: "_1-rmQV4Wee08Dt-h2GyW-o"
			}
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				h = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less"),
				m = s.n(u);
			var O = e => i.a.createElement("span", {
					className: m.a.suggestedTopic,
					onClick: () => e.onSuggestedTopicSelected(e.suggestedTopic)
				}, i.a.createElement(h.a, {
					className: m.a.plusIcon
				}), i.a.createElement("span", {
					className: m.a.suggestedTopicText
				}, e.suggestedTopic.displayText), i.a.createElement("span", {
					className: m.a.closeIconContainer,
					onClick: t => {
						t.preventDefault(), t.stopPropagation(), e.onSuggestedTopicDismissed(e.suggestedTopic)
					}
				}, i.a.createElement(p.a, {
					className: m.a.closeIcon
				}))),
				b = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				x = s("./src/reddit/models/Tags/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/tags.ts");
			const T = Object(a.c)({
					suggestedOptions: (e, {
						subredditId: t
					}) => {
						const s = Object(f.B)(e, {
								itemId: t
							}),
							n = Object(f.v)(e, {
								subredditId: t
							}),
							o = Object(f.z)(e, {
								subredditId: t
							});
						return s.filter(e => !!e.id && o !== e.id && !n.find(t => !!t.id && t.id === e.id))
					}
				}),
				y = Object(r.b)(T, (e, {
					subredditId: t,
					onOptionSelected: s,
					context: o
				}) => ({
					onSuggestedOptionDismissed: s => {
						e(Object(d.r)(t, [], [{
							subredditId: t,
							tagId: s.id,
							isRelevant: !1
						}], o, !0))
					},
					onSuggestedOptionSelected: i => {
						e((e, r) => {
							const a = r();
							Object(f.v)(a, {
								subredditId: t
							}).length >= x.a ? e(Object(l.f)({
								...Object(l.e)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", x.a.toString())], {
									hk: "1OySAh"
								}), g.b.Error),
								duration: l.a
							})) : (e(Object(d.n)({
								subredditId: t,
								option: i
							})), Object(b.c)(r(), t, i, {
								context: o
							}), s && s(i))
						})
					}
				}));
			t.a = y(e => e.suggestedOptions.length ? i.a.createElement("div", {
				className: Object(c.a)(m.a.suggestedTopicsContainer, e.className)
			}, e.children || i.a.createElement("span", {
				className: m.a.relatedText
			}, n.fbt._("Related:", null, {
				hk: "1qt7CO"
			})), e.suggestedOptions.map(t => i.a.createElement(O, {
				key: t.id,
				suggestedTopic: t,
				onSuggestedTopicSelected: e.onSuggestedOptionSelected,
				onSuggestedTopicDismissed: e.onSuggestedOptionDismissed
			}))) : null)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tags/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				p = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				h = s("./src/reddit/models/Tags/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/tags.ts"),
				O = s("./src/reddit/components/CommunityTopics/index.m.less"),
				b = s.n(O);
			const x = Object(a.c)({
				availableSubredditTags: (e, {
					subredditId: t
				}) => Object(m.d)(e, {
					subredditId: t
				}),
				subredditTags: (e, {
					subredditId: t
				}) => Object(m.s)(e, {
					itemId: t
				}),
				availableGlobalOptions: (e, {
					subredditId: t
				}) => Object(m.a)(e, {
					thingId: t
				}),
				selectedOptions: (e, {
					subredditId: t
				}) => Object(m.v)(e, {
					subredditId: t
				}),
				isLoading: e => Object(m.E)(e),
				currentInput: (e, {
					subredditId: t
				}) => Object(m.l)(e, {
					subredditId: t
				})
			});
			class g extends i.a.Component {
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
							const t = Object(m.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(h.f)(t, !0))
						}
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return i.a.createElement("div", {
						className: b.a.communityTopicsContainer
					}, i.a.createElement(l.a, {
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
			t.b = Object(r.b)(x, (e, {
				subredditId: t,
				context: s
			}) => ({
				optionSelected: n => {
					e(Object(c.n)({
						subredditId: t,
						option: n
					})), e((e, o) => {
						p.e(o(), t, n, {
							context: s
						})
					})
				},
				optionDeselected: n => {
					e(Object(c.m)({
						subredditId: t,
						option: n
					})), e((e, o) => {
						p.d(o(), t, n, {
							context: s
						})
					})
				},
				onInputChanged: s => e(Object(c.l)({
					subredditId: t,
					input: s
				})),
				onSearchBarFocused: () => e((e, n) => {
					p.b(n(), t, {
						context: s
					})
				}),
				onMaxTopicsHit: () => e((e, t) => {
					e(Object(d.f)({
						...Object(d.e)(n.fbt._({
							"*": "You can only add up to max {number} community topics",
							_1: "You can only add up to max 1 community topic"
						}, [n.fbt._plural(h.a, "number")], {
							hk: "s07I1"
						}), u.b.Error),
						duration: d.a
					}))
				})
			}))(g)
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
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/fastdom/index.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ContentTooltip/index.m.less"),
				O = s.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = {
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
				f = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: o,
						caretColor: r,
						onClick: a,
						...c
					} = e;
					return i.a.createElement("div", b({
						onClick: a,
						className: Object(d.a)(s, O.a.StyledTooltipContainer, {
							[O.a.caretOnTop]: "top" === o,
							[O.a.caretOnLeft]: "left" === o,
							[O.a.caretOnRight]: "right" === o,
							[O.a.caretOnBottom]: "bottom" === o
						}),
						style: {
							...n,
							"--contentTooltip-caretColor": r && r[o] ? r[o] : Object(h.a)(e).body
						}
					}, c), t)
				}),
				T = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				y = Object(c.a)(f, [n.a.Click, n.a.Keydown]),
				S = Object(r.b)(T);
			class C extends i.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						p.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const n = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									o = n.left > t.width;
									break;
								case "right":
									o = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = n.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : g(this.props.defaultTooltipPosition)
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
						caretPosition: n
					} = this.getPositions(e);
					return i.a.createElement(y, b({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = S(C)
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/InfoTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_23szEekH5XXtj16r9ijFFV",
				infoIcon: "Cna4lAhBSoUi4u9zdD3b4",
				activeInfoIcon: "_3AV4m36yvm9V73ErKKmXfe"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/SelectedOptionComponent/index.m.less": function(e, t, s) {
			e.exports = {
				selectedOption: "_1sIE8VfrjZG1yETeSYNt8R",
				readOnlySelectedOption: "_2rKcTMTmSO59ljJ0QB38cQ",
				closeIcon: "_2UHIx3M8FVQ2t3bxAaUMt6",
				fakeOption: "_2HhHTqfIc2uUBvPpElSx3b",
				selectedOptionError: "_2RT4W2XoPWhuCDxgdLOCyx",
				plusIcon: "_1Wlw6VAlBp8UW7eHpfZR9H"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/CommunityTopics/index.tsx"),
				h = s("./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx"),
				u = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				m = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx"),
				O = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				b = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/SelectedOptionComponent/index.m.less"),
				f = s.n(g);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = (e, t) => [f.a.selectedOption, "number" == typeof t && e.displayText.length > t ? f.a.selectedOptionError : null], C = e => {
				const {
					innerRef: t,
					onClickHandler: s,
					onFocus: n,
					option: i,
					maxLength: r,
					...c
				} = e;
				return o.a.createElement("div", T({}, c, {
					className: Object(a.a)(...S(i, r), f.a.readOnlySelectedOption),
					ref: e.innerRef
				}), e.option.displayText)
			}, v = e => {
				const {
					innerRef: t,
					onClickHandler: s,
					option: n,
					maxLength: i,
					...r
				} = e;
				return o.a.createElement("div", T({}, r, {
					onClick: s,
					className: Object(a.a)(...S(n, i)),
					ref: e.innerRef
				}), e.option.displayText, o.a.createElement(b.a, {
					className: f.a.closeIcon
				}))
			}, I = () => o.a.createElement("div", {
				className: Object(a.a)(f.a.selectedOption, f.a.readOnlySelectedOption, f.a.fakeOption)
			}, o.a.createElement(x.a, {
				className: f.a.plusIcon
			}), y._("Add subtopics", null, {
				hk: "aLm7V"
			}));
			var E = s("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				w = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				j = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				D = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				N = s("./src/reddit/selectors/tags.ts"),
				B = s("./src/reddit/constants/colors.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				M = s("./node_modules/uuid/v4.js"),
				F = s.n(M),
				L = s("./src/reddit/components/ContentTooltip/index.tsx"),
				A = s("./src/reddit/icons/fonts/Info/index.tsx"),
				H = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/InfoTooltip/index.m.less"),
				K = s.n(H);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = Object(r.c)({
				activeTooltipId: k.a
			}), W = Object(i.b)(G, e => ({
				onHideTooltip: () => e(Object(l.i)()),
				onShowTooltip: t => e(Object(l.f)({
					tooltipId: t
				}))
			})), V = "inline-editing-topics-tooltip-", q = {
				top: B.b.alienblue,
				bottom: B.b.alienblue
			};
			class X extends o.a.Component {
				constructor(e) {
					super(e), this.onShowTooltip = () => {
						this.props.onShowTooltip(this.state.tooltipId)
					}, this.state = {
						tooltipId: ""
					}
				}
				makeUniqueTooltipId() {
					return `${V}${F()()}`
				}
				componentDidMount() {
					this.setState({
						tooltipId: this.makeUniqueTooltipId()
					})
				}
				tooltipIsOpen() {
					return this.state.tooltipId === this.props.activeTooltipId
				}
				render() {
					return o.a.createElement("span", {
						id: this.state.tooltipId,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.props.onHideTooltip
					}, o.a.createElement(A.a, {
						className: Object(a.a)(K.a.infoIcon, {
							[K.a.activeInfoIcon]: this.tooltipIsOpen()
						})
					}), o.a.createElement(L.a, {
						tooltipId: this.state.tooltipId,
						defaultTooltipPosition: "bottom",
						caretColor: q
					}, o.a.createElement("div", {
						className: K.a.container
					}, U._("Adding community topics allow people to find your community. Add a primary topic and sub topics to be discovered more easily.", null, {
						hk: "2PLIUO"
					}))))
				}
			}
			var J = W(X),
				Q = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				Y = s.n(Q);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = 4, $ = Object(r.c)({
				haveData: (e, {
					subredditId: t
				}) => Object(N.n)(e, {
					itemId: t
				}),
				hasPendingChanges: N.o,
				hasSecondaryTags: N.p,
				isInIcons2020: R.a,
				unsavedChangesModalIsOpen: Object(P.b)(E.a),
				isLoading: e => Object(N.E)(e),
				selectedPrimaryTag: N.A
			}), ee = Object(i.b)($, (e, {
				subredditId: t,
				context: s
			}) => ({
				onTopicsRequested: () => e(Object(d.k)(t, s)),
				onSaveRequested: () => e(Object(d.i)(t, s, !0)),
				resetSelection: () => e(Object(d.g)(t)),
				openUnsavedChangesModal: () => {
					e(Object(l.i)()), e(Object(c.h)(E.a))
				}
			})), te = {
				optionsListDropdownClassName: Y.a.optionsListDropdown,
				searchBarClassName: Y.a.searchBar
			};
			class se extends o.a.Component {
				constructor(e) {
					super(e), this.focusGrabber = o.a.createRef(), this.topicsEditorContainer = o.a.createRef(), this.isSaving = !1, this.onFocus = () => {
						this.setState({
							isEditing: !0
						}, () => {
							this.focusTopicsEditor()
						})
					}, this.onSuggestedOptionSelected = e => {
						this.state.isEditing ? this.onFocus() : this.onSave()
					}, this.onBlur = e => {
						this.isBlurringToChildOrContainer(e) || (this.props.hasPendingChanges ? this.isSaving || this.props.openUnsavedChangesModal() : this.setState({
							isEditing: !1
						}))
					}, this.onCancel = () => {
						this.setState({
							isEditing: !1
						}), this.props.resetSelection()
					}, this.onSave = () => {
						this.isSaving = !0, this.props.onSaveRequested(), this.setState({
							isEditing: !1
						})
					}, this.state = {
						isEditing: !1
					}
				}
				componentDidMount() {
					this.props.haveData || this.props.onTopicsRequested()
				}
				componentDidUpdate(e) {
					e.isLoading && !this.props.isLoading && this.isSaving && (this.isSaving = !1)
				}
				isBlurringToChildOrContainer(e) {
					return e.relatedTarget === this.topicsEditorContainer.current || this.topicsEditorContainer.current && this.topicsEditorContainer.current.contains(e.relatedTarget)
				}
				renderControlRow() {
					const {
						subredditId: e
					} = this.props;
					return o.a.createElement("div", {
						className: Y.a.controlRow
					}, o.a.createElement("span", {
						className: Y.a.numSelected
					}, o.a.createElement(h.a, {
						subredditId: e
					})), o.a.createElement("span", {
						className: Y.a.cancel,
						onClick: this.onCancel
					}, Z._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement("span", {
						className: Y.a.save,
						onClick: this.onSave
					}, Z._("Save", null, {
						hk: "1JNPXe"
					})))
				}
				renderEmptyState() {
					const {
						hasSecondaryTags: e,
						selectedPrimaryTag: t
					} = this.props;
					return t || e ? o.a.createElement("div", {
						tabIndex: -1,
						className: Y.a.emptyStateContainer,
						onFocus: this.onFocus,
						onClick: this.onFocus
					}, o.a.createElement(I, null)) : null
				}
				shouldRenderSecondaryTagEmptyState() {
					const {
						hasSecondaryTags: e,
						hasPendingChanges: t
					} = this.props, {
						isEditing: s
					} = this.state;
					return !s && !t && !e
				}
				renderTitle() {
					const {
						selectedPrimaryTag: e
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, !e && o.a.createElement("span", {
						className: Y.a.newBadge
					}, Z._("New", null, {
						hk: "3LXNw5"
					})), Z._("Community topics", null, {
						hk: "1wRqKt"
					}), o.a.createElement(J, null))
				}
				renderFocusGrabber() {
					return o.a.createElement("span", {
						ref: this.focusGrabber,
						tabIndex: -1
					})
				}
				focusTopicsEditor() {
					this.focusGrabber.current && this.focusGrabber.current.focus()
				}
				renderTopicsEditor() {
					const {
						isInIcons2020: e,
						subredditId: t
					} = this.props, {
						isEditing: s
					} = this.state;
					return o.a.createElement("div", {
						className: Object(a.a)(Y.a.inlineTopicsContainer, {
							[Y.a.inlineTopicsContainerEditing]: s
						}),
						tabIndex: -1,
						ref: this.topicsEditorContainer,
						onBlur: this.onBlur
					}, o.a.createElement(p.b, {
						context: j.a.idCard,
						subredditId: t,
						selectedOptionComponent: s ? v : C,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						childClassNames: te,
						readOnlyMode: s ? w.a.editable : w.a.focusableReadOnly,
						maxTopicsToDisplay: s ? void 0 : z
					}, !s && e ? o.a.createElement(D.a, {
						name: "edit"
					}) : o.a.createElement(_.a, {
						className: Y.a.pencil
					}), this.renderFocusGrabber()), s && this.renderControlRow())
				}
				renderPlaceholder() {
					return o.a.createElement("div", {
						className: Y.a.container
					}, o.a.createElement(O.a, null))
				}
				render() {
					const {
						context: e,
						haveData: t,
						subredditId: s,
						unsavedChangesModalIsOpen: n
					} = this.props;
					return t ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Y.a.container
					}, o.a.createElement("div", {
						className: Y.a.title
					}, this.renderTitle()), o.a.createElement(u.b, {
						subredditId: s,
						shouldShowTooltip: !0
					}), this.shouldRenderSecondaryTagEmptyState() ? this.renderEmptyState() : this.renderTopicsEditor(), o.a.createElement(m.a, {
						context: e,
						className: Object(a.a)(Y.a.relatedTopicsContainer, {
							[Y.a.relatedTopicsContainerEmptyState]: this.shouldRenderSecondaryTagEmptyState()
						}),
						subredditId: s,
						onOptionSelected: this.onSuggestedOptionSelected
					}, o.a.createElement("div", {
						className: Y.a.relatedTopicsCopy
					}, Z._("Related topics", null, {
						hk: "2Hw7ep"
					})))), n && o.a.createElement(E.b, {
						onCancel: this.onFocus,
						onSave: this.onSave,
						onDiscard: this.onCancel
					})) : this.renderPlaceholder()
				}
			}
			t.default = ee(se)
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
			var n = s("./node_modules/lodash/some.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/keycodes.ts"),
				d = s("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less"),
				l = s.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends r.a.Component {
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
						divRef: s,
						handleOnMouseEnter: n,
						handleOptionSelected: o,
						index: i,
						className: c,
						...d
					} = this.props;
					return r.a.createElement("div", p({
						className: Object(a.a)(l.a.availableOptionContainer, c)
					}, d, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: s
					}), e && r.a.createElement("span", {
						className: l.a.addText
					}, e, " "), t)
				}
			}
			class u extends r.a.Component {
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
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(c.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === c.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === c.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === c.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === c.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
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
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && s.push(l.a.lastFixedOption), r.a.createElement(h, {
							key: e.id,
							className: Object(a.a)(...s),
							index: t,
							handleOptionSelected: this.handleOptionSelectedByIndex,
							handleOnMouseEnter: this.setOptionActiveByIndex,
							divRef: t === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
							displayText: e.displayText
						})
					}), this.freeTextEntryActive() && r.a.createElement(h, {
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
			var m = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				b = s.n(O);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = e => {
					const {
						className: t,
						innerRef: s,
						onClickHandler: n,
						option: o,
						maxLength: i,
						...c
					} = e, d = [b.a.selectedOptionComponentContainer, t];
					return i && i < o.displayText.length && d.push(b.a.selectedOptionComponentContainerError), r.a.createElement("div", x({
						className: Object(a.a)(...d),
						ref: s
					}, c, {
						onClick: n
					}), o.displayText, r.a.createElement(m.a, {
						className: b.a.closeIcon
					}))
				},
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				T = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				y = s("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				S = s.n(y);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = 10,
				I = e => e.stopPropagation();
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== c.a.Delete && e.which !== c.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
					}, this.handleMouseEnterSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !0
						})
					}, this.handleMouseLeaveSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !1
						})
					}, this.onSearchBarFocus = e => {
						Object(T.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
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
					Object(T.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
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
					this.state.isHoveringOverSelectedOption || e.which !== c.a.Delete && e.which !== c.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(T.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || g,
						s = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return r.a.createElement("div", C({
						"aria-invalid": this.props.isError,
						className: Object(a.a)(this.props.className, S.a.optionSearchBarContainer, {
							[S.a.optionSearchBarError]: this.props.isError,
							[S.a.optionSearchBarReadOnly]: Object(T.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, n) => {
						if (!(s && n >= (this.props.maxOptionsToDisplay || 0))) return r.a.createElement(t, {
							tabIndex: 0,
							onFocus: I,
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
						className: S.a.optionsOverflowIndication
					}, `+${this.props.options.length-(this.props.maxOptionsToDisplay||0)}`), this.props.children, !Object(T.c)(this.props.readOnlyMode) && r.a.createElement("input", {
						className: Object(a.a)(S.a.input, {
							[S.a.hiddenInput]: Object(T.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && r.a.createElement(f.a, {
						className: S.a.loadingIcon,
						sizePx: v
					}), this.state.isFocused && r.a.createElement(u, {
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
			var w = s("./node_modules/reselect/es/index.js");
			const j = [],
				D = {};
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(w.a)(e => e.availableOptions || j, e => e.input, (e, t) => e.filter(e => {
						const s = e.displayText.toLowerCase(),
							n = t.toLowerCase();
						return 0 === s.indexOf(n) || o()(s.split(/[\s\/]+/), e => 0 === e.indexOf(n))
					})), this.onSearchBarFocus = () => {
						Object(T.c)(this.props.readOnlyMode) || this.state.searchBarIsFocused || (this.setState({
							searchBarIsFocused: !0
						}), this.props.onSearchBarFocus && this.props.onSearchBarFocus())
					}, this.onSearchBarBlur = e => {
						if (!Object(T.c)(this.props.readOnlyMode)) return e.relatedTarget && this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.matchesDOMElement(e.relatedTarget) ? (e.stopPropagation(), e.preventDefault(), void setTimeout(() => {
							this.optionSearchBarRef.current && this.optionSearchBarRef.current.focus()
						}, 0)) : (this.setState({
							searchBarIsFocused: !1
						}), void(this.props.onSearchBarBlur && this.props.onSearchBarBlur(e)))
					}, this.setInput = e => {
						Object(T.b)(this.props.readOnlyMode) || this.props.input !== e && this.props.onInputChanged(e)
					}, this.onOptionChanged = e => {
						this.onOptionsChanged([e])
					}, this.onOptionsChanged = e => {
						this.props.onOptionsChanged(e), o()(e, e => !!e.selected) && this.setInput("")
					}, this.onInputChanged = e => {
						Object(T.b)(this.props.readOnlyMode) || this.setInput(e.currentTarget.value)
					}, this.onKeyDown = e => {
						Object(T.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handleKeyPress(e)
					}, this.onPaste = e => {
						Object(T.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handlePaste(e)
					}, this.state = {
						searchBarIsFocused: !1
					}, this.optionsListDropdownRef = r.a.createRef(), this.optionSearchBarRef = r.a.createRef()
				}
				getSelectableOptions() {
					return this._selectableOptionsSelector(this.props)
				}
				render() {
					const {
						childClassNames: e = D
					} = this.props;
					return r.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, r.a.createElement(E, {
						className: e.searchBarClassName,
						dropdownClassName: e.optionsListDropdownClassName,
						isError: this.props.isError,
						readOnlyMode: this.props.readOnlyMode || T.a.editable,
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
			t.a = _
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/controls/DropdownSelector/index.m.less"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = o.a.createRef(), this.menuItems = o.a.createRef(), this.containerRef = o.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, s) => {
						const {
							onSelect: n
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), n(t), s && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							const s = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let n = 0; n < s.length; n++) e.relatedTarget === s[n] && (t = !0)
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
							const t = this.menuItems.current.getElementsByClassName(r.a.menuOption);
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
					const e = this.menuItems.current.getElementsByClassName(r.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: s
					} = this.props;
					return e.map((e, n) => o.a.createElement(d.b, {
						key: n + e.displayText,
						className: Object(a.a)(r.a.menuOption, {
							[r.a.topics]: s
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
						isCompactStyle: n,
						isTopicsStyle: i,
						menuItemsClassName: d,
						name: m,
						isSaving: O
					} = this.props, {
						isOpen: b
					} = this.state;
					return o.a.createElement(c.b.Consumer, null, ({
						[c.a.Icons]: x
					}) => o.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(a.a)(r.a.dropdownMenu, t, {
							[r.a.topics]: i
						})
					}, o.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(a.a)(e, r.a.selector, {
							[r.a.compact]: n
						}, {
							[r.a.topics]: i
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, o.a.createElement("span", {
						className: r.a.selectorContent,
						tabIndex: -1
					}, s), O ? o.a.createElement(l.a, {
						sizePx: 8,
						className: r.a.loadingIcon
					}) : x ? o.a.createElement(p.a, {
						name: "caret_down"
					}) : o.a.createElement(h.b, {
						className: r.a.caretDown
					})), o.a.createElement("div", {
						className: Object(a.a)(r.a.menuItems, d, {
							[r.a.topics]: i
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, b && this.getDropdownMenuItems())))
				}
			}
			t.b = m
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
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, s) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Info/index.m.less"),
				a = s.n(r);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", a.a);
			t.a = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditInlineEditing.13a25a12d0a9014ce9ed.js.map