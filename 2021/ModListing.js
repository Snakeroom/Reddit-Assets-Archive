// https://www.redditstatic.com/desktop2x/ModListing.33f565759546ee73ad63.js
// Retrieved at 3/8/2021, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, r) {
			"use strict";

			function n(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-router/esm/react-router.js"),
				a = r("./node_modules/history/esm/history.js");
			r("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				if (null == e) return {};
				var r, n, s = {},
					o = Object.keys(e);
				for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
				return s
			}
			var u = r("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			o.a.Component;
			o.a.Component;
			var l = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				n(t, e);
				var r = t.prototype;
				return r.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (r) {
						throw e.preventDefault(), r
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, r.render = function() {
					var e = this,
						t = this.props,
						r = t.innerRef,
						n = (t.replace, t.to),
						s = d(t, ["innerRef", "replace", "to"]);
					return o.a.createElement(i.g.Consumer, null, (function(t) {
						t || Object(u.default)(!1);
						var i = "string" == typeof n ? Object(a.c)(n, null, null, t.location) : n,
							d = i ? t.history.createHref(i) : "";
						return o.a.createElement("a", c({}, s, {
							onClick: function(r) {
								return e.handleClick(r, t.history)
							},
							href: d,
							ref: r
						}))
					}))
				}, t
			}(o.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, r, s, o, i) {
					if (i !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: s
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			class n {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class s {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const r = new s(t);
					return e.forEach(e => r.push(e)), r
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const r = t instanceof n ? t : new n(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					r.prev = s, r.next = s.next, s.next = r, r.next && (r.next.prev = r);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = r, this.length++
				}
				insertBefore(e, t) {
					const r = t instanceof n ? t : new n(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					r.next = s, r.prev = s.prev, s.prev = r, r.prev && (r.prev.next = r);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = r, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof n ? e : new n(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const r = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof n ? e : new n(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const r = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
				}
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				i = Object(n.a)(s),
				a = Object(n.a)(o)
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modListingDataPending", (function() {
				return L
			})), r.d(t, "modListingDataLoaded", (function() {
				return w
			})), r.d(t, "modListingDataFailed", (function() {
				return D
			})), r.d(t, "modListingPageRequested", (function() {
				return R
			})), r.d(t, "morePostsPending", (function() {
				return F
			})), r.d(t, "morePostsLoaded", (function() {
				return B
			})), r.d(t, "morePostsFailed", (function() {
				return A
			})), r.d(t, "moreModListingRequested", (function() {
				return U
			})), r.d(t, "hideSubredditSuccess", (function() {
				return H
			})), r.d(t, "hideSubredditPending", (function() {
				return V
			})), r.d(t, "hideSubredditFailed", (function() {
				return q
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return G
			})), r.d(t, "unhideSubredditPending", (function() {
				return W
			})), r.d(t, "unhideSubredditFailed", (function() {
				return Q
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return J
			})), r.d(t, "hideSubreddit", (function() {
				return X
			})), r.d(t, "unhideSubreddit", (function() {
				return Y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				d = r("./src/reddit/actions/platform.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/page.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				p = r("./src/config.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				g = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/helpers/name/index.ts"),
				O = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				y = (e, t) => Object(b.a)(e, {
					data: t,
					endpoint: Object(g.a)(Object(O.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.cb.GET
				});
			const x = (e, t, r, n) => Object(b.a)(Object(f.a)(e, [h.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(v.c)(r)}`,
					method: n ? i.cb.PUT : i.cb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(v.h)(r)
						})
					}
				}),
				_ = (e, t, r) => x(e, t, r, !0),
				j = (e, t, r) => x(e, t, r, !1);
			var E = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				S = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				I = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = r("./src/reddit/helpers/trackers/screenview.ts"),
				P = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/routes/modListing/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				T = r("./src/reddit/actions/pages/modListing/constants.ts");
			const L = Object(a.a)(T.f),
				w = Object(a.a)(T.e),
				D = Object(a.a)(T.d),
				M = (e, t) => async (r, s, o) => {
					const i = s();
					if (i.listings.postOrder.api.pending[e]) return;
					r(L({
						key: e
					}));
					const a = await Object(I.a)("modListing", () => y(o.apiContext(), t)),
						c = `error-${e}`;
					a.ok ? (r(w({
						key: e,
						meta: i.meta,
						...a.body
					})), r(u.f(c))) : (r(D({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(S.a)(r, i) : r(u.e({
						id: c,
						kind: P.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: M(e, t)
					})))
				}, R = (e, t) => async (r, s) => {
					const {
						sort: a = i.Q
					} = e.params, u = Object(k.d)(e.path), p = u ? l.e : l.d, b = Object(c.a)(p, a, e.queryParams), f = s(), h = f.listings.postOrder.ids[b], g = f.listings.postOrder.api.error[b];
					if (f.listings.postOrder.api.pending[b] || h && !g && !t) return void(h && r(d.l({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const v = K(e.queryParams);
					await r(M(b, {
						...o()(e.queryParams, m.l),
						...o()(e.queryParams, m.k),
						filtered: !!u || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(E.a)(a, v)
					})), r(d.l({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(s(), !0)
				}, F = Object(a.a)(T.i), B = Object(a.a)(T.h), A = Object(a.a)(T.g), U = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						a = s.platform.currentPage;
					if (!a) return;
					const {
						sort: d = i.Q
					} = e, u = a.queryParams, p = Object(k.d)(a.url), b = p ? l.e : l.d, f = Object(c.a)(b, d, u), h = s.listings.postOrder.loadMore[f];
					if (!h) return;
					const g = s.listings.postOrder.api.pending[f],
						v = s.listings.postOrder.fetchedTokens,
						O = !(!v[f] || !v[f][h.token]);
					if (g || O) return;
					const x = K(u);
					t(F({
						key: f,
						fetchedToken: h.token
					}));
					const _ = await y(n(), {
							after: h.token,
							dist: h.dist,
							filtered: !!p || void 0,
							sort: d,
							t: Object(E.a)(d, x),
							...o()(u, m.l)
						}),
						j = s.listings.postOrder.ids[f],
						S = {
							..._.body,
							postIds: (_.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					_.ok ? t(B({
						key: f,
						fetchedToken: h.token,
						meta: s.meta,
						...S
					})) : t(A({
						key: f,
						error: _.error,
						fetchedToken: h.token,
						...S
					}))
				};

			function K(e) {
				const t = m.x in e && e[m.x].toUpperCase() || "";
				return t in i.Ub && i.Ub[t]
			}
			const H = Object(a.a)(T.c),
				V = Object(a.a)(T.b),
				q = Object(a.a)(T.a),
				G = Object(a.a)(T.l),
				W = Object(a.a)(T.k),
				Q = Object(a.a)(T.j),
				J = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const o = n(),
						i = Object(N.i)(o),
						[a, c, d, u] = t ? [V, H, q, _] : [W, G, Q, j];
					if (!i || !i.displayText) return;
					const {
						currentPage: l
					} = o.platform;
					if (!l || !l.routeMatch) return;
					r(a(e));
					const m = await u(s(), i.displayText, e);
					m.ok ? (await r(R(l.routeMatch.match, !0)), r(c(e))) : r(d(m.body))
				}, X = e => J(e, !0), Y = e => J(e, !1)
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				a = Object(n.a)(o),
				c = Object(n.a)(i),
				d = (e, t) => async (r, n) => {
					const o = n();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? r(c({
						listingKey: e
					})) : s.j(o, e) : r(a({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./src/reddit/constants/componentSizes.ts"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/components/JumpToContent/index.m.less"),
				d = r.n(c);
			const u = Object(s.createContext)(null),
				l = Object(s.createContext)(null);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(u.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(l.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = i.f + 10,
				b = o.a.memo(() => o.a.createElement(u.Consumer, null, e => e && o.a.createElement("div", {
					className: d.a.wrapper
				}, o.a.createElement(a.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, n.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), o.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				f = o.a.memo(() => o.a.createElement(l.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./src/reddit/components/ModHub/Content/index.m.less"),
				c = r.n(a);
			t.a = e => i.a.createElement("div", {
				className: c.a.noPermissions
			}, i.a.createElement("img", {
				className: c.a.rememberTheHuman,
				src: `${n.a.assetPath}/img/content-gate-icons/remember-the-human.png`
			}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : s.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), i.a.createElement("div", {
				className: c.a.noPermissionsSmallText
			}, e.isModerator ? s.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? s.fbt._("You must be a moderator of {subredditName} to view this page", [s.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : s.fbt._("You must be a moderator to view this page", null, {
				hk: "2N7TXH"
			})))
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, r) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, r) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, r) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, r) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, r) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, r) {
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
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = r.n(m),
				b = r("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(u.b, "SubredditIcon", p.a),
				h = b.a.span("Label", p.a),
				g = Object(d.c)({
					subredditOrProfile: l.L
				});
			var v = Object(c.b)(g)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, o.a.createElement(o.a.Fragment, null, o.a.createElement(f, {
				subredditOrProfile: t
			}), o.a.createElement(h, null, t.displayText))));
			var O = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: r
				}) => {
					const n = r.map(t => o.a.createElement(v, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return o.a.createElement("div", {
						className: t
					}, n)
				},
				y = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				x = r.n(y);
			const _ = b.a.div("CommunityCount", x.a),
				j = b.a.wrapped(O, "SubredditsOrProfiles", x.a),
				E = b.a.wrapped(i.a, "SidebarSubreddit", x.a),
				S = b.a.wrapped(i.a, "ModalSubreddit", x.a);
			var I;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(I || (I = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: r,
					onSeeMoreDetails: s,
					subredditCategory: i = {
						name: n.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, c = t ? E : S, d = r.length, u = t && r.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(_, null, n.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [n.fbt._plural(d, "number"), n.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), d > 0 && o.a.createElement(j, {
					subredditsOrProfilesIds: t ? r.slice(0, 4) : r
				}, (t, r) => o.a.createElement(c, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, r)), d > 0 && u && o.a.createElement(a.o, {
					onClick: s
				}, n.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/raf/index.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o);
			class a extends i.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return i.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(o.f)(),
					r = Object(n.useCallback)(e => {
						{
							const r = t.getState(),
								n = e(r);
							Object(a.a)({
								...i.defaults(r),
								...n
							})
						}
					}, [t]);
				return s.a.createElement(d.Provider, {
					value: r
				}, e ? s.a.Children.only(e) : null)
			}

			function l() {
				return Object(n.useContext)(d)
			}

			function m(e) {
				function t(t) {
					const r = l();
					return s.a.createElement(e, c({}, t, {
						sendEvent: r
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, r) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return T
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "d", (function() {
				return D
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, r) => n => {
				const s = e(n),
					i = t(n),
					a = !s && i;
				return Object(o.a)(r.baseClassName, n.className, {
					[r.mIsInteractive]: i,
					[r.mIsActive]: s,
					[r.mIsVoteable]: a
				})
			};
			var c = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = r("./src/reddit/icons/fonts/Downvote/index.tsx"),
				u = r("./src/reddit/models/Vote/index.ts"),
				l = r("./src/reddit/controls/Downvote/index.m.less"),
				m = r.n(l);
			const p = {
					...m.a,
					baseClassName: m.a.Downvote
				},
				b = ({
					voteState: e
				}) => e === u.a.downvoted,
				f = a(b, ({
					interactive: e
				}) => !1 !== e, p);
			var h = e => {
					const t = Object(c.b)();
					return s.a.createElement(d.b, {
						className: f(e),
						compact: e.compact,
						isFilled: t && b(e)
					})
				},
				g = r("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = r("./src/reddit/controls/Upvote/index.m.less"),
				O = r.n(v);
			const y = {
					...O.a,
					baseClassName: O.a.Upvote
				},
				x = ({
					voteState: e
				}) => e === u.a.upvoted,
				_ = a(x, ({
					interactive: e
				}) => !1 !== e, y);
			var j = e => {
					const t = Object(c.b)();
					return s.a.createElement(g.b, {
						className: _(e),
						compact: e.compact,
						isFilled: t && x(e)
					})
				},
				E = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				S = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				P = r.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => Object(o.a)({
					[P.a.compact]: e.compact,
					[P.a.dark]: Object(S.b)(Object(E.a)(e)),
					[P.a.nightmode]: e.isNightmode
				}),
				T = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						...i
					} = e;
					return s.a.createElement("button", k({}, i, {
						className: Object(o.a)(P.a.customDownvote, N(e), {
							[P.a.voted]: e.voteState === u.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				L = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						...i
					} = e;
					return s.a.createElement("button", k({}, i, {
						className: Object(o.a)(P.a.customUpvote, N(e), {
							[P.a.voted]: e.voteState === u.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				w = h,
				D = j
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/structuredStyles/index.ts"),
				i = r("./src/reddit/selectors/activeModalId.ts"),
				a = r("./src/reddit/selectors/structuredStyles.ts"),
				c = r("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(n.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "d", (function() {
					return n
				})), r.d(t, "c", (function() {
					return s
				})), r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(n || (n = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(s || (s = {}));
			const o = "SHORTCUT_FOCUSABLE_DIV",
				i = [9, 13, 32]
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(n.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var n = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let s = `${n.a.accountManagerOrigin}/login/`;
				const o = window.location.origin;
				r && (s += `?dest=${encodeURIComponent(`${o}${r}`)}`), window.location.href = s
			}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			}));
			r("./src/reddit/constants/categories.tsx");
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: n.screen(e),
					profile: n.profile(e),
					subreddit: n.subreddit(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...s(t)
				}),
				i = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "x", (function() {
				return O
			})), r.d(t, "w", (function() {
				return y
			})), r.d(t, "s", (function() {
				return x
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "z", (function() {
				return E
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "u", (function() {
				return C
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "n", (function() {
				return N
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "m", (function() {
				return B
			})), r.d(t, "h", (function() {
				return U
			})), r.d(t, "e", (function() {
				return K
			})), r.d(t, "f", (function() {
				return H
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "v", (function() {
				return q
			})), r.d(t, "g", (function() {
				return G
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/helpers/media/index.ts"),
				i = r("./src/reddit/models/PostCreationForm/index.ts"),
				a = r("./src/reddit/models/PostDraft/index.ts"),
				c = r("./src/reddit/selectors/postDraft.ts"),
				d = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts"),
				l = r("./src/telemetry/index.ts"),
				m = r("./src/telemetry/models/PostComposer.ts"),
				p = r("./src/telemetry/models/PostDraft.ts");
			const b = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				f = e => ({
					source: "post_composer",
					action: n.c.CLICK,
					...d.defaults(e),
					screen: d.screen(e),
					correlationId: Object(s.c)(s.a.PostComposer)
				}),
				h = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === i.h.MARKDOWN ? "markdown" : "rte"
				},
				g = e => {
					Object(l.a)({
						noun: "cancel",
						...f(e)
					})
				},
				v = e => {
					Object(l.a)({
						noun: "discard",
						...f(e)
					})
				},
				O = e => {
					Object(l.a)({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e),
						...f(e),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				y = e => {
					Object(l.a)({
						noun: "subreddit_selector",
						...f(e)
					})
				},
				x = (e, t) => {
					Object(l.a)({
						noun: "post_type_selector",
						postComposer: {
							type: b[t]
						},
						...f(e)
					})
				},
				_ = () => e => ({
					noun: "add_option",
					...f(e)
				}),
				j = () => e => ({
					noun: "voting_length",
					...f(e)
				}),
				E = (e, t, r) => {
					"image_upload" === t || "video_upload" === t ? Object(l.a)({
						noun: t,
						...f(e)
					}) : Object(l.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: r ? "on" : "off"
						},
						...f(e)
					})
				},
				S = (e, t, r) => {
					Object(l.a)({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						post: r ? d.post(e, r) : null,
						...f(e)
					})
				},
				I = (e, t) => {
					const r = t === i.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)({
						noun: r,
						...f(e)
					})
				},
				C = (e, t) => {
					Object(l.a)({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						...f(e)
					})
				},
				P = (e, t) => {
					const r = e.uploads[t];
					r.error && Object(l.a)({
						...f(e),
						noun: "media",
						action: n.c.REJECT,
						actionInfo: {
							...d.actionInfo(e),
							reason: JSON.stringify(r.error)
						}
					})
				},
				k = (e, t) => {
					t.forEach(t => {
						const r = Object(o.f)(t.type);
						r && Object(l.a)({
							...f(e),
							action: n.c.DRAG,
							noun: r
						})
					})
				},
				N = (e, t, r) => {
					Object(l.a)({
						...f(e),
						noun: "input",
						postComposer: {
							inputType: r
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				T = (e, t, r) => {
					Object(l.a)({
						...f(e),
						noun: r,
						action: Object(m.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				L = e => M("input", e),
				w = () => M("add"),
				D = () => M("remove"),
				M = (e, t) => r => ({
					...f(r),
					noun: e,
					postComposer: {
						inputType: t,
						type: b.imageOnly
					},
					action: n.c.CLICK
				}),
				R = e => {
					Object(l.a)({
						...f(e),
						noun: "hide_oc_description",
						action: n.c.CLICK
					})
				},
				F = (e, t) => {
					if (t) {
						const r = d.subredditById(e, t);
						if (r) return {
							subreddit: r
						};
						const n = d.profileById(e, t);
						if (n) return {
							profile: n
						}
					}
				},
				B = (e, t) => {
					const {
						draftId: r,
						destSubreddit: n
					} = t, s = Object(u.i)(e), o = Object(c.d)(e, {
						draftId: r
					}), i = {
						authorId: s ? s.id : void 0,
						createdTimestamp: o ? o.created : void 0,
						id: r || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case a.b.Link:
							i.type = p.DraftType.Link, i.urlLength = t.body.length;
							break;
						case a.b.Markdown:
							i.type = p.DraftType.Self, i.bodyTextLength = t.body.length;
							break;
						case a.b.RichText:
							i.type = p.DraftType.RichText, t.documentStats && (i.bodyTextLength = t.documentStats.textLength, i.numberRteImages = t.documentStats.rteImagesCount, i.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case a.b.Image:
							i.type = p.DraftType.Image;
							break;
						case a.b.Video:
							i.type = p.DraftType.Video
					}
					return {
						postDraft: i,
						...F(e, n.id)
					}
				},
				A = (e, t) => {
					const r = Object(u.i)(e),
						n = {
							authorId: r ? r.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case a.b.Link:
							n.type = p.DraftType.Link, n.urlLength = (t.body || "").length;
							break;
						case a.b.Markdown:
							n.type = p.DraftType.Self, n.bodyTextLength = (t.body || "").length;
							break;
						case a.b.RichText:
							n.type = p.DraftType.RichText
					}
					return {
						postDraft: n,
						...F(e, t.subredditId)
					}
				},
				U = (e, t) => {
					Object(l.a)({
						noun: "draft_load",
						...f(e),
						...B(e, t)
					})
				},
				K = (e, t) => {
					Object(l.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...f(e),
						...B(e, t)
					})
				},
				H = (e, t) => {
					Object(l.a)({
						noun: "draft_delete",
						...f(e),
						...A(e, t)
					})
				},
				V = e => {
					Object(l.a)({
						...f(e),
						noun: "social_connect_link",
						action: n.c.CLICK
					})
				},
				q = (e, t) => {
					Object(l.a)({
						...f(e),
						noun: "twitter_share_checkbox",
						action: Object(m.getToggleAction)(t)
					})
				},
				G = (e, t, r) => {
					Object(l.a)({
						...f(e),
						...B(e, t),
						noun: "draft_share",
						action: r ? n.c.ENABLE : n.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return E
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "o", (function() {
				return P
			})), r.d(t, "s", (function() {
				return k
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "l", (function() {
				return T
			})), r.d(t, "p", (function() {
				return L
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return D
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "t", (function() {
				return V
			})), r.d(t, "w", (function() {
				return q
			})), r.d(t, "e", (function() {
				return G
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "u", (function() {
				return J
			})), r.d(t, "v", (function() {
				return X
			})), r.d(t, "h", (function() {
				return Y
			}));
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makePostDraftPageKey/index.ts"),
				a = r("./src/reddit/constants/parameters.ts"),
				c = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = r("./src/reddit/helpers/routeKey/index.ts"),
				u = r("./src/reddit/helpers/trackers/postComposer.ts"),
				l = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = r("./src/reddit/models/Comment/index.ts"),
				p = r("./src/reddit/models/Post/index.ts"),
				b = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				f = r("./src/reddit/selectors/profile.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/lib/makePostCreationPageKey/index.ts"),
				v = r("./src/lib/makeSearchKey/index.ts"),
				O = r("./src/reddit/helpers/correlationIdTracker.ts"),
				y = r("./src/reddit/helpers/trackers/searchResults.ts"),
				x = r("./src/reddit/selectors/postDraft.ts"),
				_ = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/telemetry/index.ts");
			const E = (e, t, r, n, u, b) => {
					const {
						route: f
					} = e, {
						name: h
					} = f.meta;
					if (!h) return;
					const O = t.platform.currentPage;
					switch (h) {
						case o.Db.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, i = Object(p.r)(o), a = Object(d.a)(e, t, t.posts.models[i]);
							if (!a) return;
							const u = s && Object(m.f)(s),
								{
									sortToUse: l
								} = Object(c.a)(t, i),
								b = !0;
							Object(j.a)(N(a, i, u, r, n, l, b)(t));
							break
						}
						case o.Db.INDEX:
						case o.Db.LISTING:
						case o.Db.MULTIREDDIT:
						case o.Db.SUBREDDIT: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i,
								queryParams: a
							} = e.match, {
								sort: c = (s.sort ? s.sort : o.P.HOT)
							} = i, u = a.t;
							Object(j.a)(S(s.listingKey, c, r, n, u)(t));
							break
						}
						case o.Db.TOPIC: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i
							} = e.match, a = s.sort ? s.sort : o.Q, {
								sort: c = a
							} = i;
							Object(j.a)(S(s.listingKey, c, r, n)(t));
							break
						}
						case o.Db.PROFILE_OVERVIEW: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								params: i,
								queryParams: a
							} = e.match, {
								sort: c = o.vb
							} = i, u = a.t;
							Object(j.a)(I(s, c, r, n, u)(t));
							break
						}
						case o.Db.PROFILE_POSTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = o.vb,
								t: c = o.wb
							} = i;
							Object(j.a)(C(s, a, r, n, c)(t));
							break
						}
						case o.Db.PROFILE_COMMENTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = o.vb,
								t: c = o.wb
							} = i;
							Object(j.a)(P(s, a, r, n, c)(t));
							break
						}
						case o.Db.PROFILE_PRIVATE: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							Object(j.a)(k(s)(n, r)(t));
							break
						}
						case o.Db.PROFILE_MODERATION:
							b && L(t, !0);
							break;
						case o.Db.SETTINGS: {
							const s = e;
							Object(j.a)(H(r, n)(t)), s.match.params.page === o.Qb.Profile && Object(l.j)(t);
							break
						}
						case o.Db.POST_CREATION:
							if (b && u) {
								const e = Object(g.a)(u);
								Object(j.a)(T(e, r, n)(t))
							}
							break;
						case o.Db.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(i.a)(e.match.params);
							if (!o) return;
							R(t, o, s, r, n);
							break
						}
						case o.Db.SUBREDDIT_WIKI:
							Object(j.a)(W(r, n)(t));
							break;
						case o.Db.COINS:
							Object(j.a)(F(r, n)(t)), Object(j.a)(B()(t));
							break;
						case o.Db.PREMIUM:
							Object(j.a)(A(r, n)(t)), Object(j.a)(U()(t));
							break;
						case o.Db.APPEAL:
							Object(j.a)(K(r, n)(t));
							break;
						case o.Db.INBOX_PAGES:
							b && M(t);
							break;
						case o.Db.MODERATION_PAGES:
							b && w(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Db.COLLECTION_COMMENTS:
							b && X(t, !0);
							break;
						case o.Db.MODQUEUE_PAGES:
							b && D(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Db.SUBREDDIT_LEADERBOARD:
							b && Object(j.a)(G()(t));
							break;
						case o.Db.SEARCH_RESULTS:
							if (b) {
								const o = Object(d.e)(e);
								if (!o) return;
								Object(j.a)(J(o, Object(v.c)(s()(O && O.queryParams || {}, a.t)), r, n, O)(t))
							}
							break;
						case o.Db.PUBLIC_ACCESS_NETWORK:
							b && Object(j.a)(V()(t));
							break;
						case o.Db.GEOTAGGING:
							b && Object(j.a)(Q()(t));
							break;
						case o.Db.SUBREDDIT_CREATION:
							b && Object(j.a)(q()(t));
							break;
						case o.Db.MOD_LISTING:
							b && Y(t, !0)
					}
				},
				S = (e, t, r, n, s, o) => i => {
					const {
						api: a
					} = i.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(i),
						actionInfo: _.actionInfo(i, {
							success: c
						}),
						customFeed: _.customFeed(i),
						listing: _.listing(i, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: _.subreddit(i),
						timer: _.timer(r, n),
						userSubreddit: _.userSubreddit(i),
						adblock: _.adblock(i),
						postFlair: {
							title: o
						}
					}
				},
				I = (e, t, r, n, s) => o => {
					const i = _.listing(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(o),
						actionInfo: _.actionInfo(o, {
							success: c
						}),
						profile: _.profile(o),
						snoovatar: _.snoovatar(o),
						subreddit: _.subreddit(o),
						timer: _.timer(r, n),
						userSubreddit: _.userSubreddit(o),
						adblock: _.adblock(o)
					}
				},
				C = (e, t, r, n, s) => o => {
					const i = _.listing(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(o),
						actionInfo: _.actionInfo(o, {
							success: c
						}),
						profile: _.profile(o),
						subreddit: _.subreddit(o),
						timer: _.timer(r, n),
						userSubreddit: _.userSubreddit(o),
						adblock: _.adblock(o)
					}
				},
				P = (e, t, r, n, s) => o => {
					const i = _.profileComments(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.profileCommentsPage, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(o),
						actionInfo: _.actionInfo(o, {
							success: c
						}),
						profile: _.profile(o),
						subreddit: _.subreddit(o),
						timer: _.timer(r, n),
						userSubreddit: _.userSubreddit(o),
						adblock: _.adblock(o)
					}
				},
				k = e => (t, r) => n => {
					const s = !n.profilePrivatePage.api.error[e] && !n.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(n),
						actionInfo: _.actionInfo(n, {
							success: s
						}),
						profile: _.profile(n),
						subreddit: _.subreddit(n),
						timer: _.timer(r, t),
						userSubreddit: _.userSubreddit(n),
						adblock: _.adblock(n)
					}
				},
				N = (e, t, r, n, s, o, i) => a => {
					const {
						api: c
					} = a.pages.comments, d = !c.error[e] && !c.pending[e], u = Object(b.c)(a, {
						postId: t,
						isForceSelected: i
					}), l = {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(a),
						actionInfo: _.actionInfo(a, {
							success: d,
							reason: u || void 0
						}),
						post: _.post(a, t),
						profile: _.profile(a),
						subreddit: _.subreddit(a),
						timer: _.timer(n, s),
						userSubreddit: _.userSubreddit(a),
						adblock: _.adblock(a),
						postEvent: _.postEventI13nSelector(a, {
							postId: t
						}),
						postCollection: _.postCollectionI13nSelector(a, {
							postId: t
						}),
						listing: _.listing(a, void 0, {
							sort: o
						})
					};
					return r && (l.comment = _.comment(a, r)), l
				},
				T = (e, t, r) => n => {
					const s = n.creations.api.page.fetched[e],
						o = n.platform.currentPage ? n.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(n),
						actionInfo: _.actionInfo(n, {
							success: s
						}),
						post: o ? _.post(n, o) : void 0,
						subreddit: _.subreddit(n),
						timer: _.timer(t, r),
						userSubreddit: _.userSubreddit(n),
						adblock: _.adblock(n)
					}
				},
				L = (e, t) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						})
					})
				},
				w = (e, t, r, n) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						}),
						profile: _.profileById(e, Object(f.m)(e, n)),
						subreddit: _.subredditById(e, Object(h.F)(e, r)),
						userSubreddit: _.userSubreddit(e),
						adblock: _.adblock(e)
					})
				},
				D = (e, t, r) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						profile: _.profileById(e, Object(f.m)(e, r)),
						subreddit: _.subredditById(e, Object(h.F)(e, t)),
						userSubreddit: _.userSubreddit(e),
						adblock: _.adblock(e)
					})
				},
				M = e => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e)
					})
				},
				R = (e, t, r, n, s) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!r,
						a = Object(x.h)(e, r);
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: i
						}),
						subreddit: _.subreddit(e),
						timer: _.timer(n, s),
						userSubreddit: _.userSubreddit(e),
						adblock: _.adblock(e),
						...a ? Object(u.m)(e, a) : {}
					})
				},
				F = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(O.c)(O.a.GoldPayment),
					..._.defaults(r),
					timer: _.timer(e, t),
					adblock: _.adblock(r)
				}),
				B = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				A = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(O.c)(O.a.GoldPayment),
					..._.defaults(r),
					timer: _.timer(e, t),
					adblock: _.adblock(r)
				}),
				U = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				K = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					..._.defaults(r),
					timer: _.timer(e, t)
				}),
				H = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(r),
					timer: _.timer(e, t)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: _.subreddit(e),
					..._.defaults(e)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				G = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					..._.defaults(e)
				}),
				W = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(r),
					customFeed: _.customFeed(r),
					subreddit: _.subreddit(r),
					timer: _.timer(e, t),
					userSubreddit: _.userSubreddit(r),
					adblock: _.adblock(r)
				}),
				Q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				J = (e, t, r, n, s, i) => a => {
					let c = !0;
					if (t.type.indexOf(o.Pb.Posts) > -1) {
						const {
							api: t
						} = a.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.Pb.Subreddits) > -1 || t.type.indexOf(o.Pb.Users) > -1) {
						const {
							api: t
						} = a.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					const d = _.paneName(a, s),
						u = _.structureType(a, s),
						l = a.platform.currentPage && a.platform.currentPage.urlParams && a.platform.currentPage.urlParams.subredditName ? _.subredditByName(a, a.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...y.c(a, t),
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(a),
						actionInfo: _.actionInfo(a, {
							success: c,
							paneName: d
						}),
						timer: _.timer(r, n),
						search: {
							..._.search(a, t, !0, s || void 0),
							...!!i && {
								originElement: i
							},
							queryId: Object(O.c)(O.a.SearchResults),
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						},
						...!!i && {
							correlationId: Object(O.c)(O.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !a.user.prefs.over18
						}
					}
				},
				X = (e, t) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						})
					})
				},
				Y = (e, t) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "r", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "s", (function() {
				return g
			})), r.d(t, "u", (function() {
				return v
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "o", (function() {
				return T
			})), r.d(t, "n", (function() {
				return L
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "m", (function() {
				return D
			})), r.d(t, "b", (function() {
				return M
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/constants/posts.ts"),
				o = r("./src/reddit/constants/tracking.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				u = "search_results_best",
				l = (e, t) => {
					const r = c.subreddit(e);
					return {
						screen: c.screen(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				m = (e, t) => r => {
					const n = t;
					return n.structureType = "related", {
						action: e,
						correlationId: Object(i.c)(i.a.SearchResults),
						noun: "related_search",
						source: d,
						search: c.search(r, n),
						...l(r)
					}
				},
				p = (e, t, r, n) => s => ({
					...l(s, r),
					source: d,
					action: "click",
					noun: t,
					actionInfo: c.actionInfo(s, n ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: n ? c.discoveryUnit(n) : null,
					search: c.search(s, r),
					post: c.post(s, e),
					media: c.media(s, e)
				}),
				b = (e, t, r, n, s) => o => ({
					...P(o, e, t, s, n, r),
					noun: "ad"
				}),
				f = (e, t, r) => s => {
					let o = !0;
					if (t.type.indexOf(n.Pb.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.Pb.Subreddits) > -1 || t.type.indexOf(n.Pb.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					return {
						...l(s, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: c.actionInfo(s, {
							success: o,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: c.discoveryUnit(r),
						search: c.search(s, t)
					}
				},
				h = (e, t) => r => ({
					action: "view",
					actionInfo: c.actionInfo(r),
					metaSearch: c.metaSearch(t),
					noun: e,
					screen: c.screen(r),
					search: c.smartSearch(r, t),
					source: d
				}),
				g = (e, t) => r => ({
					action: "click",
					actionInfo: c.actionInfo(r),
					noun: e,
					metaSearch: c.metaSearch(t),
					screen: c.screen(r),
					search: c.smartSearch(r, t),
					source: d
				}),
				v = (e, t, r) => n => ({
					source: d,
					action: "click",
					noun: c.SearchDropdownNouns.Recent,
					actionInfo: c.actionInfo(n, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: n.platform.currentPage ? c.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0,
						queryId: Object(i.c)(i.a.SearchResults)
					},
					...y(n, t)
				}),
				O = (e, t, r, n) => s => {
					const o = n.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: c.SearchDropdownNouns.Typeahead,
						actionInfo: c.actionInfo(s, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: s.platform.currentPage ? c.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
							queryId: Object(i.c)(i.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: o.map(e => e.id),
							numberSubreddits: o.length
						},
						...y(s, t)
					}
				},
				y = (e, t) => {
					const r = t.isSubreddit && t.id ? c.subredditForSearch(e, t.id) : void 0,
						n = t.isProfile && t.id ? c.profileForSearch(e, t.id) : void 0,
						s = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || s : void 0,
						profile: t.isProfile ? n || s : void 0
					}
				},
				x = (e, t, r) => n => ({
					action: t,
					actionInfo: c.actionInfo(n),
					noun: e,
					screen: c.screen(n),
					search: c.search(n, r),
					source: u
				});
			var _;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(_ || (_ = {}));
			const j = (e, t) => r => ({
					...l(r, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(r),
					search: c.search(r, t)
				}),
				E = (e, t) => r => ({
					...l(r, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(r),
					search: c.search(r, t)
				}),
				S = (e, t) => r => ({
					action: "click",
					correlationId: Object(i.c)(i.a.SearchResults),
					noun: e ? n.Ob.ToSubreddit : n.Ob.ToGlobal,
					search: c.search(r, t),
					source: d
				}),
				I = (e, t, r, n) => s => ({
					...l(s, r),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(s, {
						relativePosition: c.getRelativePostOrder(s, t, e)
					}),
					search: {
						...c.search(s, r),
						...!!n && {
							originElement: n
						}
					},
					post: c.post(s, t)
				}),
				C = (e, t, r, n, s) => o => P(o, e, t, r, n, s),
				P = (e, t, r, n, s, a) => {
					const u = c.paneName(e, n),
						l = c.postRelativePosition(e, t, s, a),
						m = c.amountOfElementsBeforePost(e, r, s, a, u),
						p = null !== l ? m + l : null,
						b = c.structureType(e, n),
						f = {
							...c.search(e, r, !0, n || void 0),
							structureType: b,
							queryId: Object(i.c)(i.a.SearchResults)
						};
					return {
						source: d,
						action: o.c.CLICK,
						noun: "post",
						actionInfo: n ? {
							pageType: c.getPageTypeFromCurrentPage(n),
							paneName: u,
							position: p,
							relativePosition: l
						} : c.actionInfo(e, {
							paneName: u,
							position: p,
							relativePosition: l
						}),
						search: f,
						post: c.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: a ? c.discoveryUnit(a) : null
					}
				},
				k = (e, t, r, n, s, o) => i => N(i, e, t, r, n, s, o),
				N = (e, t, r, n, u, l, m) => {
					if (!n) {
						n = Object(a.I)(e, {
							postId: l
						}).belongsTo
					}
					const p = c.paneName(e, r);
					let b, f;
					if (l) {
						b = c.postRelativePosition(e, l, u, m);
						const r = c.amountOfElementsBeforePost(e, t, u, m, p);
						f = null !== b ? r + b : null
					} else {
						b = c.communityRelativePosition(e, n.id, u, m);
						const t = c.amountOfElementsBeforeCommunity(e, u, m);
						f = null !== b ? t + b : null
					}
					const h = c.structureType(e, r),
						g = {
							...c.search(e, t, !0, r || void 0),
							structureType: h,
							queryId: Object(i.c)(i.a.SearchResults)
						};
					return {
						source: d,
						action: o.c.CLICK,
						noun: n.type,
						search: g,
						subreddit: n.type === s.a.SUBREDDIT ? c.subredditForSearch(e, n.id) : void 0,
						profile: n.type === s.a.PROFILE ? c.profileForSearch(e, n.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: m ? c.discoveryUnit(m) : null,
						actionInfo: r ? {
							pageType: c.getPageTypeFromCurrentPage(r),
							paneName: p,
							position: f,
							relativePosition: b
						} : c.actionInfo(e, {
							paneName: p,
							position: f,
							relativePosition: b
						}),
						post: l ? c.post(e, l) : void 0
					}
				},
				T = (e, t) => r => ({
					...l(r, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(r),
					search: {
						...c.search(r, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: c.subreddit(r)
				}),
				L = (e, t, r, n, s) => i => ({
					...P(i, t, r, n, e, s),
					action: o.c.VIEW
				}),
				w = (e, t, r, n) => s => ({
					...l(s, r),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(s, {
						relativePosition: c.getRelativePostOrder(s, t, e),
						position: c.getAbsoluteOrder(s, t, e)
					}),
					search: {
						...c.search(s, r),
						...!!n && {
							originElement: n
						}
					},
					post: c.post(s, t)
				}),
				D = (e, t, r) => n => ({
					...l(n),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: {
						...c.search(n, t),
						...!!r && {
							originElement: r
						}
					},
					[e]: c[e](n)
				}),
				M = (e, t) => r => ({
					...l(r, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(r),
					search: c.search(r, t)
				})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = r.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", d({}, r, {
				className: Object(o.a)(c.a.compactDownvoteWrapper, r.className)
			}), s.a.createElement(u, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, r, {
				className: Object(o.a)(c.a.downvoteWrapper, r.className)
			}), s.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = r.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", d({}, r, {
				className: Object(o.a)(c.a.compactUpvoteWrapper, r.className)
			}), s.a.createElement(u, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, r, {
				className: Object(o.a)(c.a.upvoteWrapper, r.className)
			}), s.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...r
			}) => s.a.createElement("svg", c({
				className: Object(o.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, r) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/constants/postLayout.ts"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/selectors/structuredStyles.ts"),
				l = r("./src/reddit/layout/page/Listing/Content.m.less"),
				m = r.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.t)(),
				f = Object(i.c)({
					isEditing: u.i,
					layout: (e, t) => t.forcedLayout || Object(d.N)(e, t)
				}),
				h = Object(o.b)(f),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: r,
					forcedLayout: n,
					isCollectionLayout: o,
					isEditing: i,
					layout: a,
					pageLayer: c,
					...d
				}) => s.a.createElement("div", d);
			t.a = b(h(({
				className: e,
				...t
			}) => s.a.createElement(g, p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, r) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/layout/page/Listing/Content.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/constants/componentSizes.ts"),
				u = r("./src/reddit/constants/elementClassNames.ts"),
				l = r("./src/reddit/constants/screenWidths.ts"),
				m = r("./src/reddit/models/Theme/index.ts"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = r("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class f extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var h = Object(b.a)(f);
			var g = e => s.a.createElement(h, e),
				v = r("./src/reddit/layout/page/Listing/index.m.less"),
				O = r.n(v);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: r,
						redditStyle: n,
						theme: o,
						...a
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return s.a.createElement("div", y({
						className: Object(i.a)(O.a.backgroundContainer, r),
						style: d
					}, a))
				}),
				_ = c.a.div("Body", O.a),
				j = c.a.div("Sidebar", O.a),
				E = e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null;

			function S(e) {
				const t = e.trendingUnit ? "28px" : "0",
					r = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					n = e.sidebar && s.a.createElement(j, {
						className: e.isCollectionLayout ? O.a["m-collectionLayout"] : O.a.defaultLayout,
						style: r
					}, e.sidebar),
					a = s.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, n, a) : s.a.createElement(s.a.Fragment, null, a, n);
				const m = e.disableFullscreen ? `${e.maxWidth||l.a+2*d.m}px` : "100%";
				return s.a.createElement(g, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(i.a)(O.a.outerContainer, u.i, e.className),
					ref: e.containerRef
				}, s.a.createElement(x, {
					className: u.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: O.a.innerContainer
				}, s.a.createElement("div", {
					className: O.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, E(e), s.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), s.a.createElement(_, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/fromPairs.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/extractQueryParams/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/modListing/index.ts"),
				p = r("./src/reddit/components/EmptySubreddit.tsx"),
				b = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = r("./src/reddit/components/JumpToContent/index.tsx"),
				h = r("./src/reddit/components/ListingPostList/index.tsx"),
				g = r("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./src/higherOrderComponents/asModal/index.tsx"),
				y = r("./src/reddit/actions/modal.ts"),
				x = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				j = r("./src/reddit/controls/TextButton/index.tsx"),
				E = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				S = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				I = r("./src/reddit/selectors/activeModalId.ts"),
				C = r("./src/reddit/selectors/modQueue.ts"),
				P = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				k = r.n(P);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), T = Object(O.a)(e => i.a.createElement(x.d, {
				className: k.a.modalBody
			}, i.a.createElement(x.h, null, i.a.createElement(S.a, null, i.a.createElement(x.p, {
				className: k.a.modalTitle
			}, i.a.createElement(E.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(j.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(x.b, null)))), i.a.createElement(x.k, {
				className: k.a.modalMain
			}, i.a.createElement("div", {
				className: k.a.modalDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(_.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), L = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: k.a.feedDetailsTitle
			}, i.a.createElement(E.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: k.a.feedDetailsDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(_.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: k.a.loadingBar
			})), w = Object(c.c)({
				isModalOpen: Object(I.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.f
			});
			var D = Object(a.b)(w, (e, {}) => ({
					toggleModal: () => e(Object(y.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: r,
						toggleModal: n
					} = e;
					return r ? i.a.createElement(i.a.Fragment, null, i.a.createElement(L, {
						moderatedCommunitiesIds: r,
						onSeeMoreDetails: n
					}), t && i.a.createElement(T, {
						moderatedCommunitiesIds: r,
						onCloseModal: n,
						onOverlayClick: n,
						withOverlay: !0
					})) : null
				}),
				M = r("./node_modules/react-router-redux/es/index.js"),
				R = r("./src/reddit/components/TrackingHelper/index.tsx"),
				F = r("./src/reddit/contexts/PageLayer/index.tsx"),
				B = r("./src/reddit/controls/Button/index.tsx");
			const A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				U = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				K = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var H = r("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var q = r("./src/reddit/constants/keycodes.ts"),
				G = r("./src/reddit/layout/row/Inline/index.tsx"),
				W = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Q = r.n(W);
			const J = Object(c.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
			});
			class X extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(A()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === q.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(G.a, null, i.a.createElement("input", {
						className: Q.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: v.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), i.a.createElement(B.i, {
						"aria-label": v.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, v.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && i.a.createElement("div", {
						className: Q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var Y = Object(a.b)(J, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(R.c)(X)),
				z = r("./src/lib/lessComponent.tsx"),
				Z = r("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = r("./src/reddit/icons/fonts/Clear/index.tsx"),
				ee = r("./src/reddit/selectors/profile.ts"),
				te = r("./src/reddit/selectors/subreddit.ts"),
				re = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				ne = r.n(re);
			const se = z.a.wrapped(Z.b, "SubredditIcon", ne.a),
				oe = Object(c.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const r = Object(te.A)(e, {
							subredditName: t.subredditName
						});
						if (!r) {
							const r = (e => e.startsWith(d.Wb) ? e.slice(2) : e)(t.subredditName);
							return r && Object(ee.j)(e, {
								profileName: r
							}) || null
						}
						return r
					}
				});
			class ie extends i.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(U()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? i.a.createElement(_.a, {
						className: ne.a.row,
						to: e.subredditOrProfile.url
					}, i.a.createElement(se, {
						subredditOrProfile: e.subredditOrProfile
					}), i.a.createElement("span", {
						className: ne.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && i.a.createElement("button", {
						"aria-label": v.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: ne.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, i.a.createElement($.a, null))) : null
				}
			}
			var ae = Object(a.b)(oe, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(R.c)(ie)),
				ce = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				de = r.n(ce);
			const {
				fbt: ue
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var le = ({
					hiddenSubredditsNames: e
				}) => {
					const t = e.map(e => i.a.createElement(ae, {
						key: e,
						subredditName: e
					}));
					return i.a.createElement(i.a.Fragment, null, e.length ? i.a.createElement("div", {
						className: de.a.rows
					}, t) : i.a.createElement("div", {
						className: de.a.noRows
					}, ue._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				me = r("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				pe = r.n(me);
			const {
				fbt: be
			} = r("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(F.t)({
				filtered: e => !!e && Object(H.d)(e.url)
			}), he = Object(c.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ge extends i.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(K(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", {
						className: pe.a.container
					}, i.a.createElement("div", {
						className: pe.a.hideCommunitiesHeader
					}, be._("Hide communities", null, {
						hk: "15OtHo"
					})), i.a.createElement(B.o, {
						className: pe.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? be._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : be._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && i.a.createElement("div", {
						className: pe.a.inputContainer
					}, i.a.createElement(Y, null), i.a.createElement(le, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var ve = fe(Object(a.b)(he, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(M.b)(t ? H.a : H.b))
				}))(Object(R.c)(ge))),
				Oe = r("./src/reddit/components/SidebarContainer/index.tsx"),
				ye = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				xe = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var _e = () => i.a.createElement(Oe.a, null, i.a.createElement(xe.a, {
					title: v.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(D, null), i.a.createElement(ve, null)), i.a.createElement(ye.a, null)),
				je = r("./src/reddit/constants/page.ts"),
				Ee = r("./src/reddit/constants/parameters.ts"),
				Se = r("./src/reddit/helpers/trackers/screenview.ts"),
				Ie = r("./src/reddit/layout/page/Listing/index.tsx"),
				Ce = r("./src/reddit/selectors/moderatorPermissions.ts");
			const Pe = Object(c.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || d.P.HOT, (e, {
					match: t
				}) => Object(H.d)(t.path), Ce.g, Ce.c, (e, t, r, n, o) => {
					const i = s()([...Object(u.a)(e)]),
						a = Ee.x in i && i[Ee.x].toUpperCase(),
						c = "string" == typeof a && a in d.Ub ? d.Ub[a] : d.Vb,
						m = r ? je.e : je.d;
					return {
						filtered: r,
						isModerator: n,
						isModeratorWithPostPerms: o,
						listingKey: Object(l.a)(m, t, i),
						listingName: m,
						sort: t,
						timeSort: c
					}
				}),
				ke = Object(a.b)(Pe, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Ne extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Se.f)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => i.a.createElement(p.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? H.b : H.a;
					return i.a.createElement("div", null, this.props.isModeratorWithPostPerms ? i.a.createElement(Ie.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(b.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), i.a.createElement(f.a, null), i.a.createElement(h.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: i.a.createElement(_e, null)
					}) : i.a.createElement(g.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = ke(Ne)
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => n.v.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.s
				}),
				i = e => n.Zb.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Tb
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.33f565759546ee73ad63.js.map