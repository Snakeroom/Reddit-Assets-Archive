// https://www.redditstatic.com/desktop2x/Geotagging.db5c6d12defc152c14ba.js
// Retrieved at 12/8/2022, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, s) {
			"use strict";
			const n = (e, t, s = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let n, r, a = [];
				return function(...i) {
					return new Promise(o => {
						const c = s.leading && !r;
						clearTimeout(r), r = setTimeout(() => {
							r = null;
							const t = s.leading ? n : e.apply(this, i);
							for (o of a) o(t);
							a = []
						}, t), c ? (n = e.apply(this, i), o(n)) : a.push(o)
					})
				}
			};
			e.exports = n, e.exports.default = n
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/timeAgo/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			var b = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				p = s("./src/config.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/pages/Recap/Components/BananaPill/index.m.less"),
				f = s.n(x);
			var E = e => {
					let {
						ref: t,
						onMouseEnter: s,
						onSetTimer: i,
						onBananaPillClick: o,
						setAltTextWidth: c,
						setTimerByObserver: d
					} = e;
					const l = Object(n.useCallback)(e => {
							if (e) {
								const t = e.clientWidth;
								c(t + 32)
							}
						}, []),
						u = Object(a.e)(g.S),
						m = encodeURIComponent(p.a.redditUrl + "/r/recap"),
						x = p.a.accountManagerOrigin,
						E = u ? "/r/recap" : `${x}/login/?dest=${m}`;
					return r.a.createElement("a", {
						ref: t,
						href: E,
						className: f.a.bananaPill,
						onMouseEnter: s,
						onMouseLeave: i,
						onClick: o
					}, r.a.createElement("img", {
						className: f.a.icon,
						src: `${p.a.assetPath}/img/recap/banana_pill.png`,
						alt: h.fbt._("banana", null, {
							hk: "1fs9mn"
						})
					}), r.a.createElement("span", {
						className: f.a.text
					}, "+1"), h.fbt._("{=Back to Top}", [h.fbt._param("=Back to Top", r.a.createElement("span", {
						ref: l,
						className: f.a.altText
					}, h.fbt._("Back to Top", null, {
						hk: "4BTAZ0"
					})))], {
						hk: "4Foziy"
					}), r.a.createElement(b.a, {
						onChange: d,
						rootMargin: "0px 0px 0px 0px",
						threshold: .5
					}, r.a.createElement("div", null)))
				},
				S = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/helpers/chooseVariant/index.ts");
			const y = e => {
				return Object(_.c)(e, {
					experimentEligibilitySelector: _.a,
					experimentName: S.vf
				}) === S.Qd
			};
			var v = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				O = s("./src/reddit/selectors/recapGame.ts"),
				C = s("./src/reddit/components/BackToTop/index.m.less"),
				j = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: d
				} = e;
				const b = Object(c.b)(),
					p = Object(n.useRef)(null),
					[h, x] = Object(n.useState)(!1),
					[f, S] = Object(n.useState)(),
					[_, C] = Object(n.useState)(),
					[w, P] = Object(n.useState)(0),
					L = Object(a.e)(g.m),
					I = Object(a.e)(y),
					G = Object(a.e)(v.a),
					B = Object(a.e)(O.a),
					F = L ? L.id : "anonymous",
					R = "on" === B.recapGameState,
					M = () => {
						h && C(setTimeout(() => {
							p.current && (p.current.classList.add(j.a.transform), p.current.style.width = `${w}px`)
						}, 4750)), h && S(setTimeout(() => {
							x(!1), Object(u.Ub)(F, !1)
						}, 5e3))
					};
				return Object(n.useEffect)(() => {
					R || setTimeout(() => {
						const e = Object(u.O)(F);
						e ? Object(o.e)(e.lastSeenTime) >= 24 && e.dropSkip === u.a.NONE ? x(!0) : Date.now() >= new Date(2022, 10, 16).getTime() && e.dropSkip !== u.a.THIRD && x(!0) : x(!0)
					})
				}, [F, R]), r.a.createElement("div", {
					className: Object(i.a)(t, j.a.container),
					style: d
				}, h && I && !s && !R ? r.a.createElement(E, {
					ref: p,
					onBananaPillClick: () => {
						f && clearTimeout(f), _ && clearTimeout(_), x(!1), Object(u.Ub)(F, !0), b((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...m.o(e)
						}))())
					},
					onMouseEnter: () => {
						f && clearTimeout(f), _ && clearTimeout(_), p.current && (p.current.classList.remove(j.a.transform), p.current.style.width = "65px")
					},
					onSetTimer: M,
					setAltTextWidth: P,
					setTimerByObserver: e => {
						e.isIntersecting && (M(), b((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...m.o(e)
						}))()))
					}
				}) : r.a.createElement(l.a, k({
					className: j.a.button,
					onClick: () => T(s)
				}, G && {
					priority: l.c.Secondary,
					rplStyle: !0
				}), N._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/hooks/useMounted.ts"),
				u = s("./node_modules/p-debounce/index.js"),
				m = s.n(u),
				b = s("./src/lib/hooks/useOnClickOutside.ts"),
				p = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				x = s("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(n || (n = {}));
			const f = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(h.a)(e, {
							...x,
							variables: t
						})
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (r) {
					return g.c.captureException(r), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var E = s("./src/reddit/hooks/useGqlContext.ts"),
				S = s("./src/reddit/icons/svgs/Location/index.tsx"),
				_ = s("./src/reddit/components/GeoForm/index.m.less"),
				y = s.n(_);

			function v(e) {
				const {
					value: t,
					setValue: s,
					setPlace: n,
					disabled: o,
					onFocus: d,
					sessionId: l,
					className: u
				} = e, b = Object(E.a)(), [h, g] = Object(a.useState)(!1), x = function(e, t, s) {
					const [n, r] = Object(a.useState)([]), i = Object(a.useMemo)(() => m()(s, 300), [s]);
					return Object(a.useEffect)(() => {
						e && t && i(e).then(e => {
							r(e)
						}).catch(() => r([]))
					}, [e]), n
				}(t, h, f(b, l)), {
					highlightValue: _,
					selectedIndex: v,
					onKeyDown: C,
					isClosed: j,
					setClosed: k
				} = function(e, t, s) {
					const [n, r] = Object(a.useState)(-1), [i, o] = Object(a.useState)(!!e.length), [c, d] = Object(a.useState)(void 0);
					return {
						highlightValue: c,
						selectedIndex: n,
						onKeyDown: a => {
							if (a.key === p.b.ArrowDown) {
								const t = Math.min(n + 1, e.length - 1);
								r(t), d(e[t])
							} else if (a.key === p.b.ArrowUp) {
								const t = Math.max(n - 1, -1);
								r(t), d(e[t])
							} else a.key === p.b.Enter && n > -1 ? (r(-1), t(e[n].name), s(e[n]), o(!0), a.preventDefault()) : a.key === p.b.Escape ? (r(-1), o(!0)) : d(void 0)
						},
						isClosed: i,
						setClosed: o
					}
				}(x, s, n), N = `location-input-${l}`;
				return i.a.createElement("div", {
					className: y.a.autocompleteInput
				}, i.a.createElement("label", {
					className: y.a.geoLabel,
					htmlFor: N
				}, i.a.createElement(S.a, {
					className: y.a.locationIcon
				})), i.a.createElement("input", {
					className: Object(c.a)(y.a.geoInput, u),
					name: N,
					disabled: o,
					onKeyDown: C,
					value: _ && _.name || t,
					placeholder: r.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), n(void 0), k(!1)
					},
					onFocus: () => {
						g(!0), d()
					},
					onBlur: () => g(!1)
				}), x.length && !j ? i.a.createElement(O, {
					id: l,
					items: x.map(e => e.name),
					selectedIndex: v,
					selectValue: e => {
						s(x[e].name), n(x[e]), k(!0)
					},
					onClickOutside: () => k(!0)
				}) : null)
			}

			function O(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: r,
					onClickOutside: a
				} = e;
				return Object(b.a)(`autocomplete-dropdown-${t}`, a), i.a.createElement("ul", {
					className: y.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, s.map((e, t) => i.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => r(t),
					className: Object(c.a)({
						[y.a.highlight]: t === n
					})
				}, e)))
			}
			const C = () => {};

			function j(e) {
				const {
					className: t,
					initialValue: s,
					initialPlace: n,
					disabled: u = !1,
					onFocus: m = C,
					onPlace: b = C,
					onValue: p = C,
					inputClassName: h
				} = e, g = Object(l.a)(), [x] = Object(a.useState)(() => Object(o.a)()), [f, E] = Object(a.useState)(s || ""), [S, _] = Object(a.useState)(n);
				return g ? i.a.createElement("form", {
					className: Object(c.a)(y.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == n ? void 0 : n.id) !== (null == S ? void 0 : S.id) && e.onSubmit({
							name: f,
							place: S,
							sessionId: x
						})
					}
				}, i.a.createElement(v, {
					className: h,
					value: f,
					sessionId: x,
					setValue: e => {
						E(e), p(e)
					},
					setPlace: e => {
						_(e), b(e)
					},
					disabled: u,
					onFocus: m
				}), S && S.id !== (null == n ? void 0 : n.id) && i.a.createElement(d.o, {
					className: y.a.submitButton,
					type: "submit",
					disabled: u
				}, r.fbt._("Submit", null, {
					hk: "4aU3dh"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				o = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(o);
			const d = e => r.a.createElement("div", {
				className: Object(a.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(a.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(a.a)(c.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(a.a)(c.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("container", a.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/constants/location.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = s("./src/reddit/selectors/meta.ts"),
				E = s("./src/redditGQL/types.ts"),
				S = s("./src/reddit/components/SidebarFooter/index.m.less"),
				_ = s.n(S);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = c.a.a("Link", _.a), O = Object(i.c)({
				countryCode: f.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: x.a
			}), C = Object(a.b)(O), j = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), k = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: _.a.GreyRereddit
				}, s, !!m.c[t] && r.a.createElement("div", {
					className: _.a.LinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/impressum"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), t === E.j.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: _.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), t === E.j.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: _.a.LinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: _.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = j(C(Object(d.c)(e => {
				const t = Object(a.f)().getState(),
					s = Object(h.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.gd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.gd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.gd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(k, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(v, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: _.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && r.a.createElement("div", {
					className: _.a.LinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/impressum"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === E.j.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: _.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === E.j.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: _.a.LinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: _.a.LinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: _.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: _.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				p = s.n(b),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = c.g[1] + 24,
				f = u.f + 8,
				E = f + 152 + 16,
				S = E + x + 8,
				_ = h.a.div("Container", p.a),
				y = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return o.a.createElement(d.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?f:8}px)`
						}
					}, n))
				}, "BackToTop", p.a),
				v = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: a,
						shouldStickToBottom: i
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(s, {
							[p.a.BottomStickyStyles]: i,
							[p.a.StickyStyles]: !i && a && !r,
							[p.a.StickyStylesFakeOverlay]: !i && !!r
						})
					}, t)
				};
			class O extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > E
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
					}, c.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: a,
							pageLayer: i,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, u = this.state.isAdSticky && !(!t && !n), m = this.state.isBottomSticky;
					return o.a.createElement(_, {
						className: r,
						innerRef: this.setWrapperRef
					}, o.a.createElement(v, {
						isFakeOverlay: s,
						isSticky: u,
						shouldStickToBottom: m
					}, t, n, c, !a && o.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && o.a.createElement(y, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const C = Object(m.v)();
			t.a = C(O)
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				b = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				E = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				S = s.n(E);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = u.a.div("BladeContainer", S.a), v = u.a.wrapped(h.a, "CloseIcon", S.a), O = u.a.div("LoadingTitleContainer", S.a), C = u.a.div("LoadingNavContainer", S.a), j = u.a.div("ShortLoadingNav", S.a), k = u.a.wrapped(p.a, "ThemedChevron", S.a), N = e => {
				let {
					...t
				} = e;
				return i.a.createElement(y, null, i.a.createElement(v, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, _._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(b.o, null, i.a.createElement(O, null, i.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingTitle, t.isLoading && S.a.loading)
				})), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), i.a.createElement(k, null)), i.a.createElement(C, null, i.a.createElement(j, null), i.a.createElement(k, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), i.a.createElement(k, null)), i.a.createElement(C, null, i.a.createElement(j, null), i.a.createElement(k, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), i.a.createElement(k, null)))))
			}, T = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), w = Object(c.c)({
				isEditing: x.i,
				isSubscriptionsPinned: f.c,
				moderatorPermissions: g.n
			});
			t.a = Object(o.b)(w)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(S.a.Container, e.isSubscriptionsPinned && S.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(T, {
					subredditId: e.subredditId
				})) : i.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return i
			})), s.d(t, "p", (function() {
				return o
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "j", (function() {
				return _
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = s.n(r);
			const i = n.a.section("FormPage", a.a),
				o = n.a.h1("HomePageTitle", a.a),
				c = n.a.button("HomePageBreadcrumb", a.a),
				d = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				u = n.a.div("FormPageSection", a.a),
				m = n.a.div("FormGroup", a.a),
				b = n.a.h2("FormGroupTitle", a.a),
				p = n.a.div("FormElement", a.a),
				h = n.a.div("FormGroupDescription", a.a),
				g = n.a.div("FormItem", a.a),
				x = n.a.h3("FormElementTitle", a.a),
				f = n.a.div("FormElementDescription", a.a),
				E = n.a.div("FormElementError", a.a),
				S = n.a.div("FormElementSubGroup", a.a),
				_ = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/index.tsx"),
				E = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				y = s("./src/reddit/helpers/widgets/index.tsx"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				j = s.n(C);
			const k = Object(h.c)({
				isLoggedIn: O.S,
				subreddit: v.Y,
				subredditAboutInfo: v.y
			});
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: n
						} = this.props;
						if (!s) return;
						const r = Object(y.c)(s, n);
						t(Object(u.h)(e, r))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? r.a.createElement("div", {
						className: Object(i.a)(j.a.Container, e)
					}, r.a.createElement(x.b, {
						className: j.a.Icon,
						subredditOrProfile: s
					}), r.a.createElement("div", {
						className: j.a.Text
					}, r.a.createElement(S.default, {
						className: j.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, r.a.createElement("div", {
						className: j.a.Name
					}, Object(_.d)(s.displayText || s.name)), r.a.createElement("div", {
						className: j.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(f.a, {
						border: !1,
						className: Object(i.a)(j.a.SubscribeButton, {
							[j.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: E.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var T = Object(p.b)(k)(Object(d.c)(N)),
				w = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var P = e => {
					const {
						className: t
					} = e, s = Object(w.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(i.a)(j.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(i.a)(j.a.Icon, j.a.placeholder, s)
					}), r.a.createElement("div", {
						className: j.a.Text
					}, r.a.createElement("div", {
						className: j.a.Link
					}, r.a.createElement("div", {
						className: Object(i.a)(j.a.Name, j.a.placeholder, s)
					}), r.a.createElement("div", {
						className: Object(i.a)(j.a.Members, j.a.placeholder, s)
					}))), r.a.createElement("div", {
						className: j.a.SubscribeButton
					}))
				},
				L = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = s.n(L);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = 8, F = Array.from({
				length: B
			}).map((e, t) => r.a.createElement(P, {
				className: I.a.Subreddit,
				key: t
			})), R = {
				enabled: !0,
				id: "xd_103",
				layout: m.c.Large,
				surface: m.d.Topic,
				unitName: m.h,
				unitType: m.e.SubredditListing,
				url: ""
			};
			class M extends r.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.q)(R)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, n = t.slice(0, B);
					return r.a.createElement(o.a, {
						className: Object(i.a)(I.a.Container, e)
					}, r.a.createElement("div", {
						className: I.a.Title
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, G._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: I.a.SubredditList
					}, n.length > 0 ? n.map(e => r.a.createElement(T, {
						className: I.a.Subreddit,
						discoveryUnit: R,
						key: e,
						subredditId: e
					})) : F), t.length > B && r.a.createElement(a.a, {
						to: s
					}, r.a.createElement(l.r, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, G._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(M)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				i = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				o = s("./src/reddit/components/TopicSidebar/index.m.less"),
				c = s.n(o);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return r.a.createElement(a.a, {
					className: s
				}, t, r.a.createElement(i.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				p = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const S = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(E.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(E.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = S(e);
					return Object(f.f)(t)
				},
				v = e => {
					const t = _(e);
					return Object(f.f)(t)
				};
			var O = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = s.n(O);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.v)(), N = Object(a.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(x.fb)(e);
					return n || r
				},
				nigtmode: x.fb,
				subredditId: u.o,
				topPostVariant: h.d
			}));
			class T extends r.a.Component {
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
					return e.backgroundColor = S(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: a,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, h = s ? C.a.widgetContentOnly : C.a.widgetContent, g = !n && this.props.styles, x = g ? this.getWidgetBackgroundStyles() : {}, f = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: n,
							[C.a.clickable]: !!c,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: x
					}, u && r.a.createElement("div", {
						className: Object(o.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: i,
						style: {
							...f,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(o.a)(C.a.widgetTitle, b)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), a), r.a.createElement("div", {
						className: Object(o.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(N(Object(c.a)(Object(l.c)(T))))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/redditGQL/operations/SetSubredditGeoPlace.json");
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
			t.a = async (e, t) => Object(n.a)(e, {
				...r,
				variables: a(t)
			})
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = s.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				o = e => Object(n.a)(a.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, a = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const o = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: a.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: a.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => t(!0), []), e
			}

			function a() {
				const e = Object(n.useRef)(!0);
				return Object(n.useEffect)(() => () => {
					e.current = !1
				}, []), e
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(o.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/pages/Geotagging/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/Geotagging/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "GEOTAGGING_DISMISSED", (function() {
				return Z
			})), s.d(t, "Geotagging", (function() {
				return $
			})), s.d(t, "default", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				o = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				c = s("./src/reddit/components/TopicSidebar/index.tsx"),
				d = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				u = s("./src/redditGQL/operations/GeoContributableSubreddits.json"),
				m = async e => {
					const t = await Object(l.a)(e, u),
						{
							geoContributableSubreddits: s
						} = t.body.data;
					return {
						...t,
						body: {
							data: {
								geoContributableSubreddits: s.edges.map(e => e.node)
							}
						}
					}
				}, b = s("./src/reddit/helpers/localStorage/index.ts"), p = s("./src/reddit/helpers/trackers/screenview.ts"), h = s("./src/reddit/hooks/useGqlContext.ts"), g = s("./src/reddit/hooks/useTracking.ts"), x = s("./src/reddit/layout/page/Listing/index.tsx"), f = s("./node_modules/react-router-dom/esm/react-router-dom.js"), E = s("./src/reddit/controls/Button/index.tsx"), S = s("./src/reddit/pages/Geotagging/index.m.less"), _ = s.n(S);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function v() {
				return r.a.createElement("div", {
					className: _.a.done
				}, r.a.createElement("p", {
					className: _.a.headerText1
				}, y._("Done and done!", null, {
					hk: "1RzJEG"
				})), r.a.createElement("p", {
					className: _.a.headerText2
				}, y._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), r.a.createElement(f.a, {
					to: "/"
				}, r.a.createElement(E.l, null, "Go Home")))
			}
			var O = s("./src/config.ts");
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function j() {
				return r.a.createElement("div", {
					className: _.a.header
				}, r.a.createElement("img", {
					className: _.a.headerImage,
					src: `${O.a.assetPath}/img/mtm-snoo.png`
				}), r.a.createElement("div", null, r.a.createElement("p", {
					className: _.a.headerText1
				}, C._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), r.a.createElement("p", {
					className: _.a.headerText2
				}, C._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var k = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				T = s("./src/reddit/components/SubredditIcon/index.tsx"),
				w = s("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				P = s("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				L = async (e, t) => Object(l.a)(e, {
					...P,
					variables: Object(w.b)(t)
				}), I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const G = "crowdsource",
				B = {
					pageType: "crowdsource_feed_geo"
				},
				F = {
					pageType: "geo_entry"
				},
				R = e => () => ({
					source: G,
					noun: "skip",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: B
				}),
				M = e => () => ({
					source: G,
					noun: "location_field",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: F
				}),
				D = Q("select_location"),
				A = Q("confirm_location"),
				W = Q("undo_location"),
				H = J("verify_location"),
				z = J("reject_location");

			function Q(e) {
				return (t, s) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...F,
						reason: s
					}
				})
			}

			function J(e) {
				return (t, s) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...B,
						reason: s
					}
				})
			}
			var K = s("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				q = s("./src/reddit/models/Toast/index.ts");
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function V(e) {
				const t = Object(b.C)(Z) || [];
				t.push(e), Object(b.Kb)(Z, t)
			}

			function Y(e) {
				const {
					subreddit: t,
					onClose: s
				} = e, i = Object(h.a)(), o = Object(a.d)(), [c, d] = Object(n.useState)(void 0), [l, u] = Object(n.useState)(!1), [m, b] = Object(n.useState)(!1), {
					isClosed: p,
					close: x
				} = function() {
					const [e, t] = Object(n.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), S = Object(g.a)();

				function y() {
					o(Object(k.f)({
						kind: q.b.SuccessMod,
						text: U._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : r.a.createElement("div", {
					className: _.a.subredditGeotag
				}, r.a.createElement("div", {
					className: _.a.subredditTitle
				}, r.a.createElement(T.b, {
					className: _.a.icon,
					subredditOrProfile: Object(I.a)(t),
					linkTo: t.path
				}), r.a.createElement(f.a, {
					to: t.path
				}, r.a.createElement("div", {
					className: _.a.title
				}, t.prefixedName)), r.a.createElement("button", {
					className: _.a.dismiss,
					onClick: function() {
						V(t.id), S(R(t)), x(), s(t.id)
					}
				}, r.a.createElement(K.a, null))), r.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? r.a.createElement("div", {
					className: _.a.questionContainer
				}, r.a.createElement("div", {
					className: _.a.question
				}, U._("Is this community specific to {place}?", [U._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), r.a.createElement(E.o, {
					className: _.a.rejectButton,
					onClick: function() {
						b(!0), S(z(t, t.geoPlace.id))
					}
				}, "No"), r.a.createElement(E.l, {
					className: _.a.verifyButton,
					onClick: function() {
						V(t.id), S(H(t, t.geoPlace.id)), x(), s(t.id), y()
					}
				}, "Yes")) : r.a.createElement(N.a, {
					disabled: l,
					onFocus: () => S(M(t)),
					onPlace: function(e) {
						c && !e && S(W(t, c.id)), d(e), e && S(D(t, e.id))
					},
					onSubmit: async function(e) {
						let {
							place: n,
							sessionId: r
						} = e;
						if (!n) return;
						u(!0);
						const a = await L(i(), {
							subredditId: t.id,
							placeId: n.id,
							source: n.source,
							sessionId: r
						});
						if (u(!1), !a.ok) return o(Object(k.f)({
							kind: q.b.Error,
							text: U._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						S(A(t, n.id)), x(), s(t.id), y()
					}
				}))
			}
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = "geotagging-dismissed";

			function $() {
				const {
					error: e,
					loading: t,
					subreddits: s
				} = function() {
					const [e, t] = Object(n.useState)(!1), [s, r] = Object(n.useState)(!0), [a, i] = Object(n.useState)([]), o = Object(h.a)();
					return Object(n.useEffect)(() => {
						m(o()).then(e => {
							const t = e.body;
							r(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const s = Object(b.C)(Z) || [];
							i((t.data.geoContributableSubreddits || []).filter(e => !s.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [o]), {
						error: e,
						loading: s,
						subreddits: a
					}
				}(), [a, o] = Object(n.useState)(0);

				function c(e) {
					o(a + 1)
				}
				return e ? r.a.createElement("div", null, r.a.createElement(j, null), X._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null), r.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				})) : a >= s.length ? r.a.createElement(v, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null), s.map(e => r.a.createElement(Y, {
					key: e.id,
					subreddit: e,
					onClose: c
				})))
			}

			function ee(e) {
				const t = Object(a.e)(e => {
						var t, s;
						const n = null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.topics) || void 0 === s ? void 0 : s.models;
						if (!n) return;
						const r = Object.keys(n).find(e => "coronavirus" === n[e].slug);
						return n[r]
					}),
					s = Object(g.a)();
				return Object(n.useEffect)(() => {
					s(Object(p.d)())
				}, []), r.a.createElement(o.a, null, r.a.createElement(x.a, {
					className: _.a.Container,
					content: r.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, r.a.createElement(c.a, {
						key: "right",
						className: _.a.SidebarRight,
						listingName: "geotagging"
					}, t && r.a.createElement(d.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicUrl: t.url
					}))]
				}))
			}
		},
		"./src/reddit/pages/Recap/Components/BananaPill/index.m.less": function(e, t, s) {
			e.exports = {
				bananaPill: "luTPauejzUjrGQIJmBJMt",
				transform: "T2syrzYJQrK2MbUsJ1ZIs",
				icon: "_2DvitLaA7xyv9xsNJWP3t4",
				text: "BE8_V9hkF52QnKXfBAL2e",
				altText: "_2RhoXA1ZtjfGQFhaJvg2Hu",
				bouncing: "_1bv5w7rQU4LQw-ZO3MYGBc"
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				o = s("./src/reddit/selectors/meta.ts"),
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(o.h)(e) && Object(a.f)(e),
					experimentName: n.qc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(a.f)(e),
					experimentName: n.pc
				}), i.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/redditGQL/operations/GeoContributableSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"4dfcd615cce5"}')
		},
		"./src/redditGQL/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"8a89fd7c7db1"}')
		},
		"./src/redditGQL/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/redditGQL/operations/SuggestSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"aea8f624d4b7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.db5c6d12defc152c14ba.js.map