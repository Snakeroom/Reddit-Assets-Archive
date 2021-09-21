// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.eb885f667262343c2936.js
// Retrieved at 9/21/2021, 10:00:08 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const a = (e, t, s) => (n = (() => {})) => o => {
				const r = m(o.target, o.currentTarget),
					c = p(o.target, o.currentTarget);
				r && s && t && (u(o.target, o.currentTarget, l.anchors) ? s(t(e, r, c)) : s(s => {
					const n = t(e, r, c)(s);
					let o;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						o = t
					}
					return {
						...n,
						actionInfo: Object(i.previousPageActionInfo)(s, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && n(o)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(n.useCallback)(a(i, r, s), [i, r, s]);
					return o.a.createElement(e, c({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: o
				} = e;
				let i = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(n.D)(e)
				} else i = Object(n.D)(e);
				const c = r.a.parse(i),
					a = c.path || "",
					d = a.length > 7 ? a.substring(0, 7) + "..." : a;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = [o.mc, o.ob, o.A, o.P, o.jb, o.Pb],
				i = {
					[o.Pb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.jb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.P]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.A]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.ob]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.mc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[o.Pb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.jb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.P]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.A]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.ob]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.mc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.ob]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.mc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e, t = !1, s = !1) {
				const a = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.mc]: "",
						[o.ob]: "",
						[o.A]: "",
						[o.P]: "",
						[o.jb]: "",
						[o.Pb]: ""
					};
				let u = d - a;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? c : i)[n](e).toString()), u -= e * n
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				a = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return n
			})), s.d(t, "g", (function() {
				return o
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "l", (function() {
				return i
			})), s.d(t, "k", (function() {
				return c
			})), s.d(t, "j", (function() {
				return a
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			const n = "SUBREDDIT__FLAIRED_USERS_PENDING",
				o = "SUBREDDIT__FLAIRED_USERS_LOADED",
				r = "SUBREDDIT__FLAIRED_USERS_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "s", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "p", (function() {
				return h
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "o", (function() {
				return T
			}));
			const n = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				a = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				E = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				_ = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				f = "REORDER_COLLECTION_PENDING",
				S = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				T = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "l", (function() {
				return D
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "h", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				E = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				_ = Object(o.a)(b),
				f = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				x = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				h = Object(o.a)(S),
				O = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				I = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(o.a)(T),
				v = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				y = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				P = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				g = Object(o.a)(y),
				j = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				L = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				A = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				k = Object(o.a)(L),
				N = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				R = Object(o.a)(A),
				D = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
						i = Object(p.Q)(r, {
							subredditId: e
						}).name;
					s(E());
					const c = await Object(a.k)(o(), i, t);
					if (c.ok) {
						s(_({
							subredditId: e,
							isEnabled: t
						}))
					} else s(f());
					return c.ok
				}, F = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
						i = Object(p.Q)(r, {
							subredditId: e
						}).name;
					s(x());
					const c = await Object(a.j)(o(), t, l.d.LinkFlair, i);
					if (c.ok) {
						s(h({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(O());
					return c.ok
				}, M = (e, t) => async (s, o, {
					apiContext: r
				}) => {
					const d = o(),
						m = Object(p.Q)(d, {
							subredditId: t
						}).name;
					s(I());
					const b = await Object(a.f)(r(), e, m, l.d.LinkFlair);
					let E = b.ok && !(b.body && !1 === b.body.success);
					if (E) {
						const n = b.body;
						if (s(C({
								subredditId: t,
								template: n
							})), n.id) {
							const o = e.styleTemplate,
								r = d.structuredStyles.flairTemplate.models[n.id];
							o ? E = await s(Object(i.d)(t, n.id, o)) : r && (E = await s(Object(i.c)(t, n.id)))
						}
					}
					if (E) {
						const e = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(c.f)(e))
					} else {
						s(v());
						const o = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(c.f)(o))
					}
					return E
				}, w = (e, t) => async (s, o, {
					apiContext: r
				}) => {
					const i = o(),
						d = Object(p.Q)(i, {
							subredditId: t
						}).name;
					if (s(P()), (await Object(a.b)(r(), e, d)).ok) {
						s(g({
							subredditId: t,
							templateId: e
						}));
						const o = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(c.f)(o))
					} else {
						s(j());
						const o = Object(c.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(e, t));
						s(Object(c.f)(o))
					}
				}, U = (e, t) => async (s, o, {
					apiContext: r
				}) => {
					const i = o(),
						d = Object(m.d)(i, {
							subredditId: t
						}).templateIds,
						b = Object(p.Q)(i, {
							subredditId: t
						}).name;
					if (s(k({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(r(), b, l.d.LinkFlair, e)).ok) {
						s(N());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(c.f)(e))
					} else {
						s(R({
							subredditId: t,
							templateIds: d
						}));
						const o = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(c.f)(o))
					}
				}, B = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: s
				}) => async (n, o, {
					apiContext: i
				}) => {
					const c = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && c.unshift(t), n(Object(r.R)({
							[e.id]: {
								flair: c
							}
						})), t) {
						const n = Object(d.g)(t);
						Object(a.h)(i(), e.id, s, n)
					} else Object(a.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				c = s("./node_modules/lodash/values.js"),
				a = s.n(c),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				E = s("./src/reddit/constants/headers.ts");
			var _ = s("./src/reddit/helpers/trackers/blade.ts"),
				f = s("./src/reddit/models/Image/index.tsx"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/telemetry/index.ts");
			const h = ({
				subredditId: e,
				flairId: t,
				imageKey: s,
				imageData: n
			}) => async (o, r, i) => {
				const c = r(),
					a = Object(S.Q)(c, {
						subredditId: e
					});
				if (!a) return !1;
				o(Object(l.k)(n));
				const d = await (async (e, t, s, n, o, r) => Object(p.a)(Object(b.a)(e, [E.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
					method: m.ib.POST,
					data: {
						filepath: n,
						imagetype: o,
						mimetype: r
					}
				}))(i.apiContext(), a.name, t, n.file.name, s, await Object(u.g)(n.file));
				let _ = !1;
				try {
					const e = await Object(l.g)(r(), d, n, f.a.FlairTemplates);
					e && o(Object(l.j)(e)), _ = !0
				} catch (x) {
					if (x instanceof Error) throw x;
					o(Object(l.i)(x))
				}
				return _
			}, O = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", T = Object(d.a)(O), I = (e, t, s) => async (n, r, c) => {
				const {
					apiContext: d
				} = c;
				let u = r();
				const {
					pendingImages: O,
					...I
				} = s;
				let C = I;
				const v = Object(S.Q)(u, {
					subredditId: e
				});
				if (!v) return !1;
				const y = u.structuredStyles.flairTemplate.models[t];
				if (y && i()(y, C)) return !0;
				if (O) {
					const s = [];
					if (o()(O, (o, r) => {
							o && s.push(n(h({
								flairId: t,
								imageData: Object(f.m)(o),
								imageKey: r,
								subredditId: e
							})))
						}), !(await Promise.all(s)).every(e => e)) return !1;
					C = ((e, t, s) => {
						const n = {
							...e
						};
						return o()(t, (e, t) => {
							const o = e && s.imageUploads[e.id];
							o && o.kind === f.b.TempUploaded && (n[t] = o.url)
						}), n
					})(C, O, r())
				}
				u = r();
				let P = null,
					g = null;
				const j = [];
				try {
					(P = await Object(l.f)(u, f.a.FlairTemplates)) && (g = Object(l.m)(P)(n, r, c), j.push(...a()(P.imagesByKey)))
				} catch (N) {
					return !1
				}
				const L = await (async (e, t, s, n) => Object(p.a)(Object(b.a)(e, [E.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.ib.PUT,
						data: n
					}))(d(), v.name, t, C),
					A = y ? "edit_post_flair_template" : "save_post_flair_template",
					k = Object(_.e)(u, A);
				if (L.ok) {
					let e;
					if (g) try {
						await g, e = ((e, t, s) => {
							const n = {
								...e
							};
							return t.forEach(e => {
								const t = s.imageUploads[e.id];
								t && t.kind === f.b.Uploaded && (e.url === n.postBackgroundImage ? n.postBackgroundImage = t.url : e.url === n.postPlaceholderImage && (n.postPlaceholderImage = t.url))
							}), n
						})(C, j, r())
					} catch (N) {
						e = null
					} else e = C;
					n(T({
						flairId: t,
						template: e || C
					}))
				} else P && P.websocket.close();
				return Object(x.a)({
					...k,
					actionInfo: {
						...k.actionInfo,
						success: L.ok
					}
				}), L.ok
			}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", v = Object(d.a)(C), y = (e, t) => async (s, n, {
				apiContext: o
			}) => {
				const r = n(),
					i = Object(S.Q)(r, {
						subredditId: e
					});
				if (!i) return !1;
				const c = await (async (e, t, s) => Object(p.a)(Object(b.a)(e, [E.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.ib.DELETE
					}))(o(), i.name, t),
					a = Object(_.e)(r, "delete_flair_template");
				return c.ok && s(v({
					flairId: t
				})), Object(x.a)({
					...a,
					actionInfo: {
						...a.actionInfo,
						success: c.ok
					}
				}), c.ok
			}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "i", (function() {
				return r
			})), s.d(t, "j", (function() {
				return i
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "p", (function() {
				return u
			})), s.d(t, "q", (function() {
				return m
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "l", (function() {
				return x
			})), s.d(t, "k", (function() {
				return h
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				o = "AUTHOR_FLAIR_DATA__MUTATED",
				r = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				x = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				h = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(a);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: a,
					callToAction: l,
					caption: u
				} = t;
				if (!a || !a.url) return null;
				let m = a.displayText;
				return a.displayText.length >= 40 && (m = a.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(c.a, {
					href: a.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a,
					className: d.a.displayUrl
				}, m)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: a.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a
				}, l))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				a = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement(i.b, d({
				className: Object(r.a)(a.a.CallToActionButton, e, {
					[a.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const c = 5;

			function a(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, a = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = d[e].belongsTo.id;
					p(e) && o - r >= c && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(i.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = a[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => o.a.createElement(c.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(c.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = c.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const n = s && s.eventInfo,
					c = Object(l.a)(s),
					m = n && Object(i.c)(n.eventStart, n.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(a.a, {
					post: s
				}), !c && m && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var u = e => o.a.createElement("i", {
				className: Object(c.a)(Object(a.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => o.a.createElement("i", {
					className: Object(c.a)(Object(a.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				E = s.n(b),
				_ = s("./src/lib/lessComponent.tsx");
			const f = _.a.span("PostEventFutureText", E.a),
				S = _.a.span("PostEventPastText", E.a),
				x = _.a.span("PostEventNowText", E.a),
				h = _.a.span("Container", E.a),
				O = _.a.wrapped(u, "CalendarIcon", E.a),
				T = _.a.wrapped(m, "LiveIcon", E.a),
				I = _.a.div("LoadingState", E.a);
			class C extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: c,
						eventStart: a
					} = s, d = Object(r.e)(a, n);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(p.c, {
						startTime: a,
						endTime: n,
						isLive: c
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(I, {
							className: e
						})
					}
					if (c) u = o.a.createElement(x, null, o.a.createElement(T, null), l);
					else if (d === r.a.Future) u = o.a.createElement(f, null, o.a.createElement(O, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(S, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(h, {
						className: e
					}, u)
				}
			}
			t.a = C
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/NotificationButton/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				m = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				E = s.n(b);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: n,
				shouldShowSubscribeButton: b,
				subredditOrProfile: _,
				templatePlaceholderImage: f,
				shouldShowFollowButton: S,
				isFollowed: x,
				isCommentsPage: h,
				onFollowPostClick: O
			}) => {
				return Object(m.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(E.a.thumbnailContainer, {
						[E.a.mShowingButtonOrOverflow]: S || b
					})
				}, o.a.createElement("div", {
					className: E.a.thumbnailContainerRow
				}, S && o.a.createElement(c.a, {
					isFilled: !!x,
					onClick: O,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), b && _ && o.a.createElement(a.a, {
					className: E.a.subscribeButton,
					getEventFactory: e => Object(u.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(p.h)(_) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), o.a.createElement(d.a, {
					crosspost: e,
					isCommentsPage: h,
					post: t,
					redditStyle: n,
					forceShowNSFW: s,
					templatePlaceholderImage: f
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				E = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				_ = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				S = s("./src/reddit/components/Flatlist/index.tsx"),
				x = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				O = s("./src/reddit/components/ModModeReports/helpers.ts"),
				T = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.tsx"),
				C = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				v = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				P = s("./src/reddit/components/PostTopLine/index.tsx"),
				g = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/SourceLink/index.tsx"),
				L = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				k = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				N = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				D = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/selectors/experiments/categories.ts"),
				U = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				B = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				Y = s("./src/reddit/hooks/useIsOverlay.ts"),
				V = s("./src/reddit/hooks/useUserContext.ts"),
				H = s("./src/reddit/selectors/moderatorPermissions.ts"),
				G = s("./src/reddit/selectors/postFlair.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/showPromotedCTA.ts"),
				z = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = s.n(Z),
				X = s("./src/reddit/selectors/i18n/index.ts"),
				K = s("./src/reddit/components/MediumPost/index.m.less"),
				J = s.n(K);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = () => Object(c.c)({
					crosspost: W.d,
					flairStyleTemplate: L.U,
					isActive: W.j,
					isCurrentUserProfilePost: W.l,
					showPromotedCTA: q.b,
					moderatorPermissions: H.k,
					shouldShowNsfwListingBelow: X.b,
					showAwardsPlaque: U.a,
					showEditFlair: G.a,
					showMedia: L.s,
					isInCategoriesExperiment: w.a
				}),
				te = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: n,
						eventFactory: i,
						flairStyleTemplate: c,
						hideNSFWPref: L,
						hostPostData: M,
						inSubredditOrProfile: w = !1,
						isCheckboxSelected: U,
						isCommentsPage: Y,
						isCurrentUserProfilePost: V,
						isFrontpage: H,
						isOverlay: G,
						isTopicPage: W,
						isCommentCountAnimationEnabled: q,
						isVoteCountAnimationEnabled: Z,
						isCountAnimShadowTestEnabled: X,
						imageGalleryCurrentItem: K,
						listingKey: $,
						moderatorPermissions: ee,
						modModeEnabled: te,
						onClickPost: se,
						post: ne,
						postId: oe,
						postIds: re,
						redditStyle: ie,
						shouldHideFlair: ce,
						shouldShowNsfwListingBelow: ae,
						showAwardsPlaque: de,
						showBulkActionCheckbox: le,
						showEditFlair: ue,
						showMedia: me,
						showPromotedCTA: pe,
						sendEvent: be,
						subredditOrProfile: Ee,
						toggleCheckbox: _e,
						triggerCelebratoryMoment: fe,
						isAvatarPostEnabled: Se
					} = e, xe = Object(r.d)(), he = e => e === F.a.upvoted ? xe(Object(l.db)(oe)) : xe(Object(l.w)(oe)), Oe = () => xe(Object(l.Z)(oe)), Te = ie ? void 0 : c, Ie = Object(R.a)(ee), Ce = te && Ie, ve = Object(k.a)(ee), ye = Object(N.a)(ee), Pe = Object(O.c)(ne), ge = !!(null == M ? void 0 : M.shouldShowLinkedPosts), je = ae, Le = Object(A.a)(ne), Ae = w && !me && !ge && !je || Se, ke = Ae && !!ne.source && !s, Ne = !(H && n || W) && !V && (!w || ge || je), Re = (!w || ge || je) && !ne.isSponsored, De = Object(a.t)(ne, K), {
						source: Fe
					} = De;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(I.a, {
						className: Object(d.a)(J.a.container, t, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(D.a)(e), {
							[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: G,
						style: Object(D.b)(e.flairStyleTemplate),
						post: ne,
						onClick: se,
						eventFactory: i
					}, o.a.createElement(v.a, {
						model: ne,
						handleVote: he,
						showBulkActionCheckbox: le,
						isCheckboxSelected: U,
						toggleCheckbox: _e,
						flairStyleTemplate: Te,
						redditStyle: ie,
						isVoteCountAnimation: Z,
						isCountAnimShadowTestEnabled: X,
						postId: oe,
						triggerCelebratoryMoment: fe
					}), o.a.createElement(T.a, {
						className: J.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: Te,
						post: ne,
						redditStyle: ie
					}, o.a.createElement(_.a, {
						post: ne
					}), o.a.createElement("article", {
						className: J.a.mainBody
					}, o.a.createElement("div", {
						className: J.a.content,
						"data-click-id": "body"
					}, o.a.createElement(P.a, {
						className: J.a.postTopLine,
						hideAwards: de,
						hideNSFWPref: L,
						hostPostData: M,
						iconClassName: J.a.postTopLineIcon,
						inSubredditOrProfile: w,
						isCommentsPage: Y,
						isCurrentUserProfilePost: V,
						isOverlay: !!G,
						isTopicPage: !!W,
						listingKey: $,
						post: ne,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: ke,
						showSubreddit: Re,
						showSubredditIcon: !0,
						subredditOrProfile: Ee
					}), o.a.createElement(y.c, {
						className: J.a.postTitle,
						post: ne,
						redditStyle: ie,
						size: y.b.Large,
						titleColor: Te && Te.postTitleColor,
						isOverlay: G
					}), Y && !ce && (ne.flair && ne.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(f.a, {
						className: Object(d.a)(Y && J.a.leftPadding),
						disableFlair: !Y,
						post: ne,
						sendEvent: be,
						showCategoryTag: e.isInCategoriesExperiment && Y
					}), ne.source && !ne.isSponsored && !s && o.a.createElement(j.a, {
						className: J.a.sourceLink,
						isCommentsPage: Y,
						post: ne
					})), !Ae && Le && o.a.createElement(z.a, {
						crosspost: s ? ne : void 0,
						hasModPostPerms: Ie,
						isCommentsPage: Y,
						isOverlay: G,
						modModeEnabled: te,
						post: s || ne,
						redditStyle: ie,
						shouldShowSubscribeButton: Ne,
						subredditOrProfile: Ee,
						templatePlaceholderImage: Te && Te.postPlaceholderImage
					})), pe && Fe && Fe.url && o.a.createElement(m.a, {
						className: J.a.adLinkWrapper
					}, o.a.createElement(p.a, {
						post: ne,
						adLinkContent: De
					})), te && Ie && Pe && o.a.createElement(h.a, {
						className: J.a.modModeReports,
						onIgnoreReports: Oe,
						reportable: ne
					}), o.a.createElement(x.d, null), de && o.a.createElement(b.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: Y,
						thing: ne,
						tooltipType: G ? g.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: J.a.flatlistContainer
					}, o.a.createElement(E.a, {
						className: J.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Te,
						redditStyle: ie,
						model: ne,
						onVoteClick: he
					}), o.a.createElement(S.c, {
						currentUser: n,
						hasModFlairPerms: ve,
						hasModFullPerms: ye,
						hasModPostPerms: Ie,
						hostPostData: M,
						isCommentCountAnimation: q,
						isCountAnimShadowTestEnabled: X,
						isOverlay: !!G,
						listingKey: $,
						modModeEnabled: te,
						onIgnoreReports: Oe,
						onOpenReportsDropdown: e => xe(Object(u.h)({
							tooltipId: e
						})),
						post: ne,
						showEditFlair: ue,
						tooltipType: G ? g.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(C.b)({
							editPost: !Ce,
							save: !Ce,
							hide: !1,
							report: !1
						})
					}))), H && o.a.createElement(B.a, {
						post: ne,
						postIds: null != re ? re : [],
						subredditId: null == Ee ? void 0 : Ee.id
					})))
				};
			t.default = Object(M.b)(o.a.memo((function(e) {
				const t = Object(n.useMemo)(() => ee(), []),
					s = Object(r.e)(s => t(s, e), r.c),
					c = Object(i.a)(e.post),
					a = Object(V.a)();
				return o.a.createElement(te, $({}, e, s, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(Y.a)(),
					isAvatarPostEnabled: c
				}))
			})))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/ModModeReports/index.m.less"),
				a = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", a.a), u = i.a.div("Placeholder", a.a), m = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				c = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(c.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(a.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i);
			const {
				fbt: a
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: e.className
				}, t ? a._("Voting closed {timeAgo}", [a._param("timeAgo", c.a.createElement(o.d, {
					seconds: e.poll.endsAt / n.Pb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: a,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(c.c)(n, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				S = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				T = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = s("./src/reddit/icons/fonts/Report/index.tsx"),
				v = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				P = s("./src/reddit/models/AutomatedReporting/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				A = s("./src/reddit/components/PostBadges/index.m.less"),
				k = s.n(A);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => r.a.createElement("span", N({
					className: k.a.removalReason
				}, e), e.children),
				D = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				F = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				M = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				w = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				U = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				Y = Object(E.u)({
					isProfilePostListing: E.K,
					isSubreddit: E.M,
					pageLayer: e => e
				}),
				V = Object(c.c)({
					isPinned: (e, {
						post: t
					}) => Object(L.q)(e, {
						postId: t.id
					}),
					modModeEnabled: E.S
				}),
				H = Object(i.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = Y(H(({
				className: e,
				displayText: t,
				isSubreddit: s,
				inSubredditOrProfile: c,
				isCompactPinnedPost: l,
				isPinned: E,
				isProfilePostListing: L,
				modModeEnabled: A,
				onHideTooltip: Y,
				onOpenRemovalReasonModal: V,
				onShowTooltip: H,
				post: G,
				tooltipType: W
			}) => {
				const q = {
						caretOnTop: !1
					},
					z = Object(i.e)(j.a),
					Z = G.isSponsored && (z === p.r.NoLockIcon || z === p.r.PromotedGrey),
					Q = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === b.a.SUBREDDIT,
					X = B("Approve", G.id, W),
					K = B("Archived", G.id, W),
					J = B("Automod", G.id, W),
					$ = B("Lock", G.id, W),
					ee = B("Mod", G.id, W),
					te = B("Remove", G.id, W),
					se = B("Report", G.id, W),
					ne = B("Spam", G.id, W),
					oe = B("Sticky", G.id, W),
					re = B("Pinned", G.id, W),
					ie = G.bannedBy && Object(P.b)(G.bannedBy);
				return r.a.createElement("div", {
					className: e
				}, c && t && G.distinguishType === d.F.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(x.a, {
					name: "mod",
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.modIcon)
				}), r.a.createElement(u.c, N({
					tooltipId: ee,
					text: M(t)
				}, q))), G.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.archivedIcon),
					desc: D(),
					id: K,
					onMouseEnter: H(K),
					onMouseLeave: Y
				}), r.a.createElement(u.c, N({
					tooltipId: K,
					text: D()
				}, q))), G.isLocked && !Z && r.a.createElement(o.Fragment, null, r.a.createElement(T.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.lockIcon),
					desc: F(),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: Y
				}), r.a.createElement(u.c, N({
					tooltipId: $,
					text: F()
				}, q))), s && Object(g.q)(G) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.stickyIcon),
					desc: w(),
					id: oe,
					onMouseEnter: H(oe),
					onMouseLeave: Y
				}), r.a.createElement(u.c, N({
					tooltipId: oe,
					text: w()
				}, q))), L && E && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.stickyIcon),
					desc: U(),
					id: re,
					onMouseEnter: H(re),
					onMouseLeave: Y
				}), r.a.createElement(u.c, N({
					tooltipId: re,
					text: U()
				}, q))), (G.isApproved || G.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(h.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.approveIcon),
					desc: Object(f.a)(G),
					id: X,
					onMouseEnter: H(X),
					onMouseLeave: Y
				}), r.a.createElement(u.c, N({
					tooltipId: X,
					text: Object(f.a)(G)
				}, q))), Object(_.a)(G) && !ie && r.a.createElement(o.Fragment, null, r.a.createElement(I.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.removeIcon),
					desc: Object(f.c)(G),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: Y
				}), Q && r.a.createElement(m.a, {
					className: k.a.addRemovalReason,
					onClick: V,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (G.modRemovalReason || G.modNote) && r.a.createElement(R, {
					onMouseEnter: H(te),
					onMouseLeave: Y
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, N({
					tooltipId: te,
					text: Object(f.c)(G)
				}, q))), G.bannedBy && G.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(v.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.spamIcon),
					desc: Object(f.e)(G),
					id: ne,
					onMouseEnter: H(ne),
					onMouseLeave: Y
				}), r.a.createElement(u.c, N({
					tooltipId: ne,
					text: Object(f.e)(G)
				}, q))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(x.a, {
					name: "bot",
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.automoderator, !!G.bannedBy && k.a.isRemoved)
				}), r.a.createElement(u.c, N({
					tooltipId: J,
					text: f.b
				}, q))), ie && r.a.createElement("div", {
					className: k.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", ie)], {
					hk: "3C408F"
				})), Object(S.a)(G) && !A && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(a.a)(k.a.icon, k.a.reportIcon),
					desc: Object(f.d)(G.numReports),
					id: se,
					onMouseEnter: H(se),
					onMouseLeave: Y
				}), r.a.createElement(u.c, N({
					tooltipId: se,
					text: Object(f.d)(G.numReports)
				}, q))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(a.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/objectSelector/index.ts"),
				x = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(h);
			const T = Object(p.a)(() => Object(r.c)({
				basePixelMetadata: Object(S.a)((e, {
					post: t
				}) => Object(E.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(E.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(_.actionInfo)(e).pageType
			}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: E,
						style: _,
						ref: S,
						shouldAddGalleryViewability: x = !0
					} = this.props, h = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: _,
						ref: S,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && E(Object(a.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(O.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), T = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || T ? o.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, h) : l.media && Object(b.E)(l.media) && x ? o.a.createElement(u, {
						postId: l.id
					}, h) : h
				}
			}
			t.a = T(Object(x.a)(Object(m.c)(I)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(u.o)({
							postId: s,
							isFollowed: r
						}) : Object(u.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let c = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (c = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(a.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, c)
				}
			}
			const E = Object(i.b)(() => Object(c.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				a = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				l = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(l);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: l = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: b,
					redditStyle: E,
					isOverlay: _,
					isVoteCountAnimation: f,
					triggerCelebratoryMoment: S,
					postId: x
				} = e, h = `upvote-button-${t.id}${_?"-overlay":""}`;
				return o.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(a.b)(t) && t.isSponsored,
					redditStyle: E
				}, n && o.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), o.a.createElement(i.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: E,
					upvoteTooltipId: h,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: m,
					triggerCelebratoryMoment: S,
					postId: x,
					scoreClassName: u.a.score
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return q
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				S = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				T = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/lib/getShortenedLink.ts"),
				v = s("./src/reddit/components/FlairWrapper/index.tsx"),
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				P = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				j = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = s.n(j);
			const A = Object(a.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var k, N = Object(i.b)(A)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(l.a)(e.className, L.a.proposalMetaData)
					}, r.a.createElement("span", null, y.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [y.fbt._param("count", Object(P.a)(n)), y.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(g.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				R = s("./src/reddit/components/SEOTitle/index.tsx"),
				D = s("./src/reddit/selectors/experiments/econ/index.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/PostTitle/index.m.less"),
				w = s.n(M),
				U = s("./src/config.ts"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				Y = s("./src/reddit/hooks/useExperimentVariant.ts"),
				V = s("./src/reddit/hooks/usePostContext.ts"),
				H = s("./src/reddit/hooks/useTheme.ts"),
				G = s("./src/telemetry/models/Outbound.ts");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(k || (k = {}));
			const q = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: n,
					children: o,
					className: i,
					redditStyle: c
				}) => {
					const a = Object(H.a)();
					let d = "";
					switch (e) {
						case k.ExtraLarge:
							d = w.a.ExtraLarge;
							break;
						case k.Large:
							d = w.a.Large;
							break;
						case k.Medium:
							d = w.a.Medium;
							break;
						case k.Small:
							d = w.a.Small;
							break;
						case k.ExtraSmall:
							d = w.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(l.a)(w.a.Title, i, d, {
							[w.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(I.a)({
								redditStyle: c,
								theme: a
							}).titleText
						}
					}, s ? r.a.createElement(R.b, {
						type: s
					}, o) : o)
				},
				z = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: n,
					...o
				}) => r.a.createElement(c.a, W({}, o, {
					className: Object(l.a)(e, w.a.styledLink, {
						[w.a.isVisitedEnabled]: !t
					})
				}), n),
				Z = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: n
				}) => r.a.createElement("div", {
					className: Object(l.a)(w.a.titleContainer, s, {
						[w.a.isNoWrap]: t,
						[w.a.isVisitedEnabled]: !e
					})
				}, n),
				Q = Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.db,
					isTournamentPredictionPostV2: D.t
				}),
				X = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, o = Object(B.a)(), i = Object(Y.a)(m.Cc) === m.Gc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(Z, {
						nowrap: e.nowrap
					}, r.a.createElement(K, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, r.a.createElement(K, e)); {
						const c = t.media && Object(T.G)(t.media) ? Object(x.c)(t.id, s.name) : t.permalink,
							a = e.isCommentPermalink ? Object(S.b)(c) : i ? Object(_.a)(c, void 0, o) : Object(_.a)(c);
						return r.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? r.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, r.a.createElement(K, t)) : r.a.createElement(K, t)
						})(t, e) : r.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a
						}, r.a.createElement(K, e)))
					}
				},
				K = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let o = e.format ? e.format(n) : n.title;
					s && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const i = e.isCommentsPage ? R.a.PostComments : R.a.PostItem;
					return r.a.createElement(q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(v.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), o)
				},
				J = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, o = e.isCommentsPage ? G.SourceElement.PostLink : G.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== k.Large && !s.isSponsored && !(s.media && Object(T.G)(s.media)) && (s.source || s.media && (s.media.type === T.o.GIFVIDEO || s.media.type === T.o.IMAGE || s.media.type === T.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return r.a.createElement(E.a, {
							className: e.outboundLinkClassName,
							href: Object(T.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source,
							sourceElement: o
						}, Object(C.a)(s), !s.isSponsored && r.a.createElement(h.a, {
							name: "external_link",
							className: w.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== k.Large && e.size !== k.ExtraLarge) return r.a.createElement(E.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source,
						sourceElement: o
					}, Object(C.a)(s), !s.isSponsored && r.a.createElement(h.a, {
						name: "external_link",
						className: w.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${w.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(I.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(I.a)(this.props).titleText,Object(I.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: s,
						flairPosition: n,
						isCommentsPage: o,
						isOverlay: i,
						poll: c,
						post: a,
						showNSFWSpoilerFlairsOnly: d,
						isTournamentPredictionPostV2: u
					} = this.props, m = n === O.b.Left, p = Object(v.b)(a), b = d ? p.filter(e => e.type === O.f.Nsfw || e.type === O.f.Spoiler) : m ? p.filter(e => Object(f.q)(e.type)) : [], E = d ? [] : m ? p.filter(e => !Object(f.q)(e.type)) : p, _ = !i && !o, S = !s && b && b.length > 0 && _, x = !s && E && E.length > 0 && _, h = !(u && (null === (e = a.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return r.a.createElement("div", {
						className: Object(l.a)(w.a.Component, t, a.id)
					}, !d && S && r.a.createElement(v.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), h && r.a.createElement(X, W({}, this.props, {
						leftFlair: d ? b : void 0
					})), c && r.a.createElement(N, {
						className: w.a.pollMeta,
						pollId: c.id
					}), r.a.createElement(J, this.props), x && r.a.createElement(v.a, {
						isFlairFilter: !0,
						titleFlair: E,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: w.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(p.db)(),
					s = Object(p.w)(t),
					n = Object(V.a)(),
					o = Object(i.e)(o => Q(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					c = Object(H.a)(),
					a = Object(u.b)();
				return n ? r.a.createElement($, W({
					pageLayer: t,
					isCommentPermalink: s
				}, n, o, e, {
					theme: c,
					sendEvent: a
				})) : null
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				E = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				_ = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Subreddit/index.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/PostTopLine/index.m.less"),
				v = s.n(C);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: o,
				hideNSFWPref: C,
				hostPostData: y,
				iconClassName: P,
				inSubredditOrProfile: g,
				isCommentsPage: j,
				isCompactPinnedPost: L,
				isCurrentUserProfilePost: A,
				isOverlay: k,
				isTopicPage: N,
				listingKey: R,
				post: D,
				shouldShowSubscribeButton: F,
				showCornerOutboundLink: M,
				showSubreddit: w,
				showSubredditIcon: U,
				subredditOrProfile: B,
				isFollowed: Y,
				shouldShowFollowButton: V,
				onFollowPostClick: H
			}) => {
				const G = o || N,
					W = B && Object(T.h)(B),
					q = Object(i.e)(e => {
						if (!W) return !0;
						const t = Object(I.ub)(e, D.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(c.a)(v.a.container, e)
				}, w && B && r.a.createElement("div", {
					className: v.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, U && r.a.createElement(p.b, {
					className: Object(c.a)(v.a.subredditIcon, P),
					shouldHideNsfwIcon: C,
					subredditOrProfile: B
				}))), r.a.createElement("div", {
					className: v.a.everythingElseWrapper
				}, w && r.a.createElement(d.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), r.a.createElement(m.d, {
					className: v.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: k ? m.c.Lightbox : void 0,
					post: D,
					showSub: w,
					subredditOrProfile: B
				}), r.a.createElement(u.a, {
					className: v.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: g,
					isCompactPinnedPost: L,
					post: D,
					tooltipType: k ? m.c.Lightbox : void 0
				}), !G && r.a.createElement(a.a, {
					isPostDetail: j,
					thing: D,
					tooltipType: k ? m.c.Lightbox : void 0
				})), B && q && w && F && !A && r.a.createElement(E.a, {
					className: v.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(D.id, e ? "unsubscribe" : "subscribe", "post", R, y),
					identifier: {
						name: B.name,
						type: W ? _.a.PROFILE : _.a.SUBREDDIT
					},
					postId: D.id,
					size: f.c.XS
				}), M && r.a.createElement(S.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(O.D)(D),
					source: D.source
				}, r.a.createElement(h.a, {
					className: v.a.outboundLinkIcon
				})), V && q && r.a.createElement(l.a, {
					isFilled: !!Y,
					onClick: H,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				_ = s.n(E);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: c,
				share: E
			}) => {
				const S = Object(l.b)(),
					x = Object(i.d)(),
					h = c && c.id,
					O = c && c.voteState;
				let T = null;
				h || (T = e ? "user_hovercard" : "profile_overview");
				const I = Object(o.useCallback)(() => S(Object(m.d)(e ? "user_hovercard" : "profile_overview", t)), [e, S, t]);
				return r.a.createElement(u.s, {
					onClick: () => {
						s ? (S(m.e), h && O === b.a.notVoted && x(Object(a.db)(h))) : I();
						const e = s ? "postify" : "copy";
						x(Object(d.b)({
							clickSource: T,
							share: E,
							source: e
						}))
					},
					className: Object(n.a)(_.a.snoovatarButton, _.a.snoovatarExtraPadding, _.a.compactButtonLayout, {
						[_.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(n.a)({
						[_.a.shirtIcon]: !s,
						[_.a.avatarPostButtonShirtIcon]: s
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: _.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js");
			const a = 16765092,
				d = "https://i.redd.it/snoovatar",
				l = "snoovatars",
				u = "avatars";
			var m = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				p = s("./src/reddit/components/AvatarPost/index.m.less"),
				b = s.n(p);
			var E = ({
					sourceUrl: e,
					username: t,
					post: s
				}) => {
					const [n, r] = new URL(e).pathname.split("/").slice(2), i = function(e) {
						return `${d}/${+e>=a?u:l}/shared/${e}.png`
					}(r);
					return o.a.createElement("div", {
						className: b.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: b.a.avatarPostImage,
						src: i,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(m.a, {
						isHovercard: !1,
						username: t,
						isAvatarPost: !0,
						post: s,
						share: {
							username: n,
							avatarId: r
						}
					}))
				},
				_ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				S = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/components/SourceLink/index.m.less"),
				h = s.n(x),
				O = s("./src/lib/lessComponent.tsx"),
				T = s("./src/telemetry/models/Outbound.ts");
			const I = O.a.wrapped(S.a, "OutboundLinkIcon", h.a),
				C = O.a.div("SourceLinkWrapper", h.a);

			function v(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, c = n ? T.SourceElement.PostLink : T.SourceElement.ListingPostLink, {
					source: a,
					isSponsored: d
				} = s, l = Object(f.a)(s);
				return a ? l ? o.a.createElement(E, {
					sourceUrl: a.url,
					username: s.author,
					post: s
				}) : o.a.createElement(C, {
					className: Object(r.a)({
						[h.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(_.a, {
					href: a.url,
					isSponsored: d,
					postId: s.id,
					source: a,
					sourceElement: c
				}, Object(i.a)(s), o.a.createElement(I, {
					isFilled: !0
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", u.a);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: i,
							small: l = !1,
							size: u,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: E,
							onSubscriptionsRequested: _,
							...f
						} = this.props, S = this.state.isHovered, x = Object(d.a)({
							type: t.type,
							key: S ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(c.s, m({
							className: e,
							priority: f.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: l || !l && !S ? Object(a.b)("checkmark") : void 0,
							text: !l && x,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: u || (l ? c.c.XS : c.c.S)
						}, f))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: i,
							small: l = !1,
							size: u,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: E,
							onSubscriptionsRequested: _,
							...f
						} = this.props, S = Object(d.a)({
							type: t.type,
							key: "subscribe"
						});
						return o.a.createElement(c.s, m({
							className: e,
							priority: f.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: Object(a.b)("add"),
							size: u || (l ? c.c.XS : c.c.S),
							text: !l && S,
							onClick: this.onClick
						}, f, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : o.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(b))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[o({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: i.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.m.less"),
				a = s.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[a.a.redditStyle]: e.redditStyle,
					[a.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/thumbnails.ts"),
				o = s("./src/reddit/models/Media/index.ts");

			function r(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW || e.media && Object(o.E)(e.media))
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function o(e) {
				return [...e].sort(n)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(n.e)(s));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				c = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.H.NO_STRIPE_SUBSCRIPTION:
							case n.H.USER_DOESNT_EXIST:
							case n.H.USER_REQUIRED_ERROR:
							case n.H.VALIDATION_ERROR:
								return e;
							case n.H.NO_USER:
							case n.H.NO_TEXT:
							case n.H.NO_URL:
								return n.H.VALIDATION_ERROR;
							case n.H.CREDIT_CARD_FAILURE:
							case n.H.CREDIT_CARD_FAILURE_GENERIC:
								return n.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.H.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(c.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(c.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(c.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				E = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				_ = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, s) => ({
					gallery: i.gallery(e, t, s),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				a = (e, t) => s => ({
					...c(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(s, e)
				}),
				d = (e, t) => s => {
					const a = Object(o.a)(t),
						d = Object(r.b)(s, e) + 1;
					return {
						...c(s, e, d),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(s, e),
							outboundUrl: t,
							outboundDomain: a ? a.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => o => ({
					...c(o, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "y", (function() {
				return a
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "n", (function() {
				return x
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "l", (function() {
				return I
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "x", (function() {
				return P
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "v", (function() {
				return A
			})), s.d(t, "w", (function() {
				return k
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.p)(e)
				}),
				c = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				a = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				E = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				_ = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				S = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				h = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				O = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				T = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : O[e],
					...r(t)
				}),
				I = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				C = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(n.l)(e),
					...r(i),
					actionInfo: o.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				v = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				P = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				g = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				L = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				A = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				k = () => (e, t) => {
					const s = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var c = s("./src/reddit/selectors/experiments/econ/index.ts");
			const a = e => Object(n.e)(t => {
				return !!(({
					adminId: e,
					subredditId: t,
					avatarShareUrl: s
				}) => {
					const n = i.test(s.trim()),
						c = o.includes(e),
						a = r.includes(t);
					return n && c && a
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(c.d)(t)
			})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/InsideOverlay.tsx");

			function r() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), a.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), a.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), a.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("pin", e.isFilled), a.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = function({
				className: e
			}) {
				return o.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			var n, o, r = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[n.Loyalty]: r.a.First,
					[n.Achievement]: r.a.Second,
					[n.Cosmetic]: void 0
				},
				c = e => e === r.a.First ? n.Loyalty : e === r.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "q", (function() {
				return f
			})), s.d(t, "k", (function() {
				return S
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "m", (function() {
				return I
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "p", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				o = s("./src/reddit/models/GqlTopLevelField.ts"),
				r = s("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, a, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(c || (c = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(a || (a = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				m = e => e.__typename === o.a.Subreddit;
			var p, b, E, _;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(E || (E = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(_ || (_ = {}));
			const f = e => b[_[e]],
				S = e => _[b[e]],
				x = e => E[b[e]],
				h = e => b[E[e]],
				O = e => _[E[e]];
			var T;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(T || (T = {}));
			const I = e => {
					switch (e) {
						case T.Hourly:
						case T.Daily:
						case T.Weekly:
						case T.Monthly:
							return !0
					}
					return !1
				},
				C = "custom",
				v = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(n.a)(e)
					}
				},
				y = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, o = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const r = {
				status: n.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: n,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: n,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case o.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case o.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, o = s("./src/lib/constants/specialMembership.ts"),
				r = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = s("./src/reddit/helpers/economics/sortBadges.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === c.a.First ? n[a.a.Loyalty][o] : n[a.a.Achievement][o] : l(e) ? n[a.a.Cosmetic][a.c.MyBadges][o] : n[a.a.Cosmetic][a.c.Gallery][o]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(i.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, s) => {
					const n = t[e.id],
						o = t[s.id];
					return Object(i.b)(n, o)
				})
			}

			function b(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(s => {
					const n = e.collections[s],
						o = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[a.a.Loyalty][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][s] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && s.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), s, n, t), u(Object.keys(e.products).map(t => e.products[t]), s, n, t), {
					collections: {
						[a.a.Loyalty]: p(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: p(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: p(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: p(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case r.a: {
						const {
							subredditId: s
						} = t.payload, o = e[s];
						return o && o.status === n.Fetched ? {
							...e,
							[s]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: s
						} = t.payload, o = e[s];
						return o && o.status === n.Fetched ? {
							...e,
							[s]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: {
								raw: s,
								data: b(s),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(r.H)(e) || n.K.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.B
				})
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Rb
				});
				return !(!t || Object(n.xe)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const c = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.xe)(t)
				},
				a = Object(n.a)(c, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const c = e => Object(r.c)(e, {
					experimentName: o.ud,
					experimentEligibilitySelector: r.a
				}),
				a = (e, t) => t === o.Ed.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(i.H, c, (e, t) => a(e, t)),
				l = Object(n.a)((e, t) => t, c, (e, t) => a(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.eb885f667262343c2936.js.map