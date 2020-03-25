// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.a8549d11e88f808ff1fc.js
// Retrieved at 3/25/2020, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				i = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : i(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const n = e => e;

			function i(e, t, s) {
				const [i, r] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: o = n
				} = t || {};
				let {
					start: d = 0,
					end: a = i
				} = t || {};
				if ((d = d < 0 ? 0 : d) >= (a = a > i ? i : a)) return;
				let c = r(d),
					l = o(c, d),
					u = d;
				for (let n = d + 1; n < a; n++) {
					const e = r(n),
						t = o(e, n);
					if (t !== l) {
						if (!1 === s(c, l, u, n)) return;
						l = t, u = n, c = e
					}
				}
				s(c, l, u, a)
			}
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/MultiredditSidebar/index.tsx"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/multireddit.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const u = Object(a.t)(),
				m = Object(o.c)({
					language: l.O,
					multireddit: c.a,
					subredditCategory: a.l
				}),
				p = Object(r.b)(m);
			t.default = u(p(e => i.a.createElement(d.a, e)))
		},
		"./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				headerButton: "_3aSsYcE4XPX93_RpWvd-4s"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = s.n(m),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.wrapped(l.b, "SubredditIcon", p.a),
				x = b.a.span("Label", p.a),
				g = Object(c.c)({
					subredditOrProfile: u.J
				});
			var f = Object(a.b)(g)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, r.a.createElement(r.a.Fragment, null, r.a.createElement(h, {
					subredditOrProfile: s
				}), r.a.createElement(x, null, s.displayText)))
			});
			var E = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: n
					} = e;
					const i = n.map(e => r.a.createElement(f, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return r.a.createElement("div", {
						className: s
					}, i)
				},
				S = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				y = s.n(S);
			s.d(t, "a", (function() {
				return w
			}));
			const O = b.a.div("CommunityCount", y.a),
				C = b.a.wrapped(E, "SubredditsOrProfiles", y.a),
				w = b.a.wrapped(o.a, "SidebarSubreddit", y.a),
				v = b.a.wrapped(o.a, "ModalSubreddit", y.a);
			var j;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(j || (j = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: i,
					subredditCategory: o = {
						name: n.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? w : v, c = s.length, l = t && s.length > 4;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(O, null, n.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [n.fbt._plural(c, "number"), n.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), c > 0 && r.a.createElement(C, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => r.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), c > 0 && l && r.a.createElement(d.n, {
					onClick: i
				}, n.fbt._("See more", null, {
					hk: "1trUgh"
				})))
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				sidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				ModalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				modalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				SidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				sidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				SidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				sidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				SidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				sidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				Attributon: "htg8GP8UyboUgLmuSYKen",
				attributon: "htg8GP8UyboUgLmuSYKen",
				FadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				fadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				shouldFade: "_2ONS322IFK1Sw2jAj3dZqW",
				Component: "_20vfWUdM54Wu07ZOfKYP8o",
				component: "_20vfWUdM54Wu07ZOfKYP8o"
			}
		},
		"./src/reddit/components/MultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				noSubredditsText: "EOCYiZiqAa39tAXUCAqmZ"
			}
		},
		"./src/reddit/components/MultiredditManageWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetContainer: "Md-M9lk_Fnyiovos-cWPZ",
				bubbleSelector: "_32QbfsW2hwOWwyV4hZJqEG",
				error: "s0AzWPiC_eJAnSdDAZPym",
				searchIcon: "_1wfVsnvMUNUkrQpFx5I6O9",
				bubble: "_3NfN8QVLJTyC1hzOZDqDa_",
				selected: "_3Mgq2YpcfG6lx6UTEtbSUX",
				bubbleIcon: "_3kWMG0X0DIgmFR4pMIpuWf",
				text: "_1boSpw2RVthfLh9y4Ln0H2",
				isEmpty: "lsui73aPZobEl_lU01DBf",
				closeIcon: "_1FGYwDvXjw09vL1EUCOelw",
				input: "_2LQWhKcfsIjm5PCEiFbnfv",
				emptyText: "Uqpbu2QyTc_VF5yeJOo0U",
				addButton: "_7aZcaB7RRfblay2Mpw4PJ",
				dropdown: "rUguk2cMQS0qUTWqZTUfE",
				expandButton: "_31vaGAnztsBt2uSP6kVo6D",
				expandButtonContainer: "_2b-PrKZyTcbtQSMmFYdZ3Z"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				detailsContainer: "_2o2cN1Q1R544f7UCxJHRTH",
				modalContainer: "_2qY6j7wtHkEaoEG4g5F53z",
				closeBtn: "_3NmSyduxNX74yaC9kmkYgh",
				modalMain: "_1hG7UoCi1oRW1UnsvoewhT",
				placeholder: "_1wCkMb-wQyvSVuqZWNjIEZ"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/times.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				g = s("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				f = s.n(g);
			var E = Object(d.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: s
					} = e, n = t.filter(e => !e.isSubscribed);
					return n.length ? o.a.createElement(b.b, {
						className: f.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(h.b, {
						displayText: Object(x.c)("Join all communities"),
						onClick: () => s(n)
					})) : null
				}),
				S = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				C = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				w = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/selectors/multireddit.ts"),
				j = s("./src/reddit/components/MultiredditInfo/index.m.less"),
				I = s.n(j);
			const M = Object(a.c)({
					communities: (e, t) => Object(v.b)(e, t.multireddit)
				}),
				_ = Object(d.b)(M),
				P = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(O.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: t.sendEvent,
						type: t.type
					})
				};
			var D = Object(y.c)(_(e => {
					const {
						communities: t,
						titleText: s
					} = e;
					return t.length ? o.a.createElement(S.a, {
						items: t,
						minimizedLength: 5,
						title: s,
						headerButton: o.a.createElement(E, {
							communities: t
						}),
						renderItem: P
					}) : o.a.createElement(C.a, {
						title: s
					}, o.a.createElement("div", {
						className: I.a.noSubredditsText
					}, o.a.createElement(w.c, null, "This custom feed does not yet contain any communities.")))
				})),
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/higherOrderComponents/sizeMe.tsx"),
				T = s("./src/lib/timeAgo/index.ts"),
				R = s("./src/reddit/components/Flair/index.tsx"),
				L = s("./src/reddit/components/RawHTMLDisplay/Listing.tsx"),
				F = s("./src/reddit/constants/posts.ts"),
				B = s("./src/reddit/controls/Button/index.tsx"),
				U = s("./src/reddit/models/Multireddit/index.ts"),
				A = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				W = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				H = s.n(W),
				q = s("./src/lib/lessComponent.tsx");
			const z = q.a.div("SidebarTopSpacer", H.a),
				G = q.a.div("ModalTopSpacer", H.a),
				V = q.a.div("SidebarTitleContainer", H.a),
				K = q.a.div("SidebarTitle", H.a),
				Q = q.a.wrapped(R.a, "SidebarFlair", H.a),
				Z = q.a.div("Attributon", H.a),
				Y = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement(L.a, {
						className: s,
						html: t
					})
				},
				X = Object(N.a)(e => {
					let {
						children: t,
						onSeeMoreDetails: s,
						size: n
					} = e;
					const i = !n || "number" != typeof n.height || n.height > 152;
					return o.a.createElement("div", null, o.a.createElement(Y, {
						className: Object(u.a)(H.a.FadingDescription, {
							[H.a.shouldFade]: i
						})
					}, t), i && o.a.createElement(B.n, {
						onClick: s
					}, k.fbt._("Read more", null, {
						hk: "i0AXN"
					})))
				});
			var J;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(J || (J = {}));
			var $ = e => {
					const {
						mode: t,
						multireddit: s,
						onSeeMoreDetails: n,
						subredditCategory: i
					} = e, r = t === J.Sidebar, [d, a] = r ? [z, Z] : [G, Z], c = Object(U.f)(s) ? () => o.a.createElement(d, null, r && o.a.createElement(V, null, o.a.createElement(K, null, s.displayText), s.visibility === U.e.Private && o.a.createElement(Q, {
						text: k.fbt._("Private", null, {
							hk: "4Av1zq"
						})
					}), s.visibility === U.e.Hidden && o.a.createElement(Q, {
						text: k.fbt._("Hidden", null, {
							hk: "4tUfi0"
						})
					})), o.a.createElement(a, null, k.fbt._("Curated by u/ {username}", [k.fbt._param("username", Object(U.i)(s.url))], {
						hk: "1AxWQt"
					}), "· ", Object(T.f)(s.created))) : () => null, l = Object(U.f)(s) && s.description ? () => o.a.createElement(d, null, r ? o.a.createElement(X, {
						onSeeMoreDetails: n
					}, s.description) : o.a.createElement(L.a, {
						html: s.description
					})) : () => null, m = [...s.subredditIds && s.subredditIds.map(e => ({
						id: e,
						type: F.a.SUBREDDIT
					})) || [], ...s.profileIds && s.profileIds.map(e => ({
						id: e,
						type: F.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: Object(u.a)(H.a.Component, e.className)
					}, c(), l(), o.a.createElement(A.b, {
						isSidebar: r,
						onSeeMoreDetails: n,
						subredditCategory: i,
						subredditsOrProfilesIds: m
					}))
				},
				ee = s("./node_modules/lodash/debounce.js"),
				te = s.n(ee),
				se = s("./node_modules/lodash/noop.js"),
				ne = s.n(se),
				ie = s("./src/lib/constants/index.ts"),
				re = s("./src/reddit/actions/multireddit/index.ts"),
				oe = s("./src/reddit/actions/subredditAutocomplete.ts"),
				de = s("./src/reddit/actions/toaster.ts"),
				ae = s("./src/reddit/constants/keycodes.ts"),
				ce = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				le = s("./src/reddit/helpers/name/index.ts"),
				ue = s("./src/reddit/icons/svgs/Close/index.tsx"),
				me = s("./src/reddit/icons/svgs/Search/index.tsx"),
				pe = s("./src/reddit/models/Toast/index.ts"),
				be = s("./src/reddit/models/Widgets/index.ts"),
				he = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				xe = s("./src/reddit/selectors/subredditAutocomplete.ts"),
				ge = s("./src/reddit/selectors/user.ts");
			const fe = Object(a.c)({
				isAutocompletePending: xe.c,
				items: xe.e,
				language: ge.O
			});
			class Ee extends o.a.Component {
				constructor() {
					super(...arguments), this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntrySelect = e => {
						this.props.onEntrySelect(this.props.items[e])
					}, this.onEntryFocus = e => {
						this.props.onEntryFocus(this.props.items[e], e)
					}
				}
				render() {
					const {
						className: e,
						focusedIndex: t,
						items: s,
						isAutocompletePending: n,
						language: i
					} = this.props;
					return o.a.createElement(he.a, {
						className: e,
						focusedIndex: t,
						items: s,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !n && 0 === s.length,
						language: i,
						isValid: !0
					})
				}
			}
			var Se = Object(d.b)(fe)(Ee),
				ye = s("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				Oe = s.n(ye);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const we = 12,
				ve = 5,
				je = 500,
				Ie = Object(a.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(v.b)(e, s)
					},
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				Me = Object(d.b)(Ie, (e, t) => {
					let {
						multireddit: s
					} = t;
					return {
						addSubredditRequested: (t, n) => {
							const i = n ? Object(be.g)(n) : void 0;
							e(Object(re.a)({
								communityInfo: i,
								identifier: t,
								multiredditNames: [s.name]
							}))
						},
						errorToast: t => e(Object(de.e)({
							text: t,
							kind: pe.b.Error
						})),
						removeSubredditRequested: t => {
							let {
								id: n,
								name: i,
								type: r
							} = t;
							return n && e(Object(re.i)({
								id: n,
								multiredditName: s.name,
								name: i,
								type: r
							}))
						},
						subredditAutocompleteRequested: t => e(Object(oe.d)(t, s.isNSFW))
					}
				}),
				_e = {
					choice: null,
					focusedIndex: -1,
					focusedItem: null,
					isAddError: null,
					isChoiceSelected: !1,
					isDropdownOpen: !1,
					isListExpanded: !1,
					memoizedShortList: [],
					query: ""
				};
			class Pe extends o.a.Component {
				constructor(e) {
					super(e), this.onRemoveClickedFnCache = {}, this.closeDropdown = () => {
						this.setState({
							isDropdownOpen: !1,
							focusedIndex: -1
						})
					}, this.onChange = e => {
						this.state.choice || (this.setState({
							isAddError: null,
							isDropdownOpen: e.target.value.trim().length > 0,
							query: e.target.value.trim()
						}), this.onQueryUpdated())
					}, this.onBlur = () => {
						this.closeDropdown()
					}, this.onFocus = () => {
						this.setState(e => e.query && !e.isDropdownOpen ? {
							isDropdownOpen: !0
						} : null)
					}, this.onKeydown = e => {
						this.state.choice ? this.state.choice && (e.which === ae.a.ArrowLeft ? this.onChoiceSelected() : this.state.isChoiceSelected ? e.which === ae.a.Backspace ? this.setState({
							choice: null
						}) : e.which === ae.a.ArrowRight && this.onChoiceDeselected() : e.which !== ae.a.Backspace || this.state.query.length || this.onChoiceSelected(), e.which === ae.a.Enter && this.onSubmit()) : this.state.isDropdownOpen ? e.which === ae.a.ArrowDown ? (this.setState({
							focusedIndex: this.state.focusedIndex + 1
						}), e.stopPropagation()) : e.which === ae.a.ArrowUp ? (this.setState({
							focusedIndex: this.state.focusedIndex - 1
						}), e.stopPropagation()) : e.which === ae.a.Escape ? (this.closeDropdown(), e.stopPropagation()) : e.which === ae.a.Enter && (this.state.focusedItem ? this.onDropdownItemSelect(this.state.focusedItem) : -1 === this.state.focusedIndex && this.onSubmit()) : e.which === ae.a.Enter && this.onSubmit()
					}, this.onQueryUpdated = () => {
						this.props.subredditAutocompleteRequested(this.state.query)
					}, this.onDropdownItemSelect = e => {
						this.setState(Object.assign({}, _e, {
							choice: e,
							isListExpanded: this.state.isListExpanded,
							memoizedShortList: this.state.memoizedShortList
						}))
					}, this.onDropdownItemFocus = (e, t) => {
						this.setState({
							focusedItem: e,
							focusedIndex: t
						})
					}, this.onChoiceSelected = () => this.setState({
						isChoiceSelected: !0
					}), this.onChoiceDeselected = () => this.setState({
						isChoiceSelected: !1
					}), this.onChoiceRemoved = () => this.setState({
						choice: null
					}), this.onSubmit = () => {
						if (!this.props.addSubredditPending)
							if (this.state.choice) this.props.addSubredditRequested({
								name: this.state.choice.name,
								type: "subreddit"
							}, this.state.choice), this.setState({
								isDropdownOpen: !1
							});
							else {
								const {
									query: e
								} = this.state;
								if (e.length) {
									const t = Object(le.g)(e),
										s = t.startsWith(ie.Tb) ? "profile" : "subreddit",
										n = "profile" === s ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: n,
										type: s
									})
								}
							}
					}, this.getOnRemoveClickedFn = e => {
						const t = "".concat(e.id || "", ".").concat(e.name);
						return this.onRemoveClickedFnCache[t] ? this.onRemoveClickedFnCache[t] : (this.onRemoveClickedFnCache[t] = () => {
							this.props.removeSubredditRequested(e)
						}, this.onRemoveClickedFnCache[t])
					}, this.onToggleExpand = () => this.setState({
						isListExpanded: !this.state.isListExpanded
					}), this.state = Object.assign({}, _e, {
						memoizedShortList: e.communityInformations.slice(0, ve)
					}), this.onQueryUpdated = te()(this.onQueryUpdated, je)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(_e)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, ve)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: s,
							removePending: n
						},
						state: {
							choice: i,
							focusedIndex: r,
							isAddError: d,
							isChoiceSelected: a,
							isDropdownOpen: c,
							isListExpanded: l,
							memoizedShortList: m,
							query: p
						}
					} = this;
					return o.a.createElement(C.a, {
						className: Oe.a.widgetContainer,
						headerButton: o.a.createElement(E, {
							communities: t
						}),
						title: Object(x.c)("manage communities")
					}, o.a.createElement("div", {
						className: Object(u.a)(Oe.a.bubbleSelector, {
							[Oe.a.error]: !!d
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, i ? o.a.createElement("div", {
						className: Object(u.a)(Oe.a.bubble, {
							[Oe.a.selected]: a
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, o.a.createElement("img", {
						src: i.iconUrl,
						className: Oe.a.bubbleIcon
					}), o.a.createElement("span", {
						className: Oe.a.text
					}, "r/".concat(i.name)), o.a.createElement(ue.a, {
						className: Oe.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : o.a.createElement(me.a, {
						className: Oe.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(u.a)(Oe.a.input, {
							[Oe.a.isEmpty]: !!i
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: p
					}), !d && (i || p.length > 0) && (e ? o.a.createElement(ce.a, {
						sizePx: we
					}) : o.a.createElement(B.n, {
						className: Oe.a.addButton,
						onClick: this.onSubmit
					}, Object(x.c)("Add"))), c && o.a.createElement(Se, {
						className: Oe.a.dropdown,
						focusedIndex: r,
						multireddit: s,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: p
					})), 0 === t.length ? o.a.createElement("p", {
						className: Oe.a.emptyText
					}, Object(x.c)("Try adding some communities to your custom feed!")) : (l ? t : m).map(e => o.a.createElement(O.a, Ce({}, e, {
						buttonDisabled: !!n,
						key: e.id,
						isLoading: n === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: Object(x.c)("Remove"),
						useTertiaryButton: !0
					}))), t.length > ve && o.a.createElement("div", {
						className: Oe.a.expandButtonContainer
					}, o.a.createElement(B.n, {
						className: Oe.a.expandButton,
						onClick: this.onToggleExpand
					}, l ? Object(x.c)("show less") : Object(x.c)("show more"))))
				}
			}
			var De = Me(Pe),
				ke = s("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Ne = s.n(ke);
			const Te = 5,
				Re = Object(a.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: v.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class Le extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						memoizedRecommendations: this.props.recommendations,
						recommendationsToExclude: []
					}, this.onRecommendationsRefreshClicked = () => {
						this.setState(e => ({
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, Te).map(e => e.name)]
						}), () => this.props.recommendationsRefreshed(this.state.recommendationsToExclude))
					}
				}
				componentDidUpdate(e) {
					this.props.recommendations !== e.recommendations && this.setState({
						memoizedRecommendations: this.props.recommendations
					}), !this.props.addSubredditPending && e.addSubredditPending && this.setState(t => ({
						recommendationsToExclude: [...t.recommendationsToExclude, ...e.addSubredditPending ? [e.addSubredditPending] : []],
						memoizedRecommendations: t.memoizedRecommendations.filter(t => t.name !== e.addSubredditPending)
					}), () => {
						this.state.memoizedRecommendations.length < Te && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: s,
							recommendationsError: n,
							recommendationsPending: i
						},
						state: {
							memoizedRecommendations: r
						}
					} = this;
					return o.a.createElement(O.b, {
						bottomButtonText: Object(x.c)("refresh"),
						className: Ne.a.container,
						communities: r.slice(0, Te),
						errorMsg: Object(x.c)("Couldn't find any recommendations. Try adding more communities first!"),
						isError: !s.length || !!n,
						isLoading: i,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: Object(x.c)("add"),
						title: Object(x.c)("People also added"),
						useTertiaryButton: !0
					})
				}
			}
			var Fe = Object(d.b)(Re, (e, t) => ({
					addSubredditRequested: s => {
						Object(U.f)(t.multireddit) && e(Object(re.a)({
							identifier: {
								name: s.name,
								type: s.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: s
						}))
					},
					recommendationsRefreshed: s => {
						Object(U.f)(t.multireddit) && e(Object(re.h)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: s
						}))
					}
				}))(Le),
				Be = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ue = s("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = s.n(Ue),
				We = q.a.div("Component", Ae.a),
				He = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				qe = s("./src/reddit/constants/zIndex.ts"),
				ze = s("./src/reddit/controls/TextButton/index.tsx"),
				Ge = s("./src/reddit/helpers/trackers/idCard.ts"),
				Ve = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Ke = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Qe = s("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Ze = s.n(Qe);

			function Ye() {
				return (Ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Xe = Object(l.a)(e => o.a.createElement(m.c, {
					className: Ze.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(m.g, null, o.a.createElement(Ve.a, null, o.a.createElement(m.n, null, e.multireddit.displayText), o.a.createElement(ze.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))), o.a.createElement(m.j, null, o.a.createElement($, {
					mode: J.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(ze.a, {
					className: Ze.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))),
				Je = e => o.a.createElement(Xe, Ye({}, e, {
					overlayCustomStyles: {
						zIndex: qe.b
					},
					withOverlay: !0
				})),
				$e = () => o.a.createElement(C.a, null, i()(5, e => o.a.createElement("div", {
					className: Object(u.a)(Ze.a.placeholder, Object(Ke.a)({
						isLoading: !0
					})),
					key: e
				}))),
				et = e => Object(U.f)(e.multireddit) ? Object(U.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(De, {
					multireddit: e.multireddit
				}) : o.a.createElement(D, {
					multireddit: e.multireddit,
					titleText: Object(x.c)("Communities in this custom feed")
				}) : o.a.createElement($e, null) : o.a.createElement("div", {
					className: Ze.a.detailsContainer
				}, o.a.createElement(We, null, e.subredditCategory ? e.subredditCategory.name : Object(c.a)(e.language, "multireddit.sidebar.details")), o.a.createElement($, {
					mode: J.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				tt = Object(a.c)({
					isCurrentUserMultiredditOwner: (e, t) => {
						let {
							multireddit: s
						} = t;
						return Object(U.f)(s) && Object(v.c)(e, s.url)
					},
					language: (e, t) => {
						let {
							language: s
						} = t;
						return s || Object(ge.O)(e)
					}
				}),
				st = Object(d.b)(tt, (e, t) => {
					let {
						subredditCategory: s
					} = t;
					return {
						trackSeeMoreClicked: () => e((e, t) => Ge.a(t())),
						trackSubredditClicked: t => {
							if (!s) return;
							const n = Object(be.i)(t);
							e((e, t) => Ge.b(t(), n, s.name))
						}
					}
				});
			class nt extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showModal: !1
					}, this.closeModal = () => this.setState({
						showModal: !1
					}), this.openModal = () => this.setState({
						showModal: !0
					}, this.props.subredditCategory ? this.props.trackSeeMoreClicked : void 0)
				}
				render() {
					const {
						className: e,
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: n,
						multiUsername: i,
						subredditCategory: r
					} = this.props, d = t && n.subredditIds && n.subredditIds.length > 0;
					return o.a.createElement(Be.a, {
						className: e
					}, o.a.createElement(et, {
						isCurrentUserMultiredditOwner: t,
						language: s,
						multireddit: n,
						subredditCategory: r,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement(Je, {
						language: s,
						multireddit: n,
						subredditCategory: r,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!r
					}) : null, d && o.a.createElement(Fe, {
						multireddit: n,
						multiUsername: i
					}), o.a.createElement(He.a, null))
				}
			}
			t.a = st(nt)
		},
		"./src/reddit/components/MultiredditSuggestionsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3jG8aJCgqOrmMUbRMiakpX"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(x);
			const f = a.a.wrapped(m.a, "_Dropdown", g.a),
				E = Object(u.a)(f),
				S = a.a.button("MenuButton", g.a),
				y = a.a.wrapped(b.a, "MenuIcon", g.a),
				O = a.a.wrapped(p.b, "DropdownRow", g.a),
				C = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				w = Object(r.b)(C, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(c.h)({
							tooltipId: s
						}))
					}
				}),
				v = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => i.a.createElement(S, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(l.c)("more options"),
				className: Object(d.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: v(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(y, null), i.a.createElement(E, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/RawHTMLDisplay/Listing.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => i.a.createElement(d.a, a({
				style: {
					color: Object(o.a)(e).post
				}
			}, e)))
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/take.js"),
				r = s.n(i),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				b = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				h = s.n(b),
				x = s("./src/lib/lessComponent.tsx");
			const g = 10,
				f = x.a.wrapped(l.n, "TertiaryButton", h.a);
			class E extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s,
							pending: i
						} = this.props, r = !e || t && s ? n.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : n.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return d.a.createElement(f, {
							onClick: this.onButtonClick
						}, i ? d.a.createElement(u.a, {
							sizePx: g
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: n,
						minimizedLength: i,
						renderItem: o,
						title: a
					} = this.props, {
						expanded: l
					} = this.state, u = n.length > i || t, b = (!u || l ? n : r()(n, i)).map(e => o({
						item: e
					}));
					return d.a.createElement(c.a, {
						className: e,
						headerButton: s,
						title: a
					}, b, d.a.createElement(m.a, null, d.a.createElement(p.a, null, u && this.renderToggleButton())))
				}
			}
			E.defaultProps = {
				minimizedLength: a.Fb
			}, t.a = E
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, s) {
			e.exports = {
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV",
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, s) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, s) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				d = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts");
			const c = {
				leading: !0,
				trailing: !1
			};
			var l = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c;
					const i = Object.assign({}, c, n),
						r = t > e ? 1 : -1;
					let o = e;
					if (e !== t) {
						for (i.leading || (o += r); o !== t;) s(o), o += r;
						i.trailing && s(o)
					} else(i.leading || i.trailing) && s(e)
				},
				u = s("./src/lib/forEachGroup/index.ts"),
				m = s("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				b = s.n(p);
			class h extends r.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return o.a.createElement("div", {
						className: Object(a.a)(b.a.entry, this.props.disabled && b.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			s("./node_modules/core-js/modules/es6.symbol.js");
			var x = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				g = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				},
				S = e => {
					var {
						className: t,
						children: s,
						title: n
					} = e, i = E(e, ["className", "children", "title"]);
					return o.a.createElement("div", f({
						className: Object(a.a)(g.a.dropdownSection, t)
					}, i), n && o.a.createElement("div", {
						className: g.a.title
					}, n), s)
				},
				y = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/lib/lessComponent.tsx"),
				C = s("./src/reddit/components/SubredditIcon/index.tsx"),
				w = s("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				v = s("./src/reddit/icons/svgs/Link/index.tsx"),
				j = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				I = s("./src/reddit/icons/svgs/Video/index.tsx"),
				M = s("./src/reddit/layout/row/Inline/index.tsx"),
				_ = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				P = s.n(_);
			const D = [{
				type: "text",
				Icon: j.a
			}, {
				type: "images",
				Icon: w.a
			}, {
				type: "videos",
				Icon: I.a
			}, {
				type: "links",
				Icon: v.a
			}];
			var k = e => {
					const {
						allowedPostTypes: t,
						className: s
					} = e;
					return o.a.createElement(M.a, {
						className: Object(a.a)(P.a.rowStyle, s)
					}, D.map(e => {
						let {
							type: s,
							Icon: n
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(P.a.iconWrapper, {
								[P.a.mDisabled]: !t[s]
							})
						}, o.a.createElement(n, null))
					}))
				},
				N = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				T = s.n(N);
			const R = O.a.wrapped(C.b, "subredditIcon", T.a);
			var L = e => {
					const {
						highlight: t,
						icon: s,
						title: n,
						secondaryText: i,
						item: r
					} = e, {
						allowedPostTypes: d
					} = r;
					return o.a.createElement("div", {
						className: Object(a.a)(T.a.container, {
							[T.a.mHighlight]: t
						})
					}, s, o.a.createElement("div", {
						className: T.a.main
					}, o.a.createElement("span", {
						className: T.a.title
					}, n), i && o.a.createElement("span", {
						className: T.a.secondary
					}, i)), t && d && o.a.createElement(k, {
						allowedPostTypes: d
					}))
				},
				F = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				B = s.n(F);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(d.c)("listings.subscribers");
			var W = e => {
				const {
					language: t,
					item: {
						name: s,
						iconUrl: n,
						subscribers: i
					}
				} = e, r = Object(y.c)(s), d = void 0 !== i ? A(t, i) : void 0, a = o.a.createElement(R, {
					className: B.a.profileIcon,
					iconUrl: n
				});
				return o.a.createElement(L, U({
					icon: a,
					title: r,
					secondaryText: d
				}, e))
			};

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(d.c)("listings.subscribers");
			var z = e => {
					const {
						language: t,
						item: {
							primaryColor: s,
							iconUrl: n,
							name: i,
							subscribers: r
						}
					} = e, d = Object(y.b)(i), a = void 0 !== r ? q(t, r) : void 0, c = o.a.createElement(R, {
						iconUrl: n,
						primaryColor: s,
						redditStyle: !0
					});
					return o.a.createElement(L, H({
						icon: c,
						title: d,
						secondaryText: a
					}, e))
				},
				G = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				V = s.n(G);
			const K = Object(d.d)("subredditPicker.noCommunitiesFound"),
				Q = {
					[m.a.OWN_PROFILE]: Object(d.d)("subredditPicker.sectionOwnProfile"),
					[m.a.SUBSCRIBED_TO_SUBREDDIT]: Object(d.d)("subredditPicker.sectionSubscriptions"),
					[m.a.OTHER_SUBREDDIT]: Object(d.d)("subredditPicker.sectionOthers"),
					[m.a.MODERATED_SUBREDDIT]: Object(d.d)("subredditPicker.sectionModeratedSubreddits")
				};
			t.a = class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = i()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case m.a.OWN_PROFILE:
							return W;
						default:
							return z
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						language: s
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(o.a.createElement(S, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: V.a.noMatches
					}, s && K(s)))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (i, r, d, a) => {
						const c = [];
						l(d, a, n => {
							const i = t[n],
								r = n === e,
								d = this.getEntryContentComponent(i.type, i.name);
							d && c.push(o.a.createElement(h, {
								entryIndex: n,
								disabled: i.disabled,
								key: i.id || i.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(d, {
								language: s,
								highlight: r,
								item: i
							})))
						});
						const u = Q[r];
						n.push(o.a.createElement(S, {
							key: r,
							title: u && u(s),
							children: c
						}))
					}), o.a.createElement("div", {
						className: Object(a.a)(V.a.container, this.props.className, {
							[V.a.mIsValid]: this.props.isValid,
							[V.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/reddit/selectors/widgets.ts"),
				o = s("./src/telemetry/index.ts");
			const d = e => {
					Object(o.a)(Object.assign({}, i.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				a = (e, t, s) => {
					const {
						subreddit: d,
						profile: a
					} = Object(r.b)(e, t);
					Object(o.a)(Object.assign({}, i.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: a,
						source: "id_card",
						subreddit: Object.assign({}, d, {
							categoryName: s
						})
					}))
				},
				c = e => t => ({
					action: n.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: i.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				d = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(d.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				d = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(d.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", {
				transform: "translate(3, 4)"
			}, i.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(i);
			t.a = n.a.div("rightAligned", r.a)
		}
	}
]);
//# sourceMappingURL=reddit-components-AdHocMultiredditSidebar.a8549d11e88f808ff1fc.js.map