// https://www.redditstatic.com/desktop2x/SocialLinks.b173df30a6f2fc86dbcd.js
// Retrieved at 6/23/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SocialLinks"], {
		"./src/reddit/actions/socialLinks/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/components/SocialLinks/constants.ts"),
				i = n("./src/reddit/components/SocialLinks/helpers.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/DeleteSocialLinks.json"),
				a = n("./src/redditGQL/operations/SetSocialLinks.json"),
				l = n("./src/redditGQL/operations/SocialLinks.json"),
				d = n("./src/redditGQL/operations/UpdateSocialLinks.json");
			var u = n("./src/reddit/helpers/name/index.ts"),
				b = n("./src/reddit/helpers/structuredStyles/validators.ts"),
				k = n("./src/reddit/selectors/socialLinks.ts"),
				m = n("./src/redditGQL/types.ts"),
				f = n("./src/reddit/actions/socialLinks/constants.ts"),
				h = n("./src/lib/initializeClient/installReducer.ts"),
				p = n("./src/reddit/reducers/features/socialLinks/index.ts");
			Object(h.a)({
				features: {
					socialLinks: p.a
				}
			});
			const L = Object(s.a)(f.a),
				O = Object(s.a)(f.b),
				S = Object(s.a)(f.c),
				y = Object(s.a)(f.d),
				j = Object(s.a)(f.e),
				v = e => {
					let {
						username: t
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: o
						} = s;
						const i = n();
						if (!!Object(k.c)(i, t)) return;
						e(O());
						const c = await (async (e, t) => {
							return await Object(r.a)(e, {
								...l,
								variables: t
							})
						})(o(), {
							username: t
						});
						if (c.ok && c.body) {
							const {
								data: n
							} = c.body, s = ((e, t) => {
								var n;
								const s = {},
									{
										redditorInfoByName: o
									} = t;
								if ("Redditor" !== (null == o ? void 0 : o.__typename)) return;
								const i = e.toLowerCase(),
									r = (null === (n = o.profile) || void 0 === n ? void 0 : n.socialLinks) || [];
								return s[i] = r, s
							})(t, n);
							s && e(L(s))
						}
					}
				},
				_ = e => {
					let t, n, s, {
						socialLinkOption: i,
						rawHandle: r,
						rawTitle: c,
						url: a
					} = e;
					if (i.placeholderUrl) {
						const e = null == a ? void 0 : a.trim();
						if (!(e && Object(b.g)(e) === b.d.Valid)) throw new Error(o.f);
						t = e, n = null == c ? void 0 : c.trim()
					} else if (i.socialLinkType === m.z.Reddit) {
						const e = null == r ? void 0 : r.trim();
						if (!(e && Object(u.e)(e) && e && e.length >= o.h && !/\s/.test(e))) throw new Error(o.e);
						s = e
					} else s = null == r ? void 0 : r.trim();
					return {
						outboundUrl: t,
						title: n,
						handle: s,
						type: i.socialLinkType
					}
				},
				w = (e, t) => async (n, s, c) => {
					let {
						gqlContext: l
					} = c;
					const d = s(),
						{
							socialLinkOption: u,
							rawHandle: b,
							rawTitle: m,
							url: f
						} = t;
					if (!Object(k.a)(d, e)) return;
					const h = _({
							socialLinkOption: u,
							rawHandle: b,
							rawTitle: m,
							url: f
						}),
						p = await (async (e, t) => {
							return await Object(r.a)(e, {
								...a,
								variables: t
							})
						})(l(), {
							input: {
								socialLinks: [h]
							}
						});
					if (p.ok && p.body) {
						const {
							data: t
						} = p.body, {
							errors: s,
							ok: r,
							socialLinks: c
						} = t.setSocialLinks;
						if (r && !s) {
							const t = ((e, t) => {
								if (0 === e.length) return;
								return {
									username: t.toLowerCase(),
									addedSocialLink: e[e.length - 1]
								}
							})(c, e);
							if (!t) throw new Error(o.b);
							n(S(t))
						} else Object(i.f)(s)
					} else {
						const {
							errors: e
						} = p.body;
						Object(i.f)(e)
					}
				}, x = (e, t) => async (n, s, o) => {
					let {
						gqlContext: i
					} = o;
					const a = s();
					if (!Object(k.a)(a, t)) return;
					const l = await (async (e, t) => {
						return await Object(r.a)(e, {
							...c,
							variables: t
						})
					})(i(), {
						input: {
							socialLinkIds: [e]
						}
					});
					if (l.ok && l.body) {
						const s = ((e, t) => {
							return {
								username: e.toLowerCase(),
								removedSocialLinkId: t
							}
						})(t, e);
						n(y(s))
					}
				}, g = (e, t, n) => async (s, c, a) => {
					let {
						gqlContext: l
					} = a;
					const u = c(),
						{
							socialLinkOption: b,
							rawHandle: m,
							rawTitle: f,
							url: h
						} = n;
					if (!Object(k.a)(u, t)) return;
					const p = {
							..._({
								socialLinkOption: b,
								rawHandle: m,
								rawTitle: f,
								url: h
							}),
							id: e
						},
						L = await (async (e, t) => {
							return await Object(r.a)(e, {
								...d,
								variables: t
							})
						})(l(), {
							input: {
								socialLinks: [p]
							}
						});
					if (L.ok && L.body) {
						const {
							data: n
						} = L.body, {
							errors: r,
							ok: c,
							socialLinks: a
						} = n.updateSocialLinks;
						if (c && !r) {
							const n = ((e, t, n) => {
								const s = t.find(t => t.id === e);
								if (s) return {
									username: n.toLowerCase(),
									updatedSocialLink: s
								}
							})(e, a, t);
							if (!n) throw new Error(o.b);
							s(j(n))
						} else Object(i.f)(r)
					} else {
						const {
							errors: e
						} = L.body;
						Object(i.f)(e)
					}
				}
		},
		"./src/reddit/components/SocialLinks/SocialLinkButton.m.less": function(e, t, n) {
			e.exports = {
				button: "_3hew1NnzwygOKDNQDKp6R4",
				disabled: "_14cQ6UaNZthfUjDzaM1xHq",
				socialLinkIcon: "_2GEwqmoavetftIcfZO6bBP"
			}
		},
		"./src/reddit/components/SocialLinks/SocialLinkButton.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/SocialLinks/helpers.ts"),
				c = n("./src/reddit/components/SocialLinks/SocialLinkButton.m.less"),
				a = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					buttonKey: t,
					children: n,
					className: c,
					disabled: l,
					onClick: d,
					socialLinkType: u
				} = e;
				const [b, k] = Object(s.useState)();
				return Object(s.useEffect)(() => {
					if (u) {
						const e = Object(r.b)(u);
						k(e)
					}
				}, [u]), o.a.createElement("div", {
					key: t,
					className: Object(i.a)(a.a.button, {
						[a.a.disabled]: l
					}, c),
					onClick: l ? void 0 : d
				}, u && b && o.a.createElement("img", {
					className: a.a.socialLinkIcon,
					src: b
				}), n)
			}
		},
		"./src/reddit/components/SocialLinks/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/config.ts");
			const i = 5,
				r = "add_social_link_modal_id",
				c = `${o.a.assetPath}/img/social-links/`,
				a = s.fbt._("@username", null, {
					hk: "3HC3Kd"
				}),
				l = s.fbt._("Display text", null, {
					hk: "1SlS6x"
				}),
				d = s.fbt._("Looks like this isn’t a valid URL. Double-check your spelling.", null, {
					hk: "1vKDvL"
				}),
				u = s.fbt._("This community or user doesn’t exist. Double-check your spelling.", null, {
					hk: "tKrv9"
				}),
				b = s.fbt._("There was a problem updating your account. Please try again.", null, {
					hk: "1i5tn1"
				}),
				k = 5
		},
		"./src/reddit/components/SocialLinks/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/redditGQL/types.ts"),
				o = n("./src/reddit/components/SocialLinks/constants.ts");
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js"), r = (e, t) => {
				let n, r = i._("{name of social link type}", [i._param("name of social link type", e)], {
						hk: "2ivfx8"
					}),
					c = o.i;
				switch (t) {
					case s.z.BuyMeACoffee:
						r = i._("Buy Me a Coffee", null, {
							hk: "ZTbP7"
						});
						break;
					case s.z.CashApp:
						r = i._("Cash App", null, {
							hk: "1aorWN"
						});
						break;
					case s.z.Custom:
						r = i._("Custom URL", null, {
							hk: "2gveOb"
						}), c = o.c, n = i._("https://website.com", null, {
							hk: "1Kp5fF"
						});
						break;
					case s.z.Reddit:
						c = i._("r/community, u/user", null, {
							hk: "45oRo"
						});
						break;
					case s.z.Discord:
						c = o.c, n = i._("https://discord.com", null, {
							hk: "6gcLP"
						});
						break;
					case s.z.Facebook:
						c = o.c, n = i._("https://facebook.com", null, {
							hk: "2v99jB"
						});
						break;
					case s.z.Kickstarter:
						c = o.c, n = i._("https://kickstarter.com", null, {
							hk: "132LC7"
						});
						break;
					case s.z.Shopify:
						c = o.c, n = i._("https://shopify.com", null, {
							hk: "2X1G4f"
						});
						break;
					case s.z.Spotify:
						c = o.c, n = i._("https://spotify.com", null, {
							hk: "3dZORp"
						});
						break;
					case s.z.Substack:
						c = o.c, n = i._("https://substack.com", null, {
							hk: "1zQgL1"
						});
						break;
					case s.z.Youtube:
						r = i._("YouTube", null, {
							hk: "12AQG6"
						}), c = o.c, n = i._("https://youtube.com", null, {
							hk: "4FZQ2O"
						});
						break;
					case s.z.Onlyfans:
						r = i._("OnlyFans", null, {
							hk: "1JRN4C"
						});
						break;
					case s.z.Paypal:
						r = i._("PayPal", null, {
							hk: "3n7Il"
						});
						break;
					case s.z.Soundcloud:
						r = i._("SoundCloud", null, {
							hk: "34Xo4u"
						});
						break;
					case s.z.Tiktok:
						r = i._("TikTok", null, {
							hk: "tajib"
						})
				}
				return {
					name: r,
					placeholderDisplayText: c,
					placeholderUrl: n,
					socialLinkType: t
				}
			}, c = () => {
				return Object.keys(s.z).map(e => {
					const t = s.z[e];
					return r(e, t)
				}).filter(e => e.socialLinkType !== s.z.Indiegogo)
			}, a = e => {
				const t = e.toLowerCase();
				return `${o.d}${t}.png`
			}, l = e => {
				for (const t in s.z)
					if (s.z[t] === e) return t;
				return ""
			}, d = e => {
				let t = o.b;
				throw e && e.length > 0 && (t = e[0].message), new Error(t)
			}, u = e => e && e.startsWith("@") ? e.slice(1) : e
		},
		"./src/reddit/components/SocialLinks/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1C8GVFvM_jBPE1fU9R1RV8",
				box: "_3c9JLlNxIIe5XLRVIlTx1j",
				caretDown: "KQqYfP_xd0-91CSjyXsTq",
				socialLinks: "QVtpm4z0mTELUZB0dQ8Yv",
				addIcon: "_2s0bDJFN76mRu9XROx_tRr",
				removeIcon: "_3lIJSmTOV4YW8OZxVLia_"
			}
		},
		"./src/reddit/components/SocialLinks/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/icons.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/socialLinks/index.ts"),
				u = n("./src/reddit/constants/localStorage.ts"),
				b = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				k = n("./src/reddit/hooks/useLocalStorage.ts"),
				m = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/selectors/activeModal.ts"),
				L = n("./src/reddit/selectors/socialLinks.ts"),
				O = n("./src/telemetry/models/Outbound.ts"),
				S = n("./src/reddit/components/SocialLinks/constants.ts"),
				y = n("./src/reddit/components/SocialLinks/SocialLinkButton.tsx"),
				j = n("./src/reddit/components/SocialLinks/index.m.less"),
				v = n.n(j);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = Object(s.a)({
				resolved: {},
				chunkName: () => "AddSocialLinkModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("AddSocialLinkModal").then(n.bind(null, "./src/reddit/components/SocialLinks/AddSocialLinkModal.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SocialLinks/AddSocialLinkModal.tsx"
				}
			}), x = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-controls-InternalLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/controls/InternalLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/controls/InternalLink/index.tsx"
				}
			}), g = e => {
				let {
					isCreationEnabled: t,
					isOwnUserSettings: n,
					socialLinksClassName: s,
					username: j
				} = e;
				const g = Object(r.d)(),
					T = Object(f.a)(),
					[C, N] = Object(o.useState)(),
					[E, z] = Object(o.useState)(0);
				Object(o.useEffect)(() => {
					g(Object(d.c)({
						username: j
					}))
				}, [g, j]);
				const A = Object(r.e)(e => Object(L.c)(e, j)),
					I = Object(o.useCallback)(() => {
						N(void 0), g(Object(l.h)(S.a));
						const e = ((null == A ? void 0 : A.length) || 0) + 1;
						z(e);
						const t = n ? "profile_settings" : "profile";
						T(Object(b.a)(t))
					}, [g, n, T, A]),
					D = Object(r.e)(e => Object(p.c)(S.a)(e)),
					U = Object(m.a)(),
					R = Object(o.useCallback)((e, s) => {
						const o = s + 1,
							i = {
								socialLinkType: e.type,
								outboundUrl: e.outboundUrl,
								name: e.handle || e.title,
								position: o,
								isNew: !1
							};
						if (t && n) N(e), z(o), g(Object(l.h)(S.a)), T(Object(b.c)(i));
						else {
							const {
								outboundUrl: t
							} = e;
							window.open(t, "_blank"), T(Object(b.f)(i)), U(t, O.SourceElement.SocialLink, void 0, void 0, e.type)
						}
					}, [g, t, n, T, U]),
					Q = Object(o.useCallback)((e, t, n) => {
						const {
							handle: s,
							id: o,
							outboundUrl: i,
							title: r,
							type: c
						} = t, a = n + 1;
						e.stopPropagation(), g(Object(d.b)(o, j)), T(Object(b.b)({
							socialLinkType: c,
							outboundUrl: i,
							name: s || r,
							position: a,
							isNew: !1
						}))
					}, [g, T, j]),
					[P] = Object(k.a)(u.b.SOCIAL_LINKS_ADDED, !1),
					V = t && (n || A && A.length < S.g),
					G = t && !n && A && A.length >= S.g,
					q = t && !n && !P && A && 0 === A.length;
				return i.a.createElement(i.a.Fragment, null, q && i.a.createElement("div", {
					className: v.a.tooltip
				}, i.a.createElement("div", {
					className: v.a.box
				}, _._("NEW! Add your social links", null, {
					hk: "12vdsF"
				})), i.a.createElement("div", {
					className: v.a.caretDown
				})), i.a.createElement("div", {
					className: Object(c.a)(v.a.socialLinks, s)
				}, A && A.map((e, t) => i.a.createElement(y.a, {
					key: e.id,
					socialLinkType: e.type,
					onClick: () => R(e, t)
				}, e.handle || e.title, n && i.a.createElement(h.a, {
					name: a.a.clear,
					className: v.a.removeIcon,
					onClick: n => Q(n, e, t)
				}))), V && i.a.createElement(y.a, {
					disabled: !A || A.length >= S.g,
					onClick: I
				}, i.a.createElement(h.a, {
					name: a.a.add,
					className: v.a.addIcon
				}), _._("Add social link", null, {
					hk: "4hANO2"
				})), G && i.a.createElement(x, {
					to: "/settings/profile"
				}, i.a.createElement(y.a, null, _._("Edit", null, {
					hk: "3MTv8r"
				}))), t && D && i.a.createElement(w, {
					socialLink: C,
					socialLinkPosition: E,
					username: j,
					withOverlay: !0
				})))
			};
			t.default = g
		},
		"./src/reddit/helpers/structuredStyles/validators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			}));
			var s = n("./src/lib/linkMatchers/index.ts");
			var o;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(o || (o = {}));
			const i = e => {
					if (!e) return o.NoUrl;
					if (e.length < 4) return o.TooShort;
					const t = Object(s.h)(s.f, e);
					return t ? "ftp:" === t.schema ? o.Invalid : "mailto:" === t.schema ? o.Invalid : o.Valid : o.Invalid
				},
				r = 20;
			var c;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(c || (c = {}));
			const a = e => e ? e.length > r ? c.TooLong : c.Valid : c.TooShort;
			var l;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(l || (l = {}));
			const d = e => e.length ? l.Valid : l.TooShort
		},
		"./src/redditGQL/operations/DeleteSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"7eb2600cd927"}')
		},
		"./src/redditGQL/operations/SetSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"5064afb1fbe2"}')
		},
		"./src/redditGQL/operations/SocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"11a239b07f86"}')
		},
		"./src/redditGQL/operations/UpdateSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"c558e604581f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SocialLinks.b173df30a6f2fc86dbcd.js.map