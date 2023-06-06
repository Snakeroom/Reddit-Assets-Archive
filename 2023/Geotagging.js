// https://www.redditstatic.com/desktop2x/Geotagging.10a44815dc9c7b4361a7.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, n) {
			"use strict";
			const s = (e, t, n = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let s, r, a = [];
				return function(...o) {
					return new Promise(i => {
						const c = n.leading && !r;
						clearTimeout(r), r = setTimeout(() => {
							r = null;
							const t = n.leading ? s : e.apply(this, o);
							for (i of a) i(t);
							a = []
						}, t), c ? (s = e.apply(this, o), i(s)) : a.push(i)
					})
				}
			};
			e.exports = s, e.exports.default = s
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				const i = Object(a.e)(d.a);
				return r.a.createElement("div", {
					className: Object(o.a)(t, u.a.container),
					style: s
				}, r.a.createElement(c.a, m({
					className: u.a.button,
					onClick: () => p(n)
				}, i && {
					priority: c.c.Secondary,
					rplStyle: !0
				}), b._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/hooks/useMounted.ts"),
				u = n("./node_modules/p-debounce/index.js"),
				m = n.n(u),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				p = n("./src/reddit/constants/keycodes.ts"),
				g = n("./src/lib/makeGqlRequest/index.ts"),
				h = n("./src/lib/sentry/index.ts"),
				f = n("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(s || (s = {}));
			const x = (e, t) => async n => {
				let s;
				try {
					s = await async function(e, t) {
						return Object(g.a)(e, {
							...f,
							variables: t
						})
					}(e(), {
						query: n,
						sessionId: t
					})
				} catch (r) {
					return h.c.captureException(r), []
				}
				return s.body.data.geoPlaceAutocomplete || []
			};
			var _ = n("./src/reddit/hooks/useGqlContext.ts"),
				S = n("./src/reddit/icons/svgs/Location/index.tsx"),
				y = n("./src/reddit/components/GeoForm/index.m.less"),
				E = n.n(y);

			function C(e) {
				const {
					value: t,
					setValue: n,
					setPlace: s,
					disabled: i,
					onFocus: d,
					sessionId: l,
					className: u
				} = e, b = Object(_.a)(), [g, h] = Object(a.useState)(!1), f = function(e, t, n) {
					const [s, r] = Object(a.useState)([]), o = Object(a.useMemo)(() => m()(n, 300), [n]);
					return Object(a.useEffect)(() => {
						e && t && o(e).then(e => {
							r(e)
						}).catch(() => r([]))
					}, [e]), s
				}(t, g, x(b, l)), {
					highlightValue: y,
					selectedIndex: C,
					onKeyDown: O,
					isClosed: v,
					setClosed: k
				} = function(e, t, n) {
					const [s, r] = Object(a.useState)(-1), [o, i] = Object(a.useState)(!!e.length), [c, d] = Object(a.useState)(void 0);
					return {
						highlightValue: c,
						selectedIndex: s,
						onKeyDown: a => {
							if (a.key === p.b.ArrowDown) {
								const t = Math.min(s + 1, e.length - 1);
								r(t), d(e[t])
							} else if (a.key === p.b.ArrowUp) {
								const t = Math.max(s - 1, -1);
								r(t), d(e[t])
							} else a.key === p.b.Enter && s > -1 ? (r(-1), t(e[s].name), n(e[s]), i(!0), a.preventDefault()) : a.key === p.b.Escape ? (r(-1), i(!0)) : d(void 0)
						},
						isClosed: o,
						setClosed: i
					}
				}(f, n, s), N = `location-input-${l}`;
				return o.a.createElement("div", {
					className: E.a.autocompleteInput
				}, o.a.createElement("label", {
					className: E.a.geoLabel,
					htmlFor: N
				}, o.a.createElement(S.a, {
					className: E.a.locationIcon
				})), o.a.createElement("input", {
					className: Object(c.a)(E.a.geoInput, u),
					name: N,
					disabled: i,
					onKeyDown: O,
					value: y && y.name || t,
					placeholder: r.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						n(e.currentTarget.value), s(void 0), k(!1)
					},
					onFocus: () => {
						h(!0), d()
					},
					onBlur: () => h(!1)
				}), f.length && !v ? o.a.createElement(j, {
					id: l,
					items: f.map(e => e.name),
					selectedIndex: C,
					selectValue: e => {
						n(f[e].name), s(f[e]), k(!0)
					},
					onClickOutside: () => k(!0)
				}) : null)
			}

			function j(e) {
				const {
					id: t,
					items: n,
					selectedIndex: s,
					selectValue: r,
					onClickOutside: a
				} = e;
				return Object(b.a)(`autocomplete-dropdown-${t}`, a), o.a.createElement("ul", {
					className: E.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, n.map((e, t) => o.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => r(t),
					className: Object(c.a)({
						[E.a.highlight]: t === s
					})
				}, e)))
			}
			const O = () => {};

			function v(e) {
				const {
					className: t,
					initialValue: n,
					initialPlace: s,
					disabled: u = !1,
					onFocus: m = O,
					onPlace: b = O,
					onValue: p = O,
					inputClassName: g
				} = e, h = Object(l.a)(), [f] = Object(a.useState)(() => Object(i.a)()), [x, _] = Object(a.useState)(n || ""), [S, y] = Object(a.useState)(s);
				return h ? o.a.createElement("form", {
					className: Object(c.a)(E.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == s ? void 0 : s.id) !== (null == S ? void 0 : S.id) && e.onSubmit({
							name: x,
							place: S,
							sessionId: f
						})
					}
				}, o.a.createElement(C, {
					className: g,
					value: x,
					sessionId: f,
					setValue: e => {
						_(e), p(e)
					},
					setPlace: e => {
						y(e), b(e)
					},
					disabled: u,
					onFocus: m
				}), S && S.id !== (null == s ? void 0 : s.id) && o.a.createElement(d.o, {
					className: E.a.submitButton,
					type: "submit",
					disabled: u
				}, r.fbt._("Submit", null, {
					hk: "4aU3dh"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, n) {
			e.exports = {
				geoForm: "dnC9V9HtkUxsmza-vEXgC",
				geoLabel: "_3T9bJ1ttSXUxb9rxZI9jMC",
				locationIcon: "_2Jm0p-hd1-KYZJI9iP3n6",
				geoInput: "_2O28-fZaU1kYnMmsiMKw3y",
				autocompleteInput: "oP84ZJjEgYLr154hrXHd8",
				autocompleteDropdown: "_1pwsnPyclgUCyjdfT0xWmx",
				highlight: "_1kfPE4TrjHsTFgvmrF1s33"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, n) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = n.n(d),
				u = n("./src/reddit/constants/componentTestIds.ts"),
				m = n("./src/reddit/contexts/ApiContext.tsx"),
				b = n("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				p = n("./src/reddit/constants/tracking.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const h = "bottom_sheet";
			var f;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(f || (f = {}));
			var x = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/icons/svgs/Close/index.tsx"),
				S = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				E = n("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				C = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/redditGQL/types.ts");
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				const {
					gqlContext: t
				} = e, n = Object(a.d)(), d = Object(x.a)(), m = Object(a.e)(C.b), [y, E] = Object(s.useState)(!1), [v, k] = Object(s.useState)({}), [N, P] = Object(s.useState)({}), [w, T] = Object(s.useState)([]);
				let L = ["es"];
				const I = Object(s.useCallback)(async () => {
					const e = await Object(b.b)(t);
					e && (P(e.languages), T(e.preferences), E(!0))
				}, [t]);
				Object(s.useEffect)(() => {
					I()
				}, [I]);
				const G = e => {
						d("skip" === e ? (e => t => ({
							...Object(g.o)(t),
							source: h,
							action: p.c.CLICK,
							noun: f.SKIP,
							actionInfo: {
								...Object(g.d)(t),
								type: e
							}
						}))(m) : (e => t => ({
							...Object(g.o)(t),
							source: h,
							action: p.c.CLICK,
							noun: f.LATER,
							actionInfo: {
								...Object(g.d)(t),
								type: e
							}
						}))(m)), E(!1), n(Object(i.c)({
							experience: j.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					B = () => {
						const e = Object.keys(v).join();
						d(((e, t) => n => ({
							...Object(g.o)(n),
							source: h,
							action: p.c.CLICK,
							noun: f.ADD,
							actionInfo: {
								...Object(g.d)(n),
								reason: t,
								type: e
							}
						}))(m, e)), (async () => {
							var e;
							const s = v;
							w.map(e => s[e] = !0);
							const r = await Object(b.d)(t, s);
							(null === (e = null == r ? void 0 : r.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? n(Object(c.f)({
								kind: S.b.SuccessCommunity,
								text: O._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): n(Object(c.f)({
								kind: S.b.Error,
								text: O._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), E(!1), n(Object(i.c)({
							experience: j.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return L = L.filter(e => !w.includes(e)), y && 0 !== L.length ? (d((e => t => ({
					...Object(g.o)(t),
					source: h,
					action: p.c.VIEW,
					noun: p.b.SCREEN,
					actionInfo: {
						...Object(g.d)(t),
						type: e
					}
				}))(m)), n(Object(i.d)(j.cb.LanguagePreferenceBottomSheet)), r.a.createElement("div", {
					className: l.a.PromptContainer
				}, r.a.createElement("div", {
					className: l.a.PromptClose
				}, r.a.createElement(_.a, {
					className: l.a.Close,
					onClick: () => G("skip"),
					"data-testid": u.e
				})), r.a.createElement("div", {
					className: l.a.PromptTitle
				}, O._("See content in more languages", null, {
					hk: "4uyzS1"
				})), r.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, O._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === L.length ? r.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = v;
						t[e] = !0, k(t), B()
					})(L[0]),
					"data-testid": L[0]
				}, O._("Add {language}", [O._param("language", N[L[0]])], {
					hk: "2emiHZ"
				})) : null, r.a.createElement("div", {
					className: Object(o.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => G("later")
				}, O._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(m.b)(e => {
				var t;
				const {
					gqlContext: n
				} = e, s = Object(a.f)().getState();
				return (null === (t = Object(a.e)(e => Object(y.a)(e, {
					experience: j.cb.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(E.b)(s) ? r.a.createElement(v, {
					gqlContext: n
				}) : null
			})
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = n.n(i);
			const d = e => r.a.createElement("div", {
				className: Object(a.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.subreddtiIcon, Object(o.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.title, Object(o.b)(e))
			}), r.a.createElement("div", {
				className: Object(a.a)(c.a.author, Object(o.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(a.a)(c.a.description, Object(o.b)(e))
			})), r.a.createElement("div", {
				className: Object(a.a)(c.a.buttonContainer, Object(o.a)(e))
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("container", a.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				_ = n("./src/reddit/selectors/meta.ts"),
				S = n("./src/redditGQL/types.ts"),
				y = n("./src/reddit/components/SidebarFooter/index.m.less"),
				E = n.n(y);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = c.a.a("Link", E.a), O = Object(o.c)({
				countryCode: _.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), v = Object(a.b)(O), k = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), N = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: E.a.GreyRereddit
				}, n, !!b.c[t] && r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), t === S.j.De && r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), t === S.j.De && r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: E.a.Copyright
				}, C._("Reddit, Inc. © {year}. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = k(v(Object(l.c)(e => {
				const t = Object(a.f)().getState(),
					n = Object(h.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.md.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.md.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.md.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(N, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(j, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(g.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(u.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!b.c[e.countryCode] && r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === S.j.De && r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === S.j.De && r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: E.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: E.a.Copyright
				}, C._("Reddit, Inc. © {year}. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), r.a.createElement(d.a, null))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				p = n.n(b),
				g = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = c.g[1] + 24,
				x = u.f + 8,
				_ = x + 152 + 16,
				S = _ + f + 8,
				y = g.a.div("Container", p.a),
				E = g.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return i.a.createElement(d.a, h({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?x:8}px)`
						}
					}, s))
				}, "BackToTop", p.a),
				C = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: a,
						shouldStickToBottom: o
					} = e;
					return i.a.createElement("div", {
						className: Object(s.a)(n, {
							[p.a.BottomStickyStyles]: o,
							[p.a.StickyStyles]: !o && a && !r,
							[p.a.StickyStylesFakeOverlay]: !o && !!r
						})
					}, t)
				};
			class j extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > _
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.M), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: a,
							pageLayer: o,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return i.a.createElement(y, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(C, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, c, !a && i.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && i.a.createElement(E, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const O = Object(m.v)();
			t.a = O(j)
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				S = n.n(_);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", S.a), C = u.a.wrapped(g.a, "CloseIcon", S.a), j = u.a.div("LoadingTitleContainer", S.a), O = u.a.div("LoadingNavContainer", S.a), v = u.a.div("ShortLoadingNav", S.a), k = u.a.wrapped(p.a, "ThemedChevron", S.a), N = e => {
				let {
					...t
				} = e;
				return o.a.createElement(E, null, o.a.createElement(C, null), o.a.createElement(b.k, null, o.a.createElement(b.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(b.o, null, o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingTitle, t.isLoading && S.a.loading)
				})), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement(v, null), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement(v, null), o.a.createElement(k, null)), o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), o.a.createElement(k, null)))))
			}, P = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), w = Object(c.c)({
				isEditing: f.i,
				isSubscriptionsPinned: x.c,
				moderatorPermissions: h.n
			});
			t.a = Object(i.b)(w)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(S.a.Container, e.isSubscriptionsPinned && S.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(P, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
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
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "j", (function() {
				return y
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				i = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				d = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				b = s.a.h2("FormGroupTitle", a.a),
				p = s.a.div("FormElement", a.a),
				g = s.a.div("FormGroupDescription", a.a),
				h = s.a.div("FormItem", a.a),
				f = s.a.h3("FormElementTitle", a.a),
				x = s.a.div("FormElementDescription", a.a),
				_ = s.a.div("FormElementError", a.a),
				S = s.a.div("FormElementSubGroup", a.a),
				y = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1wPkPx87vMrQd9QW79-Ar7",
				container: "_1wPkPx87vMrQd9QW79-Ar7",
				SubscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				subscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				Icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				placeholder: "_3D4_gGvFd4EDWKz4ueGNqu",
				Text: "_1O31lH4tpbJwYBKW2NmwXi",
				text: "_1O31lH4tpbJwYBKW2NmwXi",
				Link: "_3IPnsAjx27sBpv53euPc2G",
				link: "_3IPnsAjx27sBpv53euPc2G",
				Name: "_34EJPxBGGouPQbmc0Z-LmB",
				name: "_34EJPxBGGouPQbmc0Z-LmB",
				Members: "_106YuYJJ3FE95a4NDxNg6k",
				members: "_106YuYJJ3FE95a4NDxNg6k",
				hidden: "_2zUZgN0OEXf0LMxsR-7L6l"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_3T1Jtiyqnd1l1V9fcLf20J",
				title: "_3T1Jtiyqnd1l1V9fcLf20J",
				SubredditList: "_34o8T80OdRMyo2wr1IA3t6",
				subredditList: "_34o8T80OdRMyo2wr1IA3t6",
				Subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				SeeMore: "_24xqgM4izvcvOOe3qlOjF",
				seeMore: "_24xqgM4izvcvOOe3qlOjF"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./node_modules/react-redux/es/index.js"),
				g = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/components/SubscribeButton/index.tsx"),
				_ = n("./src/reddit/constants/posts.ts"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				E = n("./src/reddit/helpers/widgets/index.tsx"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				v = n.n(O);
			const k = Object(g.c)({
				isLoggedIn: j.S,
				subreddit: C.X,
				subredditAboutInfo: C.y
			});
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: n,
							subredditAboutInfo: s
						} = this.props;
						if (!n) return;
						const r = Object(E.c)(n, s);
						t(Object(u.h)(e, r))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: n
					} = this.props;
					return n ? r.a.createElement("div", {
						className: Object(o.a)(v.a.Container, e)
					}, r.a.createElement(f.b, {
						className: v.a.Icon,
						subredditOrProfile: n
					}), r.a.createElement("div", {
						className: v.a.Text
					}, r.a.createElement(S.default, {
						className: v.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: n.url
					}, r.a.createElement("div", {
						className: v.a.Name
					}, Object(y.d)(n.displayText || n.name)), r.a.createElement("div", {
						className: v.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(n.subscribers, "subscribers count", Object(h.b)(n.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(x.a, {
						border: !1,
						className: Object(o.a)(v.a.SubscribeButton, {
							[v.a.hidden]: !t
						}),
						identifier: {
							name: n.name,
							type: _.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var P = Object(p.b)(k)(Object(d.c)(N)),
				w = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var T = e => {
					const {
						className: t
					} = e, n = Object(w.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(o.a)(v.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(o.a)(v.a.Icon, v.a.placeholder, n)
					}), r.a.createElement("div", {
						className: v.a.Text
					}, r.a.createElement("div", {
						className: v.a.Link
					}, r.a.createElement("div", {
						className: Object(o.a)(v.a.Name, v.a.placeholder, n)
					}), r.a.createElement("div", {
						className: Object(o.a)(v.a.Members, v.a.placeholder, n)
					}))), r.a.createElement("div", {
						className: v.a.SubscribeButton
					}))
				},
				L = n("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = n.n(L);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = 8, R = Array.from({
				length: B
			}).map((e, t) => r.a.createElement(T, {
				className: I.a.Subreddit,
				key: t
			})), F = {
				enabled: !0,
				id: "xd_103",
				layout: m.c.Large,
				surface: m.d.Topic,
				unitName: m.h,
				unitType: m.e.SubredditListing,
				url: ""
			};
			class D extends r.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.q)(F)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: n
					} = this.props, s = t.slice(0, B);
					return r.a.createElement(i.a, {
						className: Object(o.a)(I.a.Container, e)
					}, r.a.createElement("div", {
						className: I.a.Title
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, G._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: I.a.SubredditList
					}, s.length > 0 ? s.map(e => r.a.createElement(P, {
						className: I.a.Subreddit,
						discoveryUnit: F,
						key: e,
						subredditId: e
					})) : R), t.length > B && r.a.createElement(a.a, {
						to: n
					}, r.a.createElement(l.r, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, G._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(D)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/SidebarContainer/index.tsx"),
				o = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				i = n("./src/reddit/components/TopicSidebar/index.m.less"),
				c = n.n(i);
			t.a = e => {
				const {
					children: t,
					className: n
				} = e;
				return r.a.createElement(a.a, {
					className: n
				}, t, r.a.createElement(o.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/widgets.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = n("./src/reddit/selectors/experiments/topPosts.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const S = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = S(e);
					return Object(x.f)(t)
				},
				C = e => {
					const t = y(e);
					return Object(x.f)(t)
				};
			var j = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = n.n(j);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.v)(), N = Object(a.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.o)(e, t) || void 0,
						s = t.redditStyle || Object(h.l)(e, {
							subredditId: n
						}),
						r = Object(f.fb)(e);
					return s || r
				},
				nigtmode: f.fb,
				subredditId: u.o,
				topPostVariant: g.d
			}));
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = S(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: a,
						id: o,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, g = n ? O.a.widgetContentOnly : O.a.widgetContent, h = !s && this.props.styles, f = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: s,
							[O.a.clickable]: !!c,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: c,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(i.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!l
						}),
						id: o,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(O.a.widgetTitle, b)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), a), r.a.createElement("div", {
						className: Object(i.a)(g, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, v._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(N(Object(c.a)(Object(l.c)(P))))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			}));
			const s = "comment",
				r = "comment-submission-form-markdown",
				a = "comment-submission-form-richtext",
				o = "comments-page-link-num-comments",
				i = "language-prompt-close",
				c = "post-content"
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const a = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(s.a)(e, {
				...r,
				variables: a(t)
			})
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeGqlRequest/index.ts");
			var r, a = n("./src/redditGQL/operations/LanguageSelections.json"),
				o = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const i = (e, t) => {
					const n = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...a,
						variables: n
					})
				},
				c = async e => {
					const t = await i(r.ALL_KEY, e());
					if (!t.ok) return null;
					const n = t.body,
						s = null == n ? void 0 : n.data;
					return s ? (e => {
						const t = {},
							n = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: n
						}
					})(s) : null
				}, d = async (e, t, n) => {
					const s = await i(e, t());
					if (!s.ok) return null;
					const a = s.body,
						o = null == a ? void 0 : a.data;
					if (o) {
						return ((e, t, n) => {
							let s = null,
								r = [];
							const a = [],
								o = [],
								i = {},
								c = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									c[e] = !0
								})
							}
							for (let d = 0; d < t.suggested.length; d++) {
								const r = t.suggested[d];
								if (i[r.isoCode] = !0, n === r.isoCode) s = r;
								else {
									if (!e && c[r.isoCode]) continue; {
										const t = !!(e || !e && c[r.isoCode]);
										a.push({
											selected: t,
											...r
										})
									}
								}
							}
							for (let d = 0; d < t.all.length; d++) {
								const a = t.all[d];
								a.isoCode === n ? (s = a, o.push({
									selected: !0,
									...a
								})) : !e && c[a.isoCode] ? o.push({
									selected: !0,
									...a
								}) : i[a.isoCode] || r.push({
									selected: !(e || !c[a.isoCode]),
									...a
								})
							}
							if (r = a.concat(r), null === s) {
								const e = n.split("-").shift();
								for (let t = 0; t < r.length; t++)
									if (r[t].isoCode === e) {
										s = r[t], r.splice(t, 1);
										break
									}
							}
							return s && ((e || !e && c[s.isoCode]) && (s.selected = !0), r.unshift(s)), e || (r = o.concat(r)), {
								sortedLanguages: r
							}
						})(e === r.TOP_KEYS, o, n)
					}
					return null
				}, l = async (e, t) => {
					const n = await ((e, t) => {
						const n = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(s.a)(e, {
							...o,
							variables: n
						})
					})(e(), Object.keys(t));
					if (!n.ok) return null;
					const r = n.body;
					return null == r ? void 0 : r.data
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.yb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				c = (e, t) => n => ({
					source: r.POST,
					action: a.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.K(n, e),
					subreddit: o.lb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.o(n)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: a.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: s.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => t(!0), []), e
			}

			function a() {
				const e = Object(s.useRef)(!0);
				return Object(s.useEffect)(() => () => {
					e.current = !1
				}, []), e
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					height: "20",
					width: "20",
					viewBox: "0 0 20 20"
				}, r.a.createElement("path", {
					d: "M11.41 10l4.29-4.29a1 1 0 0 0-1.41-1.41L10 8.59l-4.29-4.3a1 1 0 0 0-1.42 1.42L8.59 10l-4.3 4.29A1 1 0 1 0 5.7 15.7l4.3-4.29 4.29 4.29a1 1 0 0 0 1.41-1.41z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-4 -2)"
			}))
		},
		"./src/reddit/pages/Geotagging/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2yH_bZH7lpry9aDdEOc6oE",
				container: "_2yH_bZH7lpry9aDdEOc6oE",
				SidebarRight: "_1dAUfZ1jfT9iRqliJIp-g3",
				sidebarRight: "_1dAUfZ1jfT9iRqliJIp-g3",
				done: "_3fIqwculXO1m-X4qXfzMmj",
				header: "trdNFblRGU53TIgWs55-C",
				subredditGeotag: "_1FsT8cGpWm7niRd2fv6aTQ",
				headerImage: "_1epe3P_wwaFpIK8ErFkLeH",
				headerText1: "_3ghPv2k3rgilTXQ67uCYwl",
				headerText2: "_2TPDK7lDyPkuawyt7XPwoz",
				subredditTitle: "_2lduP2futOZoCSpMSHOYaq",
				icon: "_1MYfbl4HkxnO1N7P9qTUFS",
				title: "_1e-KMyhUQkoIqpI-lPvQBy",
				dismiss: "_1ovT9aLdqmbMQwMh8DRQXY",
				questionContainer: "_7hcGNi6hdkuZsvP96n7fF",
				question: "_5tRl6ocijGVd3flWmGP2N",
				rejectButton: "_24ychlJYsrb8mjSdvHXVQH",
				verifyButton: "s-JUfFbwWSUXJPLJ9yPQt",
				geoForm: "lR6NprBUjfHeHVxUVrnby",
				geoLabel: "_2yCQrkg9Kg2bgZg9q8LIfr",
				submitButton: "_3SpSQIYv5V3BmZN4ZOZcST"
			}
		},
		"./src/reddit/pages/Geotagging/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "GEOTAGGING_DISMISSED", (function() {
				return Z
			})), n.d(t, "Geotagging", (function() {
				return $
			})), n.d(t, "default", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				c = n("./src/reddit/components/TopicSidebar/index.tsx"),
				d = n("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/redditGQL/operations/GeoContributableSubreddits.json"),
				m = async e => {
					const t = await Object(l.a)(e, u),
						{
							geoContributableSubreddits: n
						} = t.body.data;
					return {
						...t,
						body: {
							data: {
								geoContributableSubreddits: n.edges.map(e => e.node)
							}
						}
					}
				}, b = n("./src/reddit/helpers/localStorage/index.ts"), p = n("./src/reddit/helpers/trackers/screenview.ts"), g = n("./src/reddit/hooks/useGqlContext.ts"), h = n("./src/reddit/hooks/useTracking.ts"), f = n("./src/reddit/layout/page/Listing/index.tsx"), x = n("./node_modules/react-router-dom/esm/react-router-dom.js"), _ = n("./src/reddit/controls/Button/index.tsx"), S = n("./src/reddit/pages/Geotagging/index.m.less"), y = n.n(S);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function C() {
				return r.a.createElement("div", {
					className: y.a.done
				}, r.a.createElement("p", {
					className: y.a.headerText1
				}, E._("Done and done!", null, {
					hk: "1RzJEG"
				})), r.a.createElement("p", {
					className: y.a.headerText2
				}, E._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), r.a.createElement(x.a, {
					to: "/"
				}, r.a.createElement(_.l, null, "Go Home")))
			}
			var j = n("./src/config.ts");
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function v() {
				return r.a.createElement("div", {
					className: y.a.header
				}, r.a.createElement("img", {
					className: y.a.headerImage,
					src: `${j.a.assetPath}/img/mtm-snoo.png`
				}), r.a.createElement("div", null, r.a.createElement("p", {
					className: y.a.headerText1
				}, O._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), r.a.createElement("p", {
					className: y.a.headerText2
				}, O._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var k = n("./src/reddit/actions/toaster.ts"),
				N = n("./src/reddit/components/GeoForm/GeoForm.tsx"),
				P = n("./src/reddit/components/SubredditIcon/index.tsx"),
				w = n("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				T = n("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				L = async (e, t) => Object(l.a)(e, {
					...T,
					variables: Object(w.b)(t)
				}), I = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const G = "crowdsource",
				B = {
					pageType: "crowdsource_feed_geo"
				},
				R = {
					pageType: "geo_entry"
				},
				F = e => () => ({
					source: G,
					noun: "skip",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: B
				}),
				D = e => () => ({
					source: G,
					noun: "location_field",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: R
				}),
				A = q("select_location"),
				M = q("confirm_location"),
				W = q("undo_location"),
				H = J("verify_location"),
				z = J("reject_location");

			function q(e) {
				return (t, n) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...R,
						reason: n
					}
				})
			}

			function J(e) {
				return (t, n) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...B,
						reason: n
					}
				})
			}
			var K = n("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				Q = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Y(e) {
				const t = Object(b.G)(Z) || [];
				t.push(e), Object(b.Lb)(Z, t)
			}

			function V(e) {
				const {
					subreddit: t,
					onClose: n
				} = e, o = Object(g.a)(), i = Object(a.d)(), [c, d] = Object(s.useState)(void 0), [l, u] = Object(s.useState)(!1), [m, b] = Object(s.useState)(!1), {
					isClosed: p,
					close: f
				} = function() {
					const [e, t] = Object(s.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), S = Object(h.a)();

				function E() {
					i(Object(k.f)({
						kind: Q.b.SuccessMod,
						text: U._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : r.a.createElement("div", {
					className: y.a.subredditGeotag
				}, r.a.createElement("div", {
					className: y.a.subredditTitle
				}, r.a.createElement(P.b, {
					className: y.a.icon,
					subredditOrProfile: Object(I.a)(t),
					linkTo: t.path
				}), r.a.createElement(x.a, {
					to: t.path
				}, r.a.createElement("div", {
					className: y.a.title
				}, t.prefixedName)), r.a.createElement("button", {
					className: y.a.dismiss,
					onClick: function() {
						Y(t.id), S(F(t)), f(), n(t.id)
					}
				}, r.a.createElement(K.a, null))), r.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? r.a.createElement("div", {
					className: y.a.questionContainer
				}, r.a.createElement("div", {
					className: y.a.question
				}, U._("Is this community specific to {place}?", [U._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), r.a.createElement(_.o, {
					className: y.a.rejectButton,
					onClick: function() {
						b(!0), S(z(t, t.geoPlace.id))
					}
				}, "No"), r.a.createElement(_.l, {
					className: y.a.verifyButton,
					onClick: function() {
						Y(t.id), S(H(t, t.geoPlace.id)), f(), n(t.id), E()
					}
				}, "Yes")) : r.a.createElement(N.a, {
					disabled: l,
					onFocus: () => S(D(t)),
					onPlace: function(e) {
						c && !e && S(W(t, c.id)), d(e), e && S(A(t, e.id))
					},
					onSubmit: async function(e) {
						let {
							place: s,
							sessionId: r
						} = e;
						if (!s) return;
						u(!0);
						const a = await L(o(), {
							subredditId: t.id,
							placeId: s.id,
							source: s.source,
							sessionId: r
						});
						if (u(!1), !a.ok) return i(Object(k.f)({
							kind: Q.b.Error,
							text: U._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						S(M(t, s.id)), f(), n(t.id), E()
					}
				}))
			}
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = "geotagging-dismissed";

			function $() {
				const {
					error: e,
					loading: t,
					subreddits: n
				} = function() {
					const [e, t] = Object(s.useState)(!1), [n, r] = Object(s.useState)(!0), [a, o] = Object(s.useState)([]), i = Object(g.a)();
					return Object(s.useEffect)(() => {
						m(i()).then(e => {
							const t = e.body;
							r(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const n = Object(b.G)(Z) || [];
							o((t.data.geoContributableSubreddits || []).filter(e => !n.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [i]), {
						error: e,
						loading: n,
						subreddits: a
					}
				}(), [a, i] = Object(s.useState)(0);

				function c(e) {
					i(a + 1)
				}
				return e ? r.a.createElement("div", null, r.a.createElement(v, null), X._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(v, null), r.a.createElement(o.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(o.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(o.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(o.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(o.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				})) : a >= n.length ? r.a.createElement(C, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(v, null), n.map(e => r.a.createElement(V, {
					key: e.id,
					subreddit: e,
					onClose: c
				})))
			}

			function ee(e) {
				const t = Object(a.e)(e => {
						var t, n;
						const s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.topics) || void 0 === n ? void 0 : n.models;
						if (!s) return;
						const r = Object.keys(s).find(e => "coronavirus" === s[e].slug);
						return s[r]
					}),
					n = Object(h.a)();
				return Object(s.useEffect)(() => {
					n(Object(p.d)())
				}, []), r.a.createElement(i.a, null, r.a.createElement(f.a, {
					className: y.a.Container,
					content: r.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, r.a.createElement(c.a, {
						key: "right",
						className: y.a.SidebarRight,
						listingName: "geotagging"
					}, t && r.a.createElement(d.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicUrl: t.url
					}))]
				}))
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				c = n("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(a.f)(e),
					experimentName: s.rc
				}), o.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(a.f)(e),
					experimentName: s.qc
				}), o.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/redditGQL/operations/GeoContributableSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"4dfcd615cce5"}')
		},
		"./src/redditGQL/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"8a89fd7c7db1"}')
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/redditGQL/operations/SuggestSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"aea8f624d4b7"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.10a44815dc9c7b4361a7.js.map