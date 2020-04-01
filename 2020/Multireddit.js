// https://www.redditstatic.com/desktop2x/Multireddit.24df197e8392c14591f9.js
// Retrieved at 4/1/2020, 7:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/lib/forEachGroup/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			const s = e => e;

			function i(e, t, n) {
				const [i, r] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: o = s
				} = t || {};
				let {
					start: d = 0,
					end: a = i
				} = t || {};
				if ((d = d < 0 ? 0 : d) >= (a = a > i ? i : a)) return;
				let c = r(d),
					l = o(c, d),
					m = d;
				for (let s = d + 1; s < a; s++) {
					const e = r(s),
						t = o(e, s);
					if (t !== l) {
						if (!1 === n(c, l, m, s)) return;
						l = t, m = s, c = e
					}
				}
				n(c, l, m, a)
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(d.c, null, r.a.createElement(d.g, null, r.a.createElement(c.a, null, r.a.createElement(d.n, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(a.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(d.b, null)))), r.a.createElement(d.j, null, r.a.createElement(d.m, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(d.e, null, r.a.createElement(d.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "3DgVq6"
			})), r.a.createElement(d.r, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				headerButton: "_3aSsYcE4XPX93_RpWvd-4s"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, n) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = n.n(u),
				b = n("./src/lib/lessComponent.tsx");
			const h = b.a.wrapped(l.b, "SubredditIcon", p.a),
				x = b.a.span("Label", p.a),
				g = Object(c.c)({
					subredditOrProfile: m.J
				});
			var E = Object(a.b)(g)(e => {
				let {
					children: t,
					subredditOrProfile: n
				} = e;
				return t(n, r.a.createElement(r.a.Fragment, null, r.a.createElement(h, {
					subredditOrProfile: n
				}), r.a.createElement(x, null, n.displayText)))
			});
			var O = e => {
					let {
						children: t,
						className: n,
						subredditsOrProfilesIds: s
					} = e;
					const i = s.map(e => r.a.createElement(E, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return r.a.createElement("div", {
						className: n
					}, i)
				},
				f = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				y = n.n(f);
			n.d(t, "a", (function() {
				return w
			}));
			const C = b.a.div("CommunityCount", y.a),
				v = b.a.wrapped(O, "SubredditsOrProfiles", y.a),
				w = b.a.wrapped(o.a, "SidebarSubreddit", y.a),
				j = b.a.wrapped(o.a, "ModalSubreddit", y.a);
			var S;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(S || (S = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: n,
					onSeeMoreDetails: i,
					subredditCategory: o = {
						name: s.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? w : j, c = n.length, l = t && n.length > 4;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(C, null, s.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [s.fbt._plural(c, "number"), s.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), c > 0 && r.a.createElement(v, {
					subredditsOrProfilesIds: t ? n.slice(0, 4) : n
				}, (t, n) => r.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, n)), c > 0 && l && r.a.createElement(d.n, {
					onClick: i
				}, s.fbt._("See more", null, {
					hk: "1trUgh"
				})))
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiredditInfo/index.m.less": function(e, t, n) {
			e.exports = {
				noSubredditsText: "EOCYiZiqAa39tAXUCAqmZ"
			}
		},
		"./src/reddit/components/MultiredditManageWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				detailsContainer: "_2o2cN1Q1R544f7UCxJHRTH",
				modalContainer: "_2qY6j7wtHkEaoEG4g5F53z",
				closeBtn: "_3NmSyduxNX74yaC9kmkYgh",
				modalMain: "_1hG7UoCi1oRW1UnsvoewhT",
				placeholder: "_1wCkMb-wQyvSVuqZWNjIEZ"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/times.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/components/OverflowMenu/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/i18n/utils.ts"),
				g = n("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				E = n.n(g);
			var O = Object(d.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: n
					} = e, s = t.filter(e => !e.isSubscribed);
					return s.length ? o.a.createElement(b.b, {
						className: E.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(h.b, {
						displayText: Object(x.c)("Join all communities"),
						onClick: () => n(s)
					})) : null
				}),
				f = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				y = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				v = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				w = n("./src/reddit/i18n/components.tsx"),
				j = n("./src/reddit/selectors/multireddit.ts"),
				S = n("./src/reddit/components/MultiredditInfo/index.m.less"),
				_ = n.n(S);
			const I = Object(a.c)({
					communities: (e, t) => Object(j.b)(e, t.multireddit)
				}),
				M = Object(d.b)(I),
				N = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(C.a, {
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
			var T = Object(y.c)(M(e => {
					const {
						communities: t,
						titleText: n
					} = e;
					return t.length ? o.a.createElement(f.a, {
						items: t,
						minimizedLength: 5,
						title: n,
						headerButton: o.a.createElement(O, {
							communities: t
						}),
						renderItem: N
					}) : o.a.createElement(v.a, {
						title: n
					}, o.a.createElement("div", {
						className: _.a.noSubredditsText
					}, o.a.createElement(w.c, null, "This custom feed does not yet contain any communities.")))
				})),
				P = n("./node_modules/fbt/lib/FbtPublic.js"),
				D = n("./src/higherOrderComponents/sizeMe.tsx"),
				k = n("./src/lib/timeAgo/index.ts"),
				L = n("./src/reddit/components/Flair/index.tsx"),
				F = n("./src/reddit/components/RawHTMLDisplay/Listing.tsx"),
				B = n("./src/reddit/constants/posts.ts"),
				R = n("./src/reddit/controls/Button/index.tsx"),
				U = n("./src/reddit/models/Multireddit/index.ts"),
				A = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				H = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				W = n.n(H),
				z = n("./src/lib/lessComponent.tsx");
			const G = z.a.div("SidebarTopSpacer", W.a),
				V = z.a.div("ModalTopSpacer", W.a),
				q = z.a.div("SidebarTitleContainer", W.a),
				K = z.a.div("SidebarTitle", W.a),
				X = z.a.wrapped(L.a, "SidebarFlair", W.a),
				Z = z.a.div("Attributon", W.a),
				Q = e => {
					let {
						children: t,
						className: n
					} = e;
					return o.a.createElement(F.a, {
						className: n,
						html: t
					})
				},
				Y = Object(D.a)(e => {
					let {
						children: t,
						onSeeMoreDetails: n,
						size: s
					} = e;
					const i = !s || "number" != typeof s.height || s.height > 152;
					return o.a.createElement("div", null, o.a.createElement(Q, {
						className: Object(m.a)(W.a.FadingDescription, {
							[W.a.shouldFade]: i
						})
					}, t), i && o.a.createElement(R.n, {
						onClick: n
					}, P.fbt._("Read more", null, {
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
						multireddit: n,
						onSeeMoreDetails: s,
						subredditCategory: i
					} = e, r = t === J.Sidebar, [d, a] = r ? [G, Z] : [V, Z], c = Object(U.f)(n) ? () => o.a.createElement(d, null, r && o.a.createElement(q, null, o.a.createElement(K, null, n.displayText), n.visibility === U.e.Private && o.a.createElement(X, {
						text: P.fbt._("Private", null, {
							hk: "4Av1zq"
						})
					}), n.visibility === U.e.Hidden && o.a.createElement(X, {
						text: P.fbt._("Hidden", null, {
							hk: "4tUfi0"
						})
					})), o.a.createElement(a, null, P.fbt._("Curated by u/ {username}", [P.fbt._param("username", Object(U.i)(n.url))], {
						hk: "1AxWQt"
					}), "· ", Object(k.f)(n.created))) : () => null, l = Object(U.f)(n) && n.description ? () => o.a.createElement(d, null, r ? o.a.createElement(Y, {
						onSeeMoreDetails: s
					}, n.description) : o.a.createElement(F.a, {
						html: n.description
					})) : () => null, u = [...n.subredditIds && n.subredditIds.map(e => ({
						id: e,
						type: B.a.SUBREDDIT
					})) || [], ...n.profileIds && n.profileIds.map(e => ({
						id: e,
						type: B.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: Object(m.a)(W.a.Component, e.className)
					}, c(), l(), o.a.createElement(A.b, {
						isSidebar: r,
						onSeeMoreDetails: s,
						subredditCategory: i,
						subredditsOrProfilesIds: u
					}))
				},
				ee = n("./node_modules/lodash/debounce.js"),
				te = n.n(ee),
				ne = n("./node_modules/lodash/noop.js"),
				se = n.n(ne),
				ie = n("./src/lib/constants/index.ts"),
				re = n("./src/reddit/actions/multireddit/index.ts"),
				oe = n("./src/reddit/actions/subredditAutocomplete.ts"),
				de = n("./src/reddit/actions/toaster.ts"),
				ae = n("./src/reddit/constants/keycodes.ts"),
				ce = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				le = n("./src/reddit/helpers/name/index.ts"),
				me = n("./src/reddit/icons/svgs/Close/index.tsx"),
				ue = n("./src/reddit/icons/svgs/Search/index.tsx"),
				pe = n("./src/reddit/models/Toast/index.ts"),
				be = n("./src/reddit/models/Widgets/index.ts"),
				he = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				xe = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				ge = n("./src/reddit/selectors/user.ts");
			const Ee = Object(a.c)({
				isAutocompletePending: xe.c,
				items: xe.e,
				language: ge.O
			});
			class Oe extends o.a.Component {
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
						items: n,
						isAutocompletePending: s,
						language: i
					} = this.props;
					return o.a.createElement(he.a, {
						className: e,
						focusedIndex: t,
						items: n,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !s && 0 === n.length,
						language: i,
						isValid: !0
					})
				}
			}
			var fe = Object(d.b)(Ee)(Oe),
				ye = n("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				Ce = n.n(ye);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const we = 12,
				je = 5,
				Se = 500,
				_e = Object(a.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, t) => {
						let {
							multireddit: n
						} = t;
						return Object(j.b)(e, n)
					},
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				Ie = Object(d.b)(_e, (e, t) => {
					let {
						multireddit: n
					} = t;
					return {
						addSubredditRequested: (t, s) => {
							const i = s ? Object(be.g)(s) : void 0;
							e(Object(re.a)({
								communityInfo: i,
								identifier: t,
								multiredditNames: [n.name]
							}))
						},
						errorToast: t => e(Object(de.e)({
							text: t,
							kind: pe.b.Error
						})),
						removeSubredditRequested: t => {
							let {
								id: s,
								name: i,
								type: r
							} = t;
							return s && e(Object(re.i)({
								id: s,
								multiredditName: n.name,
								name: i,
								type: r
							}))
						},
						subredditAutocompleteRequested: t => e(Object(oe.d)(t, n.isNSFW))
					}
				}),
				Me = {
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
			class Ne extends o.a.Component {
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
						this.setState(Object.assign({}, Me, {
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
										n = t.startsWith(ie.Tb) ? "profile" : "subreddit",
										s = "profile" === n ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: s,
										type: n
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
					}), this.state = Object.assign({}, Me, {
						memoizedShortList: e.communityInformations.slice(0, je)
					}), this.onQueryUpdated = te()(this.onQueryUpdated, Se)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(Me)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, je)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: n,
							removePending: s
						},
						state: {
							choice: i,
							focusedIndex: r,
							isAddError: d,
							isChoiceSelected: a,
							isDropdownOpen: c,
							isListExpanded: l,
							memoizedShortList: u,
							query: p
						}
					} = this;
					return o.a.createElement(v.a, {
						className: Ce.a.widgetContainer,
						headerButton: o.a.createElement(O, {
							communities: t
						}),
						title: Object(x.c)("manage communities")
					}, o.a.createElement("div", {
						className: Object(m.a)(Ce.a.bubbleSelector, {
							[Ce.a.error]: !!d
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, i ? o.a.createElement("div", {
						className: Object(m.a)(Ce.a.bubble, {
							[Ce.a.selected]: a
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, o.a.createElement("img", {
						src: i.iconUrl,
						className: Ce.a.bubbleIcon
					}), o.a.createElement("span", {
						className: Ce.a.text
					}, "r/".concat(i.name)), o.a.createElement(me.a, {
						className: Ce.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : o.a.createElement(ue.a, {
						className: Ce.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(m.a)(Ce.a.input, {
							[Ce.a.isEmpty]: !!i
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: p
					}), !d && (i || p.length > 0) && (e ? o.a.createElement(ce.a, {
						sizePx: we
					}) : o.a.createElement(R.n, {
						className: Ce.a.addButton,
						onClick: this.onSubmit
					}, Object(x.c)("Add"))), c && o.a.createElement(fe, {
						className: Ce.a.dropdown,
						focusedIndex: r,
						multireddit: n,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: p
					})), 0 === t.length ? o.a.createElement("p", {
						className: Ce.a.emptyText
					}, Object(x.c)("Try adding some communities to your custom feed!")) : (l ? t : u).map(e => o.a.createElement(C.a, ve({}, e, {
						buttonDisabled: !!s,
						key: e.id,
						isLoading: s === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: Object(x.c)("Remove"),
						useTertiaryButton: !0
					}))), t.length > je && o.a.createElement("div", {
						className: Ce.a.expandButtonContainer
					}, o.a.createElement(R.n, {
						className: Ce.a.expandButton,
						onClick: this.onToggleExpand
					}, l ? Object(x.c)("show less") : Object(x.c)("show more"))))
				}
			}
			var Te = Ie(Ne),
				Pe = n("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				De = n.n(Pe);
			const ke = 5,
				Le = Object(a.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: j.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class Fe extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						memoizedRecommendations: this.props.recommendations,
						recommendationsToExclude: []
					}, this.onRecommendationsRefreshClicked = () => {
						this.setState(e => ({
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, ke).map(e => e.name)]
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
						this.state.memoizedRecommendations.length < ke && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: n,
							recommendationsError: s,
							recommendationsPending: i
						},
						state: {
							memoizedRecommendations: r
						}
					} = this;
					return o.a.createElement(C.b, {
						bottomButtonText: Object(x.c)("refresh"),
						className: De.a.container,
						communities: r.slice(0, ke),
						errorMsg: Object(x.c)("Couldn't find any recommendations. Try adding more communities first!"),
						isError: !n.length || !!s,
						isLoading: i,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: se.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: Object(x.c)("add"),
						title: Object(x.c)("People also added"),
						useTertiaryButton: !0
					})
				}
			}
			var Be = Object(d.b)(Le, (e, t) => ({
					addSubredditRequested: n => {
						Object(U.f)(t.multireddit) && e(Object(re.a)({
							identifier: {
								name: n.name,
								type: n.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: n
						}))
					},
					recommendationsRefreshed: n => {
						Object(U.f)(t.multireddit) && e(Object(re.h)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: n
						}))
					}
				}))(Fe),
				Re = n("./src/reddit/components/SidebarContainer/index.tsx"),
				Ue = n("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = n.n(Ue),
				He = z.a.div("Component", Ae.a),
				We = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ze = n("./src/reddit/constants/zIndex.ts"),
				Ge = n("./src/reddit/controls/TextButton/index.tsx"),
				Ve = n("./src/reddit/helpers/trackers/idCard.ts"),
				qe = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Ke = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Xe = n("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Ze = n.n(Xe);

			function Qe() {
				return (Qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ye = Object(l.a)(e => o.a.createElement(u.c, {
					className: Ze.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(u.g, null, o.a.createElement(qe.a, null, o.a.createElement(u.n, null, e.multireddit.displayText), o.a.createElement(Ge.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(u.b, null)))), o.a.createElement(u.j, null, o.a.createElement($, {
					mode: J.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(Ge.a, {
					className: Ze.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(u.b, null)))),
				Je = e => o.a.createElement(Ye, Qe({}, e, {
					overlayCustomStyles: {
						zIndex: ze.b
					},
					withOverlay: !0
				})),
				$e = () => o.a.createElement(v.a, null, i()(5, e => o.a.createElement("div", {
					className: Object(m.a)(Ze.a.placeholder, Object(Ke.a)({
						isLoading: !0
					})),
					key: e
				}))),
				et = e => Object(U.f)(e.multireddit) ? Object(U.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(Te, {
					multireddit: e.multireddit
				}) : o.a.createElement(T, {
					multireddit: e.multireddit,
					titleText: Object(x.c)("Communities in this custom feed")
				}) : o.a.createElement($e, null) : o.a.createElement("div", {
					className: Ze.a.detailsContainer
				}, o.a.createElement(He, null, e.subredditCategory ? e.subredditCategory.name : Object(c.a)(e.language, "multireddit.sidebar.details")), o.a.createElement($, {
					mode: J.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				tt = Object(a.c)({
					isCurrentUserMultiredditOwner: (e, t) => {
						let {
							multireddit: n
						} = t;
						return Object(U.f)(n) && Object(j.c)(e, n.url)
					},
					language: (e, t) => {
						let {
							language: n
						} = t;
						return n || Object(ge.O)(e)
					}
				}),
				nt = Object(d.b)(tt, (e, t) => {
					let {
						subredditCategory: n
					} = t;
					return {
						trackSeeMoreClicked: () => e((e, t) => Ve.a(t())),
						trackSubredditClicked: t => {
							if (!n) return;
							const s = Object(be.i)(t);
							e((e, t) => Ve.b(t(), s, n.name))
						}
					}
				});
			class st extends o.a.Component {
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
						language: n,
						multireddit: s,
						multiUsername: i,
						subredditCategory: r
					} = this.props, d = t && s.subredditIds && s.subredditIds.length > 0;
					return o.a.createElement(Re.a, {
						className: e
					}, o.a.createElement(et, {
						isCurrentUserMultiredditOwner: t,
						language: n,
						multireddit: s,
						subredditCategory: r,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement(Je, {
						language: n,
						multireddit: s,
						subredditCategory: r,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!r
					}) : null, d && o.a.createElement(Be, {
						multireddit: s,
						multiUsername: i
					}), o.a.createElement(We.a, null))
				}
			}
			t.a = nt(st)
		},
		"./src/reddit/components/MultiredditSuggestionsWidget/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3jG8aJCgqOrmMUbRMiakpX"
			}
		},
		"./src/reddit/components/MultiredditTopBar/Button/index.m.less": function(e, t, n) {
			e.exports = {
				textBase: "LcUEFMijsseUG0elP8bNx",
				button: "_14uJB4G3tqOEYET63pRdyA",
				hoverText: "_3GSO2RiUsPx69akefymMHH",
				text: "_2RcDSmyTF8XzvMXlNYdfB3",
				withHover: "_1eiwN-M8gLxB0Wrix2rZI9",
				icon: "nVpAL8k7NeDtiXcPNAmaX"
			}
		},
		"./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3d7Sfwey7uejnzrmv0eHPD",
				isFollowed: "mmRAVpxPd7_dKF--axI5t"
			}
		},
		"./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "bX6SqXfzfxpv4GQbuIYVZ",
				button: "_1qiH6rUwyms3uD12BWyHR5"
			}
		},
		"./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less": function(e, t, n) {
			e.exports = {
				shareMenu: "_3mn7XQLztyLrhr3ZAQyl5y",
				shareIcon: "_373yJBxVgon33agUR-lV0m"
			}
		},
		"./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1doK8qD1dkYaqBY5YEJaOD",
				pencilIcon: "_3PELp5Muvbc7hRTVQW0VEa",
				dropdownRow: "KXZPPPGdP_LlVeAK0oMa",
				icon: "_3T9KQ0BWvW9jR5SmmqJgVE",
				public: "_1mAvxBXazRTEPbQEYYMhFI",
				private: "_2slZfnU3hwgD9b8dT79p1F"
			}
		},
		"./src/reddit/components/MultiredditTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1f7kdhvpHh0S3ClTn3xFCa",
				layoutContainer: "_2CnZ_NKcI15TLBqdLMIYmu",
				layoutCard: "_1xUCmooih5FTp8z5c-oD6U",
				icon: "_2xtXouwF6uqK9UUpun6xXY",
				actions: "_1T_vh62Hnliedh8W_NT8-m",
				content: "_3zG_bpPw8e9TAPq07QCJya",
				header: "_1-u63wf24mXQJg7YnYaR_O",
				multiredditName: "_3I-SyNPeXukMGT4sLs6sFH",
				flair: "_3OqxkWiGGZGmXF0KTa12_h",
				descriptionContainer: "_2SmhQkTKjbD38r3jy00afr",
				meta: "_9uTR_Kf5w51DX_D_Zzj6b",
				usernameLink: "_3O7szJf96hs9FVHDx2qH9d"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				x = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(x);
			const E = c.a.wrapped(u.a, "_Dropdown", g.a),
				O = Object(m.a)(E),
				f = c.a.button("MenuButton", g.a),
				y = c.a.wrapped(b.a, "MenuIcon", g.a),
				C = c.a.wrapped(p.b, "DropdownRow", g.a),
				v = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				w = Object(o.b)(v, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => r.a.createElement(f, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: j(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(y, null), r.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/RawHTMLDisplay/Listing.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, n) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/take.js"),
				r = n.n(i),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				b = n("./src/reddit/components/SidebarExpandableList/index.m.less"),
				h = n.n(b),
				x = n("./src/lib/lessComponent.tsx");
			const g = 10,
				E = x.a.wrapped(l.n, "TertiaryButton", h.a);
			class O extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && n && n()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: n,
							pending: i
						} = this.props, r = !e || t && n ? s.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : s.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return d.a.createElement(E, {
							onClick: this.onButtonClick
						}, i ? d.a.createElement(m.a, {
							sizePx: g
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: n,
						items: s,
						minimizedLength: i,
						renderItem: o,
						title: a
					} = this.props, {
						expanded: l
					} = this.state, m = s.length > i || t, b = (!m || l ? s : r()(s, i)).map(e => o({
						item: e
					}));
					return d.a.createElement(c.a, {
						className: e,
						headerButton: n,
						title: a
					}, b, d.a.createElement(u.a, null, d.a.createElement(p.a, null, m && this.renderToggleButton())))
				}
			}
			O.defaultProps = {
				minimizedLength: a.Fb
			}, t.a = O
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, n) {
			e.exports = {
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV",
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				p = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(d.c)({
				language: b.O
			});
			var x = Object(r.b)(h, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = n("./src/reddit/constants/componentSizes.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/i18n/utils.ts"),
				C = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				w = n("./src/reddit/models/Flair/index.ts"),
				j = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				S = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = n.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "b", (function() {
				return M
			})), n.d(t, "a", (function() {
				return T
			}));
			const M = e => i.a.createElement(g.a, {
					className: Object(c.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || Object(y.c)("Something went wrong.")) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(T, I({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(O.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				N = Object(d.c)({
					hideNSFWPref: b.y,
					language: b.O
				}),
				T = Object(r.b)(N)(e => i.a.createElement("div", {
					className: _.a.communityItemContainer
				}, i.a.createElement(v.a, {
					widthRight: E.t
				}, i.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(C.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), i.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, i.a.createElement(o.a, {
					className: _.a.communityName,
					to: Object(j.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(j.b)(e.name, e.type)), i.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: _.a.subscriberCount
				}, Object(a.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && i.a.createElement(m.b, {
					flair: {
						type: w.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(c.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(O.n, {
					className: Object(c.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(x, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				i = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(i.c)(e) : Object(i.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, n) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/debounce.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				d = n("./src/app/strings/index.ts"),
				a = n("./src/lib/classNames/index.ts");
			const c = {
				leading: !0,
				trailing: !1
			};
			var l = function(e, t, n) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c;
					const i = Object.assign({}, c, s),
						r = t > e ? 1 : -1;
					let o = e;
					if (e !== t) {
						for (i.leading || (o += r); o !== t;) n(o), o += r;
						i.trailing && n(o)
					} else(i.leading || i.trailing) && n(e)
				},
				m = n("./src/lib/forEachGroup/index.ts"),
				u = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				b = n.n(p);
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var x = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				g = n.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (n[s[i]] = e[s[i]])
					}
					return n
				},
				f = e => {
					var {
						className: t,
						children: n,
						title: s
					} = e, i = O(e, ["className", "children", "title"]);
					return o.a.createElement("div", E({
						className: Object(a.a)(g.a.dropdownSection, t)
					}, i), s && o.a.createElement("div", {
						className: g.a.title
					}, s), n)
				},
				y = n("./src/reddit/helpers/name/index.ts"),
				C = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/components/SubredditIcon/index.tsx"),
				w = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				j = n("./src/reddit/icons/svgs/Link/index.tsx"),
				S = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Video/index.tsx"),
				I = n("./src/reddit/layout/row/Inline/index.tsx"),
				M = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				N = n.n(M);
			const T = [{
				type: "text",
				Icon: S.a
			}, {
				type: "images",
				Icon: w.a
			}, {
				type: "videos",
				Icon: _.a
			}, {
				type: "links",
				Icon: j.a
			}];
			var P = e => {
					const {
						allowedPostTypes: t,
						className: n
					} = e;
					return o.a.createElement(I.a, {
						className: Object(a.a)(N.a.rowStyle, n)
					}, T.map(e => {
						let {
							type: n,
							Icon: s
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(N.a.iconWrapper, {
								[N.a.mDisabled]: !t[n]
							})
						}, o.a.createElement(s, null))
					}))
				},
				D = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				k = n.n(D);
			const L = C.a.wrapped(v.b, "subredditIcon", k.a);
			var F = e => {
					const {
						highlight: t,
						icon: n,
						title: s,
						secondaryText: i,
						item: r
					} = e, {
						allowedPostTypes: d
					} = r;
					return o.a.createElement("div", {
						className: Object(a.a)(k.a.container, {
							[k.a.mHighlight]: t
						})
					}, n, o.a.createElement("div", {
						className: k.a.main
					}, o.a.createElement("span", {
						className: k.a.title
					}, s), i && o.a.createElement("span", {
						className: k.a.secondary
					}, i)), t && d && o.a.createElement(P, {
						allowedPostTypes: d
					}))
				},
				B = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				R = n.n(B);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(d.c)("listings.subscribers");
			var H = e => {
				const {
					language: t,
					item: {
						name: n,
						iconUrl: s,
						subscribers: i
					}
				} = e, r = Object(y.c)(n), d = void 0 !== i ? A(t, i) : void 0, a = o.a.createElement(L, {
					className: R.a.profileIcon,
					iconUrl: s
				});
				return o.a.createElement(F, U({
					icon: a,
					title: r,
					secondaryText: d
				}, e))
			};

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const z = Object(d.c)("listings.subscribers");
			var G = e => {
					const {
						language: t,
						item: {
							primaryColor: n,
							iconUrl: s,
							name: i,
							subscribers: r
						}
					} = e, d = Object(y.b)(i), a = void 0 !== r ? z(t, r) : void 0, c = o.a.createElement(L, {
						iconUrl: s,
						primaryColor: n,
						redditStyle: !0
					});
					return o.a.createElement(F, W({
						icon: c,
						title: d,
						secondaryText: a
					}, e))
				},
				V = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				q = n.n(V);
			const K = Object(d.d)("subredditPicker.noCommunitiesFound"),
				X = {
					[u.a.OWN_PROFILE]: Object(d.d)("subredditPicker.sectionOwnProfile"),
					[u.a.SUBSCRIBED_TO_SUBREDDIT]: Object(d.d)("subredditPicker.sectionSubscriptions"),
					[u.a.OTHER_SUBREDDIT]: Object(d.d)("subredditPicker.sectionOthers"),
					[u.a.MODERATED_SUBREDDIT]: Object(d.d)("subredditPicker.sectionModeratedSubreddits")
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
						case u.a.OWN_PROFILE:
							return H;
						default:
							return G
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						language: n
					} = this.props, s = [];
					return this.props.showNoMatchesCaption && s.push(o.a.createElement(f, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: q.a.noMatches
					}, n && K(n)))), Object(m.a)(t, {
						keyFn: e => e.type
					}, (i, r, d, a) => {
						const c = [];
						l(d, a, s => {
							const i = t[s],
								r = s === e,
								d = this.getEntryContentComponent(i.type, i.name);
							d && c.push(o.a.createElement(h, {
								entryIndex: s,
								disabled: i.disabled,
								key: i.id || i.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(d, {
								language: n,
								highlight: r,
								item: i
							})))
						});
						const m = X[r];
						s.push(o.a.createElement(f, {
							key: r,
							title: m && m(n),
							children: c
						}))
					}), o.a.createElement("div", {
						className: Object(a.a)(q.a.container, this.props.className, {
							[q.a.mIsValid]: this.props.isValid,
							[q.a.mIsVisible]: s.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, s)
				}
			}
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/widgets.ts"),
				o = n("./src/telemetry/index.ts");
			const d = e => {
					Object(o.a)(Object.assign({}, i.defaults(e), {
						action: s.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				a = (e, t, n) => {
					const {
						subreddit: d,
						profile: a
					} = Object(r.b)(e, t);
					Object(o.a)(Object.assign({}, i.defaults(e), {
						action: s.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: a,
						source: "id_card",
						subreddit: Object.assign({}, d, {
							categoryName: n
						})
					}))
				},
				c = e => t => ({
					action: s.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: i.subreddit(t)
				})
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				d = n.n(o);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", d.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("plus"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(d);
			t.a = e => i.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("share"), a.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				d = n.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(d.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, i.a.createElement("g", null, i.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), i.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), i.a.createElement("title", null, "Planet"), i.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				d = n.n(o);
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
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(i);
			t.a = s.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				a = n.n(d);
			t.a = Object(r.a)(e => i.a.createElement("div", {
				className: Object(o.a)(a.a.expandedCenterContainer, e.className)
			}, i.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), i.a.createElement("div", {
				className: a.a.center
			}, Array.isArray(e.children) && e.children[1]), i.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/Multireddit/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_398UHHJSXVL0IJVGTkTa9B",
				planetIcon: "_1r6EMjMnKM7lL8H8H3Vs4t",
				emptyMessageText: "_1rJj6Qsj1uaYq4iwCBZX9_",
				emptyMessage: "_23HF_LA75CXQvFP4nnxWQD"
			}
		},
		"./src/reddit/pages/Multireddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.array.sort.js");
			var s = n("./node_modules/lodash/fromPairs.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				u = n("./src/reddit/actions/multireddit/index.ts"),
				p = n("./src/reddit/constants/parameters.ts"),
				b = n("./src/reddit/helpers/trackers/screenview.ts"),
				h = n("./src/reddit/components/ContentGate/index.tsx"),
				x = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/reddit/components/LayoutNavigation/index.tsx"),
				E = n("./src/reddit/components/ListingPostList/index.tsx"),
				O = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				f = n("./src/lib/classNames/index.ts"),
				y = n("./src/reddit/components/Flair/index.tsx"),
				C = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/constants/modals.ts"),
				w = n("./src/reddit/i18n/utils.ts"),
				j = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				S = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				_ = n("./src/reddit/icons/svgs/User/index.tsx"),
				I = n("./src/reddit/models/Multireddit/index.ts"),
				M = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				N = n.n(M);
			const T = Object(d.b)(null, e => ({
					onEditClicked: () => e(Object(C.h)(v.a.MULTIREDDIT_EDIT))
				})),
				P = {
					[I.e.Public]: {
						icon: o.a.createElement(_.a, {
							className: Object(f.a)(N.a.icon, N.a.public)
						}),
						text: Object(w.c)("Public")
					},
					[I.e.Hidden]: {
						icon: o.a.createElement(_.a, {
							className: Object(f.a)(N.a.icon, N.a.public)
						}),
						text: Object(w.c)("Hidden")
					},
					[I.e.Private]: {
						icon: o.a.createElement(S.a, {
							className: Object(f.a)(N.a.icon, N.a.private)
						}),
						text: Object(w.c)("Private")
					}
				};
			var D = T(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, P[t.visibility].icon, P[t.visibility].text, o.a.createElement("button", {
						className: N.a.button,
						onClick: n
					}, o.a.createElement(j.a, {
						className: N.a.pencilIcon
					})))
				}),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				L = n("./src/reddit/components/RichTextJson/index.tsx"),
				F = n("./src/reddit/constants/postLayout.ts"),
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./src/reddit/helpers/name/index.ts"),
				A = n("./src/reddit/i18n/components.tsx"),
				H = n("./src/reddit/models/Flair/index.ts"),
				W = n("./src/reddit/selectors/multireddit.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/actions/subscription/index.ts"),
				V = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/components/MultiredditTopBar/Button/index.m.less")),
				q = n.n(V);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var X = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (n[s[i]] = e[s[i]])
				}
				return n
			};
			var Z = o.a.memo(e => {
					var {
						className: t,
						onClick: n,
						children: s,
						hoverText: i,
						text: r,
						icon: d
					} = e, a = X(e, ["className", "onClick", "children", "hoverText", "text", "icon"]);
					return o.a.createElement("button", K({
						className: Object(f.a)(t, q.a.button, i ? q.a.withHover : null),
						onClick: n
					}, a), o.a.createElement("span", {
						className: q.a.icon
					}, d), r && o.a.createElement("span", {
						className: q.a.text
					}, r), i && o.a.createElement("span", {
						className: q.a.hoverText
					}, i), s)
				}),
				Q = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				J = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				$ = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				ee = n("./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less"),
				te = n.n(ee);
			const ne = Object(d.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(G.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(Y.g)(t.multireddit.url)) : t.sendEvent(Object(Y.d)(t.multireddit.url))
				}
			}));
			var se = Object(Q.c)(ne(e => o.a.createElement(Z, {
					className: Object(f.a)(te.a.button, e.multireddit.isFollowed ? te.a.isFollowed : null),
					hoverText: e.multireddit.isFollowed ? Object(w.c)("Unfollow") : void 0,
					icon: e.multireddit.isFollowed ? o.a.createElement($.a, null) : o.a.createElement(J.a, null),
					onClick: e.onFollowClick,
					text: e.multireddit.isFollowed ? Object(w.c)("Following") : Object(w.c)("Follow")
				}))),
				ie = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				re = n("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = n("./src/reddit/controls/Dropdown/Row.tsx"),
				de = n("./src/reddit/selectors/activeModalId.ts"),
				ae = n("./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less"),
				ce = n.n(ae);
			const le = Object(w.c)("Are you sure you would like to delete this Custom Feed?\nThis will not affect the communities you have added."),
				me = Object(a.c)({
					isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(de.a)(e),
					showOwnerButtons: (e, t) => Object(W.c)(e, t.multireddit.url)
				});
			var ue = Object(d.b)(me, (e, t) => ({
					deleteConfirmed: () => e(Object(u.c)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(C.h)(v.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(C.h)(v.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(C.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(Q.c)(e => {
					const {
						deleteConfirmed: t,
						isConfirmDeleteOpen: n,
						multireddit: s,
						onDuplicateClicked: i,
						onEdit: r,
						sendEvent: d,
						showOwnerButtons: a,
						toggleConfirmDelete: c
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(re.b, {
						className: ce.a.button,
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, a && o.a.createElement(oe.b, {
						displayText: Object(w.c)("Edit Details"),
						onClick: r
					}), o.a.createElement(oe.b, {
						displayText: Object(w.c)("Duplicate"),
						onClick: i
					}), a && o.a.createElement(oe.b, {
						className: Object(f.a)(ce.a.warning),
						displayText: Object(w.c)("Delete Custom Feed"),
						onClick: c
					})), n && o.a.createElement(ie.a, {
						toggleModal: c,
						onConfirm: t,
						actionText: Object(w.c)("Delete"),
						cancelActionText: Object(w.c)("Keep"),
						headerText: Object(w.c)("Delete Custom Feed?"),
						modalText: le,
						trackClick: () => {
							d(Object(Y.a)(s.url))
						},
						withOverlay: !0
					}))
				})),
				pe = n("./node_modules/lodash/noop.js"),
				be = n.n(pe),
				he = n("./src/config.ts"),
				xe = n("./src/lib/copyToClipboard/index.ts"),
				ge = n("./src/reddit/actions/toaster.ts"),
				Ee = n("./src/reddit/actions/tooltip.ts"),
				Oe = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				fe = n("./src/reddit/controls/Dropdown/index.tsx"),
				ye = n("./src/reddit/icons/fonts/Share/index.tsx"),
				Ce = n("./src/reddit/models/Toast/index.ts"),
				ve = n("./src/reddit/selectors/tooltip.ts"),
				we = n("./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less"),
				je = n.n(we);
			const Se = "MULTIREDDIT_TOP_BAR_SHARE",
				_e = Object(Oe.a)(fe.a),
				Ie = Object(a.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(de.a)(e),
					isDropdownOpen: Object(ve.b)(Se),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				Me = Object(d.b)(Ie, (e, t) => ({
					copyLink: () => {
						if (Object(xe.a)(he.a.redditUrl + t.multireddit.url)) {
							const t = Object(ge.d)(Object(w.c)("Copied link!"), Ce.b.SuccessCommunity);
							e(Object(ge.e)(t))
						} else {
							const t = Object(ge.d)(Object(w.c)("Something went wrong"), Ce.b.Error);
							e(Object(ge.e)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(C.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(Ee.h)({
							tooltipId: Se
						})), t.sendEvent(Object(Y.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(u.e)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class Ne extends o.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === I.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(I.e.Public)
					}
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Z, {
						className: je.a.shareMenu,
						disabled: this.props.isUpdatePending,
						icon: o.a.createElement(ye.a, {
							className: je.a.shareIcon
						}),
						id: Se,
						onClick: this.onShareButtonClick,
						text: Object(w.c)("Share")
					}, o.a.createElement(_e, {
						isOpen: this.props.isDropdownOpen,
						tooltipId: Se,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(oe.b, {
						displayText: Object(w.c)("Copy link"),
						onClick: this.props.copyLink
					}))), this.props.isConfirmPublicOpen && o.a.createElement(ie.a, {
						toggleModal: this.props.toggleConfirmPublic,
						onConfirm: this.onMakePublicConfirm,
						actionText: Object(w.c)("Make public"),
						headerText: Object(w.c)("Make Custom Feed Public?"),
						modalText: o.a.createElement(o.a.Fragment, null, o.a.createElement(A.c, null, "This Custom Feed is currently private."), o.a.createElement("br", null), o.a.createElement("br", null), o.a.createElement(A.c, null, "Would you like to make it public so you can share it with other people?")),
						trackClick: be.a,
						withOverlay: !0
					}))
				}
			}
			var Te = Object(Q.c)(Me(Ne)),
				Pe = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				De = n.n(Pe);
			const ke = Object(a.c)({
					isLoggedIn: z.G,
					layout: (e, t) => F.e[Object(B.M)(e, t)],
					userIsOwner: (e, t) => Object(W.c)(e, t.multireddit.url)
				}),
				Le = Object(d.b)(ke),
				Fe = Object(B.t)(),
				Be = {};
			var Re = Fe(Le(e => o.a.createElement("div", {
					className: De.a.container
				}, o.a.createElement("div", {
					className: Object(f.a)(De.a.layoutContainer, e.layout === F.d.Card ? De.a.layoutCard : null)
				}, o.a.createElement("img", {
					className: De.a.icon,
					src: e.multireddit.icon
				}), o.a.createElement("div", {
					className: De.a.content
				}, o.a.createElement("div", {
					className: De.a.header
				}, o.a.createElement("h1", {
					className: De.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && o.a.createElement(y.b, {
					className: De.a.flair,
					flair: {
						type: H.f.Nsfw,
						text: "nsfw"
					}
				})), o.a.createElement("div", {
					className: De.a.meta
				}, o.a.createElement(A.c, null, o.a.createElement(A.b, {
					name: "communitiesCount"
				}, e.multireddit.subredditCount), " ", o.a.createElement(A.a, {
					name: "communities",
					singular: "community",
					plural: "communities",
					count: e.multireddit.subredditCount
				}), " ", "in this custom feed"), o.a.createElement("span", null, " • "), e.userIsOwner ? o.a.createElement(D, {
					multireddit: e.multireddit
				}) : o.a.createElement(o.a.Fragment, null, Object(w.c)("Curated by"), o.a.createElement(R.a, {
					className: De.a.usernameLink,
					to: "/".concat(Object(U.c)(Object(I.i)(e.multireddit.url)))
				}, Object(U.c)(Object(I.i)(e.multireddit.url))))), o.a.createElement("div", {
					className: De.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? o.a.createElement(L.a, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: Be
				}) : o.a.createElement(k.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), o.a.createElement("div", {
					className: De.a.actions
				}, !e.userIsOwner && e.isLoggedIn && o.a.createElement(se, {
					multireddit: e.multireddit
				}), o.a.createElement(Te, {
					multireddit: e.multireddit
				}), e.isLoggedIn && o.a.createElement(ue, {
					multireddit: e.multireddit
				})))))),
				Ue = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Ae = n("./src/reddit/layout/page/Listing/index.tsx"),
				He = n("./src/reddit/models/ContentGate.ts"),
				We = n("./src/reddit/pages/Multireddit/index.m.less"),
				ze = n.n(We);
			const Ge = e => o.a.createElement("div", {
					className: ze.a.emptyMessage
				}, o.a.createElement(Ue.a, {
					className: ze.a.planetIcon
				}), o.a.createElement("div", {
					className: ze.a.emptyMessageText
				}, e.multireddit && 0 !== e.multireddit.subredditCount ? Object(w.c)("There are no posts in this custom feed") : Object(w.c)("There are 0 communities in this custom feed"))),
				Ve = Object(B.t)({
					currentMultireddit: B.c,
					pageLayer: e => e
				}),
				qe = (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || c.O.HOT
				},
				Ke = (e, t) => {
					let {
						location: n
					} = t;
					return i()([...Object(l.a)(n.search)])
				},
				Xe = (e, t) => {
					const n = Object(B.d)(e, {
						pageLayer: t.pageLayer
					});
					if (n) return n.url; {
						const {
							currentMultireddit: e
						} = t;
						if (!e) return "";
						const {
							multiredditName: n,
							username: s
						} = e;
						return Object(I.h)(s || "me", n)
					}
				},
				Ze = Object(a.a)(qe, Ke, Xe, (e, t, n) => Object(m.a)(n, e, t)),
				Qe = Object(a.a)(Ke, e => {
					const t = p.t in e && e[p.t].toUpperCase();
					return "string" == typeof t && t in c.Rb ? c.Rb[t] : c.Sb
				}),
				Ye = Object(a.c)({
					language: z.O,
					listingKey: Ze,
					listingName: Xe,
					multireddit: B.d,
					over18Prefs: z.T,
					sort: qe,
					timeSort: Qe
				});
			class Je extends o.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => o.a.createElement(Ge, {
						multireddit: this.props.multireddit
					})
				}
				render() {
					const {
						language: e,
						listingKey: t,
						listingName: n,
						match: {
							params: {
								username: s
							}
						},
						multireddit: i,
						over18Prefs: r,
						sort: d,
						timeSort: a
					} = this.props;
					return i ? i.isNSFW && !r ? o.a.createElement(h.a, {
						contentGateType: He.a.NsfwCustomFeed
					}) : o.a.createElement(Ae.a, {
						className: this.props.className,
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, null), o.a.createElement(E.a, {
							listingKey: t,
							listingName: n,
							listingViewed: (e, n) => Object(b.d)(t, d, n, e, a),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: i ? o.a.createElement(o.a.Fragment, null, Object(I.f)(i) && o.a.createElement(Re, {
							multireddit: i
						}), o.a.createElement(g.a, {
							sort: d,
							baseUrl: s ? i.url.replace(/\/$/, "") : "/me/m/".concat(i.name),
							timeSort: a
						})) : null,
						fitPageToContent: !0,
						sidebar: i ? o.a.createElement(O.a, {
							className: ze.a.sidebar,
							language: e,
							listingKey: t,
							listingName: n,
							multireddit: i,
							multiUsername: s
						}) : null
					}) : o.a.createElement(h.a, {
						contentGateType: He.a.CustomFeedDoesNotExist
					})
				}
			}
			const $e = Ve(Object(d.b)(Ye, (e, t) => ({
				onLoadMorePosts: () => e(Object(u.f)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Je));
			t.default = e => o.a.createElement($e, e)
		}
	}
]);
//# sourceMappingURL=Multireddit.24df197e8392c14591f9.js.map