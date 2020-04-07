// https://www.redditstatic.com/desktop2x/Multireddit.ad67f7d6952a2732c269.js
// Retrieved at 4/7/2020, 4:50:05 PM by Reddit Dataminer v1.0.0
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
			n.d(t, "a", (function() {
				return w
			}));
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
				f = Object(c.c)({
					subredditOrProfile: m.J
				});
			var g = Object(a.b)(f)(e => {
				let {
					children: t,
					subredditOrProfile: n
				} = e;
				return t(n, r.a.createElement(r.a.Fragment, null, r.a.createElement(h, {
					subredditOrProfile: n
				}), r.a.createElement(x, null, n.displayText)))
			});
			var E = e => {
					let {
						children: t,
						className: n,
						subredditsOrProfilesIds: s
					} = e;
					const i = s.map(e => r.a.createElement(g, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return r.a.createElement("div", {
						className: n
					}, i)
				},
				y = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				C = n.n(y);
			const O = b.a.div("CommunityCount", C.a),
				v = b.a.wrapped(E, "SubredditsOrProfiles", C.a),
				w = b.a.wrapped(o.a, "SidebarSubreddit", C.a),
				_ = b.a.wrapped(o.a, "ModalSubreddit", C.a);
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
				} = e, a = t ? w : _, c = n.length, l = t && n.length > 4;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(O, null, s.fbt._({
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
					hk: "QYkk2"
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/times.js"),
				r = n.n(i),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/components/OverflowMenu/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				f = n.n(x);
			var g = Object(a.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: n
					} = e, i = t.filter(e => !e.isSubscribed);
					return i.length ? d.a.createElement(b.b, {
						className: f.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, d.a.createElement(h.b, {
						displayText: s.fbt._("Join all communities", null, {
							hk: "1E2I53"
						}),
						onClick: () => n(i)
					})) : null
				}),
				E = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				y = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				O = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = n("./src/reddit/selectors/multireddit.ts"),
				w = n("./src/reddit/components/MultiredditInfo/index.m.less"),
				_ = n.n(w);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(c.c)({
				communities: (e, t) => Object(v.b)(e, t.multireddit)
			}), I = Object(a.b)(j), k = e => {
				let {
					item: t
				} = e;
				return d.a.createElement(C.a, {
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
			var M = Object(y.c)(I(e => {
					const {
						communities: t,
						titleText: n
					} = e;
					return t.length ? d.a.createElement(E.a, {
						items: t,
						minimizedLength: 5,
						title: n,
						headerButton: d.a.createElement(g, {
							communities: t
						}),
						renderItem: k
					}) : d.a.createElement(O.a, {
						title: n
					}, d.a.createElement("div", {
						className: _.a.noSubredditsText
					}, S._("This custom feed does not yet contain any communities.", null, {
						hk: "35QJZi"
					})))
				})),
				N = n("./src/higherOrderComponents/sizeMe.tsx"),
				P = n("./src/lib/timeAgo/index.ts"),
				T = n("./src/reddit/components/Flair/index.tsx"),
				D = n("./src/reddit/components/RawHTMLDisplay/Listing.tsx"),
				L = n("./src/reddit/constants/posts.ts"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/models/Multireddit/index.ts"),
				R = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				U = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				A = n.n(U),
				H = n("./src/lib/lessComponent.tsx");
			const W = H.a.div("SidebarTopSpacer", A.a),
				z = H.a.div("ModalTopSpacer", A.a),
				G = H.a.div("SidebarTitleContainer", A.a),
				q = H.a.div("SidebarTitle", A.a),
				K = H.a.wrapped(T.a, "SidebarFlair", A.a),
				V = H.a.div("Attributon", A.a),
				Q = e => {
					let {
						children: t,
						className: n
					} = e;
					return d.a.createElement(D.a, {
						className: n,
						html: t
					})
				},
				X = Object(N.a)(e => {
					let {
						children: t,
						onSeeMoreDetails: n,
						size: i
					} = e;
					const r = !i || "number" != typeof i.height || i.height > 152;
					return d.a.createElement("div", null, d.a.createElement(Q, {
						className: Object(m.a)(A.a.FadingDescription, {
							[A.a.shouldFade]: r
						})
					}, t), r && d.a.createElement(F.n, {
						onClick: n
					}, s.fbt._("Read more", null, {
						hk: "i0AXN"
					})))
				});
			var Z;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(Z || (Z = {}));
			var Y = e => {
					const {
						mode: t,
						multireddit: n,
						onSeeMoreDetails: i,
						subredditCategory: r
					} = e, o = t === Z.Sidebar, [a, c] = o ? [W, V] : [z, V], l = Object(B.f)(n) ? () => d.a.createElement(a, null, o && d.a.createElement(G, null, d.a.createElement(q, null, n.displayText), n.visibility === B.e.Private && d.a.createElement(K, {
						text: s.fbt._("Private", null, {
							hk: "4Av1zq"
						})
					}), n.visibility === B.e.Hidden && d.a.createElement(K, {
						text: s.fbt._("Hidden", null, {
							hk: "4tUfi0"
						})
					})), d.a.createElement(c, null, s.fbt._("Curated by u/ {username}", [s.fbt._param("username", Object(B.i)(n.url))], {
						hk: "1AxWQt"
					}), "· ", Object(P.f)(n.created))) : () => null, u = Object(B.f)(n) && n.description ? () => d.a.createElement(a, null, o ? d.a.createElement(X, {
						onSeeMoreDetails: i
					}, n.description) : d.a.createElement(D.a, {
						html: n.description
					})) : () => null, p = [...n.subredditIds && n.subredditIds.map(e => ({
						id: e,
						type: L.a.SUBREDDIT
					})) || [], ...n.profileIds && n.profileIds.map(e => ({
						id: e,
						type: L.a.PROFILE
					})) || []];
					return d.a.createElement("div", {
						className: Object(m.a)(A.a.Component, e.className)
					}, l(), u(), d.a.createElement(R.b, {
						isSidebar: o,
						onSeeMoreDetails: i,
						subredditCategory: r,
						subredditsOrProfilesIds: p
					}))
				},
				J = n("./node_modules/lodash/debounce.js"),
				$ = n.n(J),
				ee = n("./node_modules/lodash/noop.js"),
				te = n.n(ee),
				ne = n("./src/lib/constants/index.ts"),
				se = n("./src/reddit/actions/multireddit/index.ts"),
				ie = n("./src/reddit/actions/subredditAutocomplete.ts"),
				re = n("./src/reddit/actions/toaster.ts"),
				oe = n("./src/reddit/constants/keycodes.ts"),
				de = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				ae = n("./src/reddit/helpers/name/index.ts"),
				ce = n("./src/reddit/icons/svgs/Close/index.tsx"),
				le = n("./src/reddit/icons/svgs/Search/index.tsx"),
				me = n("./src/reddit/models/Toast/index.ts"),
				ue = n("./src/reddit/models/Widgets/index.ts"),
				pe = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				be = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				he = n("./src/reddit/selectors/user.ts");
			const xe = Object(c.c)({
				isAutocompletePending: be.c,
				items: be.e,
				language: he.O
			});
			class fe extends d.a.Component {
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
					return d.a.createElement(pe.a, {
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
			var ge = Object(a.b)(xe)(fe),
				Ee = n("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				ye = n.n(Ee);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = 12,
				ve = 5,
				we = 500,
				_e = Object(c.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, t) => {
						let {
							multireddit: n
						} = t;
						return Object(v.b)(e, n)
					},
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				Se = Object(a.b)(_e, (e, t) => {
					let {
						multireddit: n
					} = t;
					return {
						addSubredditRequested: (t, s) => {
							const i = s ? Object(ue.g)(s) : void 0;
							e(Object(se.a)({
								communityInfo: i,
								identifier: t,
								multiredditNames: [n.name]
							}))
						},
						errorToast: t => e(Object(re.e)({
							text: t,
							kind: me.b.Error
						})),
						removeSubredditRequested: t => {
							let {
								id: s,
								name: i,
								type: r
							} = t;
							return s && e(Object(se.i)({
								id: s,
								multiredditName: n.name,
								name: i,
								type: r
							}))
						},
						subredditAutocompleteRequested: t => e(Object(ie.d)(t, n.isNSFW))
					}
				}),
				je = {
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
			class Ie extends d.a.Component {
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
						this.state.choice ? this.state.choice && (e.which === oe.a.ArrowLeft ? this.onChoiceSelected() : this.state.isChoiceSelected ? e.which === oe.a.Backspace ? this.setState({
							choice: null
						}) : e.which === oe.a.ArrowRight && this.onChoiceDeselected() : e.which !== oe.a.Backspace || this.state.query.length || this.onChoiceSelected(), e.which === oe.a.Enter && this.onSubmit()) : this.state.isDropdownOpen ? e.which === oe.a.ArrowDown ? (this.setState({
							focusedIndex: this.state.focusedIndex + 1
						}), e.stopPropagation()) : e.which === oe.a.ArrowUp ? (this.setState({
							focusedIndex: this.state.focusedIndex - 1
						}), e.stopPropagation()) : e.which === oe.a.Escape ? (this.closeDropdown(), e.stopPropagation()) : e.which === oe.a.Enter && (this.state.focusedItem ? this.onDropdownItemSelect(this.state.focusedItem) : -1 === this.state.focusedIndex && this.onSubmit()) : e.which === oe.a.Enter && this.onSubmit()
					}, this.onQueryUpdated = () => {
						this.props.subredditAutocompleteRequested(this.state.query)
					}, this.onDropdownItemSelect = e => {
						this.setState(Object.assign({}, je, {
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
									const t = Object(ae.g)(e),
										n = t.startsWith(ne.Sb) ? "profile" : "subreddit",
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
					}), this.state = Object.assign({}, je, {
						memoizedShortList: e.communityInformations.slice(0, ve)
					}), this.onQueryUpdated = $()(this.onQueryUpdated, we)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(je)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, ve)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: n,
							removePending: i
						},
						state: {
							choice: r,
							focusedIndex: o,
							isAddError: a,
							isChoiceSelected: c,
							isDropdownOpen: l,
							isListExpanded: u,
							memoizedShortList: p,
							query: b
						}
					} = this;
					return d.a.createElement(O.a, {
						className: ye.a.widgetContainer,
						headerButton: d.a.createElement(g, {
							communities: t
						}),
						title: s.fbt._("manage communities", null, {
							hk: "3X8r0d"
						})
					}, d.a.createElement("div", {
						className: Object(m.a)(ye.a.bubbleSelector, {
							[ye.a.error]: !!a
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, r ? d.a.createElement("div", {
						className: Object(m.a)(ye.a.bubble, {
							[ye.a.selected]: c
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, d.a.createElement("img", {
						src: r.iconUrl,
						className: ye.a.bubbleIcon
					}), d.a.createElement("span", {
						className: ye.a.text
					}, "r/".concat(r.name)), d.a.createElement(ce.a, {
						className: ye.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : d.a.createElement(le.a, {
						className: ye.a.searchIcon
					}), d.a.createElement("input", {
						className: Object(m.a)(ye.a.input, {
							[ye.a.isEmpty]: !!r
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: b
					}), !a && (r || b.length > 0) && (e ? d.a.createElement(de.a, {
						sizePx: Oe
					}) : d.a.createElement(F.n, {
						className: ye.a.addButton,
						onClick: this.onSubmit
					}, s.fbt._("Add", null, {
						hk: "2fEPi9"
					}))), l && d.a.createElement(ge, {
						className: ye.a.dropdown,
						focusedIndex: o,
						multireddit: n,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: b
					})), 0 === t.length ? d.a.createElement("p", {
						className: ye.a.emptyText
					}, s.fbt._("Try adding some communities to your custom feed!", null, {
						hk: "3Qe2e3"
					})) : (u ? t : p).map(e => d.a.createElement(C.a, Ce({}, e, {
						buttonDisabled: !!i,
						key: e.id,
						isLoading: i === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: te.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: s.fbt._("Remove", null, {
							hk: "s2BRg"
						}),
						useTertiaryButton: !0
					}))), t.length > ve && d.a.createElement("div", {
						className: ye.a.expandButtonContainer
					}, d.a.createElement(F.n, {
						className: ye.a.expandButton,
						onClick: this.onToggleExpand
					}, u ? s.fbt._("show less", null, {
						hk: "Q5bpx"
					}) : s.fbt._("show more", null, {
						hk: "2B9cqo"
					}))))
				}
			}
			var ke = Se(Ie),
				Me = n("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Ne = n.n(Me);
			const Pe = 5,
				Te = Object(c.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: v.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class De extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						memoizedRecommendations: this.props.recommendations,
						recommendationsToExclude: []
					}, this.onRecommendationsRefreshClicked = () => {
						this.setState(e => ({
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, Pe).map(e => e.name)]
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
						this.state.memoizedRecommendations.length < Pe && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: n,
							recommendationsError: i,
							recommendationsPending: r
						},
						state: {
							memoizedRecommendations: o
						}
					} = this;
					return d.a.createElement(C.b, {
						bottomButtonText: s.fbt._("refresh", null, {
							hk: "2qUiWm"
						}),
						className: Ne.a.container,
						communities: o.slice(0, Pe),
						errorMsg: s.fbt._("Couldn't find any recommendations. Try adding more communities first!", null, {
							hk: "3E76C7"
						}),
						isError: !n.length || !!i,
						isLoading: r,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: te.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: s.fbt._("add", null, {
							hk: "3h3fHe"
						}),
						title: s.fbt._("People also added", null, {
							hk: "22fDdF"
						}),
						useTertiaryButton: !0
					})
				}
			}
			var Le = Object(a.b)(Te, (e, t) => ({
					addSubredditRequested: n => {
						Object(B.f)(t.multireddit) && e(Object(se.a)({
							identifier: {
								name: n.name,
								type: n.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: n
						}))
					},
					recommendationsRefreshed: n => {
						Object(B.f)(t.multireddit) && e(Object(se.h)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: n
						}))
					}
				}))(De),
				Fe = n("./src/reddit/components/SidebarContainer/index.tsx"),
				Be = n("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Re = n.n(Be),
				Ue = H.a.div("Component", Re.a),
				Ae = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				He = n("./src/reddit/constants/zIndex.ts"),
				We = n("./src/reddit/controls/TextButton/index.tsx"),
				ze = n("./src/reddit/helpers/trackers/idCard.ts"),
				Ge = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				qe = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ke = n("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Ve = n.n(Ke);

			function Qe() {
				return (Qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Xe = Object(l.a)(e => d.a.createElement(u.c, {
					className: Ve.a.modalContainer
				}, !e.shouldHideHeader && d.a.createElement(u.g, null, d.a.createElement(Ge.a, null, d.a.createElement(u.n, null, e.multireddit.displayText), d.a.createElement(We.a, {
					onClick: e.onCloseModal
				}, d.a.createElement(u.b, null)))), d.a.createElement(u.j, null, d.a.createElement(Y, {
					mode: Z.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && d.a.createElement(We.a, {
					className: Ve.a.closeBtn,
					onClick: e.onCloseModal
				}, d.a.createElement(u.b, null)))),
				Ze = e => d.a.createElement(Xe, Qe({}, e, {
					overlayCustomStyles: {
						zIndex: He.b
					},
					withOverlay: !0
				})),
				Ye = () => d.a.createElement(O.a, null, r()(5, e => d.a.createElement("div", {
					className: Object(m.a)(Ve.a.placeholder, Object(qe.a)({
						isLoading: !0
					})),
					key: e
				}))),
				Je = e => Object(B.f)(e.multireddit) ? Object(B.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? d.a.createElement(ke, {
					multireddit: e.multireddit
				}) : d.a.createElement(M, {
					multireddit: e.multireddit,
					titleText: s.fbt._("Communities in this custom feed", null, {
						hk: "23oj0B"
					})
				}) : d.a.createElement(Ye, null) : d.a.createElement("div", {
					className: Ve.a.detailsContainer
				}, d.a.createElement(Ue, null, e.subredditCategory ? e.subredditCategory.name : s.fbt._("Custom feed details", null, {
					hk: "4Ct8xk"
				})), d.a.createElement(Y, {
					mode: Z.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				$e = Object(c.c)({
					isCurrentUserMultiredditOwner: (e, t) => {
						let {
							multireddit: n
						} = t;
						return Object(B.f)(n) && Object(v.c)(e, n.url)
					}
				}),
				et = Object(a.b)($e, (e, t) => {
					let {
						subredditCategory: n
					} = t;
					return {
						trackSeeMoreClicked: () => e((e, t) => ze.a(t())),
						trackSubredditClicked: t => {
							if (!n) return;
							const s = Object(ue.i)(t);
							e((e, t) => ze.b(t(), s, n.name))
						}
					}
				});
			class tt extends d.a.Component {
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
						multireddit: n,
						multiUsername: s,
						subredditCategory: i
					} = this.props, r = t && n.subredditIds && n.subredditIds.length > 0;
					return d.a.createElement(Fe.a, {
						className: e
					}, d.a.createElement(Je, {
						isCurrentUserMultiredditOwner: t,
						multireddit: n,
						subredditCategory: i,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? d.a.createElement(Ze, {
						multireddit: n,
						subredditCategory: i,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!i
					}) : null, r && d.a.createElement(Le, {
						multireddit: n,
						multiUsername: s
					}), d.a.createElement(Ae.a, null))
				}
			}
			t.a = et(tt)
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
				return O
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
				f = n.n(x);
			const g = c.a.wrapped(u.a, "_Dropdown", f.a),
				E = Object(m.a)(g),
				y = c.a.button("MenuButton", f.a),
				C = c.a.wrapped(b.a, "MenuIcon", f.a),
				O = c.a.wrapped(p.b, "DropdownRow", f.a),
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
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => r.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: _(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(C, null), r.a.createElement(E, {
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
			const f = 10,
				g = x.a.wrapped(l.n, "TertiaryButton", h.a);
			class E extends d.a.Component {
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
						return d.a.createElement(g, {
							onClick: this.onButtonClick
						}, i ? d.a.createElement(m.a, {
							sizePx: f
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
			E.defaultProps = {
				minimizedLength: a.Eb
			}, t.a = E
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
			n.d(t, "b", (function() {
				return k
			})), n.d(t, "a", (function() {
				return N
			}));
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
				f = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = n("./src/reddit/i18n/utils.ts"),
				O = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				w = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				S = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				j = n.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => i.a.createElement(f.a, {
					className: Object(c.a)(j.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: j.a.container
				}, e.isLoading ? i.a.createElement(y.a, {
					className: j.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: j.a.errorMsg
				}, e.errorMsg || Object(C.c)("Something went wrong.")) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(N, I({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(E.n, {
					className: j.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				M = Object(d.c)({
					hideNSFWPref: b.y,
					language: b.O
				}),
				N = Object(r.b)(M)(e => i.a.createElement("div", {
					className: j.a.communityItemContainer
				}, i.a.createElement(v.a, {
					widthRight: g.t
				}, i.a.createElement("div", {
					className: j.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: j.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(O.a, {
					className: j.a.planetIcon,
					"data-redditstyle": !0
				})), i.a.createElement("div", {
					className: j.a.communityDescriptionContainer
				}, i.a.createElement(o.a, {
					className: j.a.communityName,
					to: Object(_.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(_.b)(e.name, e.type)), i.a.createElement("div", {
					className: j.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: j.a.subscriberCount
				}, Object(a.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && i.a.createElement(m.b, {
					flair: {
						type: w.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(y.a, {
					className: Object(c.a)(j.a.communityCta, j.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(E.n, {
					className: Object(c.a)(j.a.communityCta, {
						[j.a.showOnHover]: e.showTertiaryButtonOnHover
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
					className: j.a.communityDescription
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
				f = n.n(x);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (n[s[i]] = e[s[i]])
					}
					return n
				},
				y = e => {
					var {
						className: t,
						children: n,
						title: s
					} = e, i = E(e, ["className", "children", "title"]);
					return o.a.createElement("div", g({
						className: Object(a.a)(f.a.dropdownSection, t)
					}, i), s && o.a.createElement("div", {
						className: f.a.title
					}, s), n)
				},
				C = n("./src/reddit/helpers/name/index.ts"),
				O = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/components/SubredditIcon/index.tsx"),
				w = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Link/index.tsx"),
				S = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				j = n("./src/reddit/icons/svgs/Video/index.tsx"),
				I = n("./src/reddit/layout/row/Inline/index.tsx"),
				k = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				M = n.n(k);
			const N = [{
				type: "text",
				Icon: S.a
			}, {
				type: "images",
				Icon: w.a
			}, {
				type: "videos",
				Icon: j.a
			}, {
				type: "links",
				Icon: _.a
			}];
			var P = e => {
					const {
						allowedPostTypes: t,
						className: n
					} = e;
					return o.a.createElement(I.a, {
						className: Object(a.a)(M.a.rowStyle, n)
					}, N.map(e => {
						let {
							type: n,
							Icon: s
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(M.a.iconWrapper, {
								[M.a.mDisabled]: !t[n]
							})
						}, o.a.createElement(s, null))
					}))
				},
				T = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				D = n.n(T);
			const L = O.a.wrapped(v.b, "subredditIcon", D.a);
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
						className: Object(a.a)(D.a.container, {
							[D.a.mHighlight]: t
						})
					}, n, o.a.createElement("div", {
						className: D.a.main
					}, o.a.createElement("span", {
						className: D.a.title
					}, s), i && o.a.createElement("span", {
						className: D.a.secondary
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
				} = e, r = Object(C.c)(n), d = void 0 !== i ? A(t, i) : void 0, a = o.a.createElement(L, {
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
					} = e, d = Object(C.b)(i), a = void 0 !== r ? z(t, r) : void 0, c = o.a.createElement(L, {
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
				q = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				K = n.n(q);
			const V = Object(d.d)("subredditPicker.noCommunitiesFound"),
				Q = {
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
					return this.props.showNoMatchesCaption && s.push(o.a.createElement(y, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: K.a.noMatches
					}, n && V(n)))), Object(m.a)(t, {
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
						const m = Q[r];
						s.push(o.a.createElement(y, {
							key: r,
							title: m && m(n),
							children: c
						}))
					}), o.a.createElement("div", {
						className: Object(a.a)(K.a.container, this.props.className, {
							[K.a.mIsValid]: this.props.isValid,
							[K.a.mIsVisible]: s.length > 0
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/fromPairs.js"),
				r = n.n(i),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/actions/multireddit/index.ts"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/helpers/trackers/screenview.ts"),
				x = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/reddit/components/LayoutNavigation/index.tsx"),
				E = n("./src/reddit/components/ListingPostList/index.tsx"),
				y = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				C = n("./src/lib/classNames/index.ts"),
				O = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/constants/modals.ts"),
				_ = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				S = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				j = n("./src/reddit/icons/svgs/User/index.tsx"),
				I = n("./src/reddit/models/Multireddit/index.ts"),
				k = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				M = n.n(k);
			const N = Object(a.b)(null, e => ({
					onEditClicked: () => e(Object(v.h)(w.a.MULTIREDDIT_EDIT))
				})),
				P = {
					[I.e.Public]: {
						icon: d.a.createElement(j.a, {
							className: Object(C.a)(M.a.icon, M.a.public)
						}),
						text: s.fbt._("Public", null, {
							hk: "8ZeHp"
						})
					},
					[I.e.Hidden]: {
						icon: d.a.createElement(j.a, {
							className: Object(C.a)(M.a.icon, M.a.public)
						}),
						text: s.fbt._("Hidden", null, {
							hk: "1qlAJf"
						})
					},
					[I.e.Private]: {
						icon: d.a.createElement(S.a, {
							className: Object(C.a)(M.a.icon, M.a.private)
						}),
						text: s.fbt._("Private", null, {
							hk: "2HVerT"
						})
					}
				};
			var T = N(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return d.a.createElement(d.a.Fragment, null, P[t.visibility].icon, P[t.visibility].text, d.a.createElement("button", {
						className: M.a.button,
						onClick: n
					}, d.a.createElement(_.a, {
						className: M.a.pencilIcon
					})))
				}),
				D = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				L = n("./src/reddit/components/RichTextJson/index.tsx"),
				F = n("./src/reddit/constants/postLayout.ts"),
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./src/reddit/helpers/name/index.ts"),
				A = n("./src/reddit/models/Flair/index.ts"),
				H = n("./src/reddit/selectors/multireddit.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/actions/subscription/index.ts"),
				G = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/components/MultiredditTopBar/Button/index.m.less")),
				q = n.n(G);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var V = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (n[s[i]] = e[s[i]])
				}
				return n
			};
			var Q = d.a.memo(e => {
					var {
						className: t,
						onClick: n,
						children: s,
						hoverText: i,
						text: r,
						icon: o
					} = e, a = V(e, ["className", "onClick", "children", "hoverText", "text", "icon"]);
					return d.a.createElement("button", K({
						className: Object(C.a)(t, q.a.button, i ? q.a.withHover : null),
						onClick: n
					}, a), d.a.createElement("span", {
						className: q.a.icon
					}, o), r && d.a.createElement("span", {
						className: q.a.text
					}, r), i && d.a.createElement("span", {
						className: q.a.hoverText
					}, i), s)
				}),
				X = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Y = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				J = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				$ = n("./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less"),
				ee = n.n($);
			const te = Object(a.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(z.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(Z.g)(t.multireddit.url)) : t.sendEvent(Object(Z.d)(t.multireddit.url))
				}
			}));
			var ne = Object(X.c)(te(e => d.a.createElement(Q, {
					className: Object(C.a)(ee.a.button, e.multireddit.isFollowed ? ee.a.isFollowed : null),
					hoverText: e.multireddit.isFollowed ? s.fbt._("Unfollow", null, {
						hk: "PezOE"
					}) : void 0,
					icon: e.multireddit.isFollowed ? d.a.createElement(J.a, null) : d.a.createElement(Y.a, null),
					onClick: e.onFollowClick,
					text: e.multireddit.isFollowed ? s.fbt._("Following", null, {
						hk: "1wsu4d"
					}) : s.fbt._("Follow", null, {
						hk: "1DZLve"
					})
				}))),
				se = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ie = n("./src/reddit/components/OverflowMenu/index.tsx"),
				re = n("./src/reddit/controls/Dropdown/Row.tsx"),
				oe = n("./src/reddit/selectors/activeModalId.ts"),
				de = n("./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less"),
				ae = n.n(de);
			const ce = Object(c.c)({
				isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(oe.a)(e),
				showOwnerButtons: (e, t) => Object(H.c)(e, t.multireddit.url)
			});
			var le = Object(a.b)(ce, (e, t) => ({
					deleteConfirmed: () => e(Object(p.c)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(v.h)(w.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(v.h)(w.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(X.c)(e => {
					const {
						deleteConfirmed: t,
						isConfirmDeleteOpen: n,
						multireddit: i,
						onDuplicateClicked: r,
						onEdit: o,
						sendEvent: a,
						showOwnerButtons: c,
						toggleConfirmDelete: l
					} = e;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(ie.b, {
						className: ae.a.button,
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, c && d.a.createElement(re.b, {
						displayText: s.fbt._("Edit Details", null, {
							hk: "q4B9D"
						}),
						onClick: o
					}), d.a.createElement(re.b, {
						displayText: s.fbt._("Duplicate", null, {
							hk: "4DZaW1"
						}),
						onClick: r
					}), c && d.a.createElement(re.b, {
						className: Object(C.a)(ae.a.warning),
						displayText: s.fbt._("Delete Custom Feed", null, {
							hk: "3QSOzN"
						}),
						onClick: l
					})), n && d.a.createElement(se.a, {
						toggleModal: l,
						onConfirm: t,
						actionText: s.fbt._("Delete", null, {
							hk: "3PGKcp"
						}),
						cancelActionText: s.fbt._("Keep", null, {
							hk: "1nkPG8"
						}),
						headerText: s.fbt._("Delete Custom Feed?", null, {
							hk: "szoK6"
						}),
						modalText: s.fbt._("Are you sure you would like to delete this Custom Feed? This will not affect the communities you have added.", null, {
							hk: "2GGkLQ"
						}),
						trackClick: () => {
							a(Object(Z.a)(i.url))
						},
						withOverlay: !0
					}))
				})),
				me = n("./node_modules/lodash/noop.js"),
				ue = n.n(me),
				pe = n("./src/config.ts"),
				be = n("./src/lib/copyToClipboard/index.ts"),
				he = n("./src/reddit/actions/toaster.ts"),
				xe = n("./src/reddit/actions/tooltip.ts"),
				fe = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ge = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/Share/index.tsx"),
				ye = n("./src/reddit/models/Toast/index.ts"),
				Ce = n("./src/reddit/selectors/tooltip.ts"),
				Oe = n("./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less"),
				ve = n.n(Oe);
			const we = "MULTIREDDIT_TOP_BAR_SHARE",
				_e = Object(fe.a)(ge.a),
				Se = Object(c.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(oe.a)(e),
					isDropdownOpen: Object(Ce.b)(we),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				je = Object(a.b)(Se, (e, t) => ({
					copyLink: () => {
						if (Object(be.a)(pe.a.redditUrl + t.multireddit.url)) {
							const t = Object(he.d)(s.fbt._("Copied link!", null, {
								hk: "2IxdQz"
							}), ye.b.SuccessCommunity);
							e(Object(he.e)(t))
						} else {
							const t = Object(he.d)(s.fbt._("Something went wrong", null, {
								hk: "GmeVt"
							}), ye.b.Error);
							e(Object(he.e)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(xe.h)({
							tooltipId: we
						})), t.sendEvent(Object(Z.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(p.e)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class Ie extends d.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === I.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(I.e.Public)
					}
				}
				render() {
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(Q, {
						className: ve.a.shareMenu,
						disabled: this.props.isUpdatePending,
						icon: d.a.createElement(Ee.a, {
							className: ve.a.shareIcon
						}),
						id: we,
						onClick: this.onShareButtonClick,
						text: s.fbt._("Share", null, {
							hk: "2e7dE3"
						})
					}, d.a.createElement(_e, {
						isOpen: this.props.isDropdownOpen,
						tooltipId: we,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, d.a.createElement(re.b, {
						displayText: s.fbt._("Copy link", null, {
							hk: "1RMEDS"
						}),
						onClick: this.props.copyLink
					}))), this.props.isConfirmPublicOpen && d.a.createElement(se.a, {
						toggleModal: this.props.toggleConfirmPublic,
						onConfirm: this.onMakePublicConfirm,
						actionText: s.fbt._("Make public", null, {
							hk: "2jdbN"
						}),
						headerText: s.fbt._("Make Custom Feed Public?", null, {
							hk: "3UHhCD"
						}),
						modalText: d.a.createElement(d.a.Fragment, null, s.fbt._("This Custom Feed is currently private.", null, {
							hk: "15Ymz2"
						}), d.a.createElement("br", null), d.a.createElement("br", null), s.fbt._("Would you like to make it public so you can share it with other people?", null, {
							hk: "3IbJao"
						})),
						trackClick: ue.a,
						withOverlay: !0
					}))
				}
			}
			var ke = Object(X.c)(je(Ie)),
				Me = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				Ne = n.n(Me);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = Object(c.c)({
				isLoggedIn: W.G,
				layout: (e, t) => F.e[Object(B.M)(e, t)],
				userIsOwner: (e, t) => Object(H.c)(e, t.multireddit.url)
			}), De = Object(a.b)(Te), Le = Object(B.t)(), Fe = {};
			var Be = Le(De(e => d.a.createElement("div", {
					className: Ne.a.container
				}, d.a.createElement("div", {
					className: Object(C.a)(Ne.a.layoutContainer, e.layout === F.d.Card ? Ne.a.layoutCard : null)
				}, d.a.createElement("img", {
					className: Ne.a.icon,
					src: e.multireddit.icon
				}), d.a.createElement("div", {
					className: Ne.a.content
				}, d.a.createElement("div", {
					className: Ne.a.header
				}, d.a.createElement("h1", {
					className: Ne.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && d.a.createElement(O.b, {
					className: Ne.a.flair,
					flair: {
						type: A.f.Nsfw,
						text: "nsfw"
					}
				})), d.a.createElement("div", {
					className: Ne.a.meta
				}, Pe._({
					"*": "{communitiesCount} communities in this custom feed",
					_1: "1 community in this custom feed"
				}, [Pe._plural(e.multireddit.subredditCount, "communitiesCount")], {
					hk: "12Ej7M"
				}), d.a.createElement("span", null, " • "), e.userIsOwner ? d.a.createElement(T, {
					multireddit: e.multireddit
				}) : d.a.createElement(d.a.Fragment, null, Pe._("Curated by {multiredditFeedAuthorLink}", [Pe._param("multiredditFeedAuthorLink", d.a.createElement(R.a, {
					className: Ne.a.usernameLink,
					to: "/".concat(Object(U.c)(Object(I.i)(e.multireddit.url)))
				}, Object(U.c)(Object(I.i)(e.multireddit.url))))], {
					hk: "3AKmgH"
				}))), d.a.createElement("div", {
					className: Ne.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? d.a.createElement(L.a, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: Fe
				}) : d.a.createElement(D.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), d.a.createElement("div", {
					className: Ne.a.actions
				}, !e.userIsOwner && e.isLoggedIn && d.a.createElement(ne, {
					multireddit: e.multireddit
				}), d.a.createElement(ke, {
					multireddit: e.multireddit
				}), e.isLoggedIn && d.a.createElement(le, {
					multireddit: e.multireddit
				})))))),
				Re = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Ue = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ae = n("./src/reddit/models/ContentGate.ts"),
				He = n("./src/reddit/pages/Multireddit/index.m.less"),
				We = n.n(He);
			const ze = e => d.a.createElement("div", {
					className: We.a.emptyMessage
				}, d.a.createElement(Re.a, {
					className: We.a.planetIcon
				}), d.a.createElement("div", {
					className: We.a.emptyMessageText
				}, e.multireddit && 0 !== e.multireddit.subredditCount ? s.fbt._("There are no posts in this custom feed", null, {
					hk: "16ubpi"
				}) : s.fbt._("There are 0 communities in this custom feed", null, {
					hk: "tKC2v"
				}))),
				Ge = Object(B.t)({
					currentMultireddit: B.c,
					pageLayer: e => e
				}),
				qe = (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || l.N.HOT
				},
				Ke = (e, t) => {
					let {
						location: n
					} = t;
					return r()([...Object(m.a)(n.search)])
				},
				Ve = (e, t) => {
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
				Qe = Object(c.a)(qe, Ke, Ve, (e, t, n) => Object(u.a)(n, e, t)),
				Xe = Object(c.a)(Ke, e => {
					const t = b.t in e && e[b.t].toUpperCase();
					return "string" == typeof t && t in l.Qb ? l.Qb[t] : l.Rb
				}),
				Ze = Object(c.c)({
					listingKey: Qe,
					listingName: Ve,
					multireddit: B.d,
					over18Prefs: W.T,
					sort: qe,
					timeSort: Xe
				});
			class Ye extends d.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => d.a.createElement(ze, {
						multireddit: this.props.multireddit
					})
				}
				render() {
					const {
						listingKey: e,
						listingName: t,
						match: {
							params: {
								username: n
							}
						},
						multireddit: s,
						over18Prefs: i,
						sort: r,
						timeSort: o
					} = this.props;
					return s ? s.isNSFW && !i ? d.a.createElement(x.a, {
						contentGateType: Ae.a.NsfwCustomFeed
					}) : d.a.createElement(Ue.a, {
						className: this.props.className,
						content: d.a.createElement(d.a.Fragment, null, d.a.createElement(f.a, null), d.a.createElement(E.a, {
							listingKey: e,
							listingName: t,
							listingViewed: (t, n) => Object(h.d)(e, r, n, t, o),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: s ? d.a.createElement(d.a.Fragment, null, Object(I.f)(s) && d.a.createElement(Be, {
							multireddit: s
						}), d.a.createElement(g.a, {
							sort: r,
							baseUrl: n ? s.url.replace(/\/$/, "") : "/me/m/".concat(s.name),
							timeSort: o
						})) : null,
						fitPageToContent: !0,
						sidebar: s ? d.a.createElement(y.a, {
							className: We.a.sidebar,
							listingKey: e,
							listingName: t,
							multireddit: s,
							multiUsername: n
						}) : null
					}) : d.a.createElement(x.a, {
						contentGateType: Ae.a.CustomFeedDoesNotExist
					})
				}
			}
			const Je = Ge(Object(a.b)(Ze, (e, t) => ({
				onLoadMorePosts: () => e(Object(p.f)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Ye));
			t.default = e => d.a.createElement(Je, e)
		}
	}
]);
//# sourceMappingURL=Multireddit.ad67f7d6952a2732c269.js.map