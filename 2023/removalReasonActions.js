// https://www.redditstatic.com/desktop2x/removalReasonActions.6430315fd07690acc6d7.js
// Retrieved at 7/25/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = -1, s = null == e ? 0 : e.length; ++r < s;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return s(e, (function(e, s, n) {
					return r = !!t(e, s, n)
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayEvery.js"),
				n = r("./node_modules/lodash/_baseEvery.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/isArray.js"),
				i = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var c = a(e) ? s : n;
				return r && i(e, t, r) && (t = void 0), c(e, o(t, 3))
			}
		},
		"./node_modules/lodash/map.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayMap.js"),
				n = r("./node_modules/lodash/_baseIteratee.js"),
				o = r("./node_modules/lodash/_baseMap.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? s : o)(e, n(t, 3))
			}
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = r("./node_modules/ts-error/lib/helpers.js"),
				n = s.setPrototypeOf,
				o = s.getPrototypeOf,
				a = s.defineProperty,
				i = s.objectCreate,
				c = "[object Error]" === (new Error).toString(),
				d = "";

			function l(e) {
				var t, r = this.constructor,
					s = r.name || (null === (t = r.toString().match(/^function\s*([^\s(]+)/)) ? d || "Error" : t[1]),
					i = "Error" === s,
					u = i ? d : s,
					p = Error.apply(this, arguments);
				if (n(p, o(this)), !(p instanceof r && p instanceof l)) {
					p = this;
					Error.apply(this, arguments), a(p, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (a(p, "name", {
						configurable: !0,
						enumerable: !1,
						value: u,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(p, i ? l : r), void 0 === p.stack) {
					var m = new Error(e);
					m.name = p.name, p.stack = m.stack
				}
				return c && a(p, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), p
			}
			d = l.name || "ExtendableError", l.prototype = i(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = l, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = "function" == typeof Object.setPrototypeOf,
				n = "function" == typeof Object.getPrototypeOf,
				o = "function" == typeof Object.defineProperty,
				a = "function" == typeof Object.create,
				i = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				s ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return n ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var c = !1;
			t.defineProperty = function e(t, r, s) {
				if (o && !c) try {
					Object.defineProperty(t, r, s)
				} catch (n) {
					c = !0, e(t, r, s)
				} else t[r] = s.value
			};
			var d = function(e, t) {
				return i ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = d;
			t.objectCreate = function(e, t) {
				if (a) return Object.create(e, t);
				var r = function() {};
				r.prototype = e;
				var s = new r;
				if (void 0 === t) return s;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var n in t) d(t, n) && (s[n] = t[n].value);
				return s
			}
		},
		"./src/lib/asyncActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = e => `${e}_REQUESTED`,
				o = e => `${e}_SUCCEEDED`,
				a = e => `${e}_FAILED`;

			function i(e) {
				const t = n(e),
					r = o(e),
					i = a(e);
				return {
					requestedActionType: t,
					requested: Object(s.a)(t),
					succeededActionType: r,
					succeeded: Object(s.a)(r),
					failedActionType: i,
					failed: Object(s.a)(i)
				}
			}
			var c;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(c || (c = {}));
			const d = (e, t, r) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.New,
					n = arguments.length > 1 ? arguments[1] : void 0;
				switch (n.type) {
					case e:
						return s === c.New ? c.Pending : s;
					case t:
						return s === c.Pending ? c.Succeeded : s;
					case r:
						return s === c.Pending ? c.Failed : s;
					default:
						return s
				}
			})
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			r("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var s = r("./src/config.ts"),
				n = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const o = e => "object" == typeof e && null !== e,
				a = () => "undefined" != typeof window && o(window) && o(window.grecaptcha) && o(window.grecaptcha.enterprise),
				i = () => a() ? window.grecaptcha.enterprise : void 0,
				c = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				d = e => Object(n.a)(c(e), a),
				l = e => new Promise(t => e.ready(t));
			var u, p = r("./node_modules/ts-error/lib/cjs.js"),
				m = r.n(p);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends m.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends m.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends m.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD", e.PostSubmit = "post_submit", e.CommentSubmit = "comment_submit"
			}(u || (u = {}));
			var b = u;
			const f = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a.reCaptchaEnterprise.siteKey,
						r = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => c(this.siteKey), this.ensureSiteKey = () => {
						if (!this.hasSiteKey) throw new MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError
					}, this.ensureClient = () => {
						const e = this.instance;
						if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
						return e
					}, this.waitUntilClientIsReady = async () => {
						const e = this.ensureClient();
						return await l(e), this.isReady = !0, e
					}, this.ensureClientIsReady = () => {
						const e = this.ensureClient();
						if (!this.isReady) throw new ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError;
						return e
					}, this.loadScript = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (!e.instance || t) {
							e.ensureSiteKey(), await d(e.siteKey);
							const t = i();
							if (!t) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							e.setInstance(t)
						}
						e.isReady || await e.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							r = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(r)[1]
						}
						return r
					}, this.setInstance(r || i())
				}
			};
			t.b = f
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, r) {},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(s.a)(n.c),
				a = Object(s.a)(n.b),
				i = Object(s.a)(n.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return R
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "b", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeCommentsPageKey/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/shortcuts/utils.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/endpoints/comment/index.tsx"),
				p = r("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				m = r("./src/reddit/models/Reportable/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/actions/comment/index.ts"),
				O = r("./src/reddit/actions/comment/constants.ts");
			const E = Object(o.a)(O.p),
				R = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					r().features.comments.models[e] && (await Object(u.j)(n(), e)).ok && t((e => async t => {
						t(E({
							commentId: e
						}))
					})(e))
				}, y = e => async (t, r, n) => {
					let {
						apiContext: o
					} = n;
					if (!Object(_.S)(r())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = r().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? u.l : u.f;
					t(Object(h.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await c(o(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, v = Object(o.a)(O.J), j = e => async (t, r, s) => {
					let {
						apiContext: n,
						gqlContext: o
					} = s;
					const a = r(),
						i = a.features.comments.models[e],
						d = a.user.account ? a.user.account.displayText : null;
					i && d && (t(Object(h.j)({
						[e]: {
							isApproved: !0,
							approvedBy: d,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(o(), e)).ok || t(Object(h.j)({
						[e]: {
							isApproved: i.isApproved,
							approvedBy: null,
							bannedBy: i.bannedBy,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							modNote: i.modNote,
							modReasonBy: i.modReasonBy,
							modRemovalReason: i.modRemovalReason,
							numReports: i.numReports || null
						}
					})), Object(c.d)())
				}, S = (e, t) => async (r, s, n) => {
					let {
						apiContext: o,
						gqlContext: a
					} = n;
					const i = s(),
						d = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					d && l && (r(Object(h.j)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(a(), e, t)).ok || r(Object(h.j)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam,
							numReports: d.numReports
						}
					})), Object(c.d)())
				}, A = e => async (t, r, n) => {
					let {
						apiContext: o
					} = n;
					const a = r().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? u.k : u.e;
					a.ignoreReports || t(j(e)), t(Object(h.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(o(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, C = (e, t, r) => async (o, a, i) => {
					let {
						gqlContext: c
					} = i;
					const l = Object(f.c)(a(), {
						commentId: e
					});
					if (!l) return;
					const u = r === n.kc.Snoozed,
						_ = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(p.a)(c(), {
							input: _
						})).ok) o(Object(h.j)({
						[e]: {
							userReports: Object(m.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(d.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						o(Object(d.f)(e))
					}
				}, g = (e, t, r) => async (s, o, i) => {
					let {
						apiContext: c,
						gqlContext: d
					} = i;
					const l = o(),
						p = l.features.comments.models[e];
					if (!p) return;
					const m = p.postId,
						b = l.postStickiedComments.data[m];
					s(Object(h.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.I.ADMIN,
							isMod: t === n.I.MODERATOR,
							isStickied: !!r
						}
					})), r && b && b !== e && s(Object(h.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(u.c)(d(), e, t),
						_ = Object(u.d)(d(), e, !!r),
						O = [f];
					(r || !r && e === b) && O.push(_), (await Promise.all(O)).every(e => e.ok) ? r && s(v({
						id: e,
						postId: m,
						commentsPageKey: Object(a.a)(m, null, {
							sort: n.v.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (s(Object(h.j)({
						[e]: {
							distinguishType: p.distinguishType,
							isAdmin: p.isAdmin,
							isMod: p.isMod,
							isStickied: p.isStickied
						}
					})), s(Object(h.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "e", (function() {
				return E
			}));
			var s = r("./src/lib/asyncActions/index.ts"),
				n = r("./src/lib/constants/euCookiePolicy.ts"),
				o = r("./src/lib/reCaptchaEnterprise/index.ts"),
				a = r("./src/lib/sentry/index.ts");

			function i(e) {
				return t => async (r, s, n) => {
					const o = s();
					if (e(o)) return t(r, s, n)
				}
			}
			var c = r("./node_modules/lodash/every.js"),
				d = r.n(c),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/featureFlags/utils.ts"),
				p = r("./src/reddit/helpers/chooseVariant/index.ts");
			const m = e => l.d.reCaptchaEnterprise(e),
				b = (e, t) => !!Object(p.c)(e, {
					experimentEligibilitySelector: Object(u.d)(Object(u.b)(...n.c)),
					experimentName: t
				}),
				f = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return i(t => d()([m(t), b(t, e), e => e.tracking.reCaptchaEnterprise.load === s.a.New], Boolean))(async e => {
						e(f.requested());
						try {
							await o.b.loadScript(), e(f.succeeded())
						} catch (r) {
							if (e(f.failed()), !t) throw r;
							a.c.withScope(e => {
								Object(a.a)(e, {
									serverLogging: !1
								}), a.c.captureException(r)
							})
						}
					})
				},
				h = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				O = e => i(t => d()([m(t), b(t, e.experiment), e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], Boolean))(async t => {
					t(h.requested());
					try {
						const r = await o.b.execute({
							action: e.action,
							fast: e.fast
						});
						return t(h.succeeded({
							token: r
						})), r
					} catch (r) {
						if (t(h.failed()), e.catchAndLogError) return a.c.withScope(e => {
							Object(a.a)(e, {
								serverLogging: !1
							}), a.c.captureException(r)
						}), "";
						throw r
					}
				}),
				E = Object(s.b)("SEND_RECAPTCHA_TOKEN")
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "removalReasonsPending", (function() {
				return Y
			})), r.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), r.d(t, "removalReasonsFailed", (function() {
				return te
			})), r.d(t, "removalReasonsRequested", (function() {
				return re
			})), r.d(t, "removalReasonAddedPending", (function() {
				return se
			})), r.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), r.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), r.d(t, "addRemovalReason", (function() {
				return ae
			})), r.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), r.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), r.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), r.d(t, "editRemovalReason", (function() {
				return le
			})), r.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), r.d(t, "deleteRemovalReasonSuccess", (function() {
				return pe
			})), r.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), r.d(t, "deleteRemovalReason", (function() {
				return be
			})), r.d(t, "removedItemsSelected", (function() {
				return fe
			})), r.d(t, "fetchReasonsAndOpenModal", (function() {
				return _e
			})), r.d(t, "removalReasonSubmittedPending", (function() {
				return he
			})), r.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), r.d(t, "removalReasonSubmittedFailed", (function() {
				return Ee
			})), r.d(t, "removalReasonMessagePending", (function() {
				return Re
			})), r.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ye
			})), r.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), r.d(t, "removalReasonMessageFailed", (function() {
				return je
			})), r.d(t, "submitRemovalReason", (function() {
				return Se
			})), r.d(t, "submitBulkRemovalReason", (function() {
				return Ae
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				p = "REMOVALREASONS__EDIT_FAILED",
				m = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				f = "REMOVALREASONS__DELETE_FAILED";
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case i:
					case c:
					case l:
					case u:
					case m:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case p:
					case f:
						return t.payload;
					default:
						return e
				}
			};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case m:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case d:
						case u:
						case p:
						case b:
						case f:
							return !1;
						default:
							return e
					}
				},
				O = Object(o.c)({
					error: _,
					pending: h
				});
			const E = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: r
						} = t.payload, {
							data: s
						} = r;
						return {
							...e,
							...s
						}
					}
					case c:
					case u: {
						const {
							reason: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case b: {
						const {
							reasonId: r
						} = t.payload, {
							[r]: s,
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const y = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							order: n
						} = s;
						return {
							...e,
							[r]: n
						}
					}
					case c: {
						const {
							subredditId: r,
							reason: s
						} = t.payload;
						return {
							...e,
							[r]: [...e[r], s.id]
						}
					}
					case b: {
						const {
							subredditId: r,
							reasonId: s
						} = t.payload, n = [...e[r]].filter(e => e !== s);
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: r
							} = t.payload;
							return {
								itemIds: r,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				S = Object(o.c)({
					api: O,
					models: R,
					reasonOrder: v,
					removedItemIds: j
				}),
				A = r("./src/lib/constants/index.ts"),
				C = r("./src/lib/makeActionCreator/index.ts"),
				g = r("./src/lib/makeCommentsPageKey/index.ts"),
				x = r("./src/lib/makeDraftKey/index.ts"),
				I = r("./src/reddit/actions/bulkActions/index.ts"),
				w = r("./src/reddit/actions/comment/index.ts"),
				P = r("./src/reddit/actions/comment/authoring.ts"),
				k = r("./src/reddit/actions/comment/moderation.ts"),
				N = r("./src/reddit/actions/modal.ts"),
				T = r("./src/reddit/actions/post.ts"),
				L = r("./src/reddit/actions/toaster.ts"),
				D = r("./src/reddit/constants/modals.ts"),
				M = r("./src/lib/makeApiRequest/index.ts"),
				K = r("./src/lib/omitHeaders/index.ts"),
				B = r("./src/reddit/constants/headers.ts"),
				V = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				U = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(M.a)(Object(K.a)(e, [B.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: A.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, r) => Object(M.a)(Object(K.a)(e, [B.a]), {
					endpoint: Object(V.a)(Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${r}_message/`)),
					method: A.ob.POST,
					type: "json",
					data: t
				});
			var $ = r("./src/reddit/helpers/isPost.ts"),
				q = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = r("./src/reddit/helpers/routeKey/index.ts"),
				z = r("./src/reddit/models/ModQueue/index.ts"),
				J = r("./src/reddit/models/PostDraft/index.ts"),
				Q = r("./src/reddit/models/RemovalReason/index.ts"),
				X = r("./src/reddit/models/Toast/index.ts"),
				Z = r("./src/reddit/selectors/comments.ts"),
				W = r("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: S
				}
			});
			const Y = Object(C.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(C.a)(a),
				te = Object(C.a)("REMOVALREASONS__LOAD_FAILED"),
				re = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					const o = r().subreddits.models[e].name;
					t(Y());
					const a = await ((e, t) => Object(M.a)(Object(K.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: A.ob.GET
					}))(n(), o);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, se = Object(C.a)(i), ne = Object(C.a)(c), oe = Object(C.a)(d), ae = (e, t) => async (r, n, o) => {
					let {
						apiContext: a
					} = o;
					const i = n().subreddits.models[e].name;
					r(se());
					const c = await ((e, t, r) => Object(M.a)(Object(K.a)(e, [B.a]), {
						endpoint: Object(V.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: A.ob.POST,
						data: r
					}))(a(), i, t);
					if (c.ok) {
						const {
							id: n
						} = c.body, o = {
							...t,
							id: n
						};
						r(ne({
							subredditId: e,
							reason: o
						})), r(Object(L.f)({
							kind: X.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else r(oe(c.error))
				}, ie = Object(C.a)(l), ce = Object(C.a)(u), de = Object(C.a)(p), le = (e, t) => async (r, n, o) => {
					let {
						apiContext: a
					} = o;
					const i = n().subreddits.models[e].name;
					r(ie());
					const c = await ((e, t, r) => Object(M.a)(Object(K.a)(e, [B.a]), {
						endpoint: Object(V.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${r.id}`),
						method: A.ob.PUT,
						data: {
							message: r.message,
							title: r.title
						}
					}))(a(), i, t);
					c.ok ? (r(ce({
						subredditId: e,
						reason: t
					})), r(Object(L.f)({
						kind: X.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : r(de(c.error))
				}, ue = Object(C.a)(m), pe = Object(C.a)(b), me = Object(C.a)(f), be = (e, t) => async (r, n, o) => {
					let {
						apiContext: a
					} = o;
					const i = n().subreddits.models[e].name;
					r(ue());
					const c = await ((e, t, r) => Object(M.a)(Object(K.a)(e, [B.a]), {
						endpoint: Object(V.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${r}`),
						method: A.ob.DELETE
					}))(a(), i, t);
					c.ok ? (r(pe({
						subredditId: e,
						reasonId: t
					})), r(Object(L.f)({
						kind: X.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : r(me(c.error))
				}, fe = Object(C.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), _e = (e, t) => async (r, s, n) => {
					let {
						apiContext: o
					} = n;
					const a = s();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || r(re(e)), r(fe({
						subredditId: e,
						itemIds: t
					})), r(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, he = Object(C.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(C.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ee = Object(C.a)("REMOVALREASONS__SUBMIT_FAILED"), Re = Object(C.a)("REMOVALREASONS__MESSAGE_PENDING"), ye = Object(C.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(C.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), je = Object(C.a)("REMOVALREASONS__MESSAGE_FAILED"), Se = (e, t, r, s, n, o) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText,
						p = e[0],
						m = Object($.a)(p) ? Q.e.Post : Q.e.Comment,
						b = m === Q.e.Post ? l.posts.models[p] : l.features.comments.models[p],
						f = m === Q.e.Post ? T.Q : w.j;
					if (!b || !u) return !1;
					a(he()), a(f({
						[p]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const _ = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						h = await F(d(), _);
					if (h.ok) {
						if (a(Oe()), t) {
							a(Re());
							const n = {
									itemId: e,
									message: r,
									title: t.title,
									isLocked: o,
									type: s
								},
								i = await G(d(), Object(Q.h)(n, m), m);
							if (i.ok) {
								if ([Q.f.Public, Q.f.PublicAsSubreddit].includes(s)) {
									if (a(ve()), i.body) {
										const e = Object(q.a)(i.body),
											t = {
												comment: e,
												parentId: p
											},
											r = Object(W.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let n = r && s && Object(H.a)(s, l, l.posts.models[e.postId]);
										if (n || (n = Object(g.a)(e.postId, null, {
												sort: A.w,
												hasSortParam: !0
											})), m === Q.e.Post) {
											const r = Object(x.a)(J.c.replyToPost, p);
											a(Object(P.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: r
											}));
											const s = l.postStickiedComments.data[p];
											a(Object(k.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), s && s !== e.id && a(Object(w.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (m === Q.e.Comment) {
											const e = Object(x.a)(J.c.replyToComment, b.id),
												r = Object(Z.j)(l, {
													commentId: p,
													commentsPageKey: n
												});
											a(Object(P.p)({
												...t,
												parentCommentId: p,
												commentsPageKey: n,
												draftKey: e,
												depth: r + 1
											}))
										}
									}
								} else a(ye());
								return !0
							}
							return a(je(i.error)), !1
						}
					} else a(Ee(h.error)), a(f({
						[p]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ae = (e, t, r, n, o) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					a(he());
					const p = Object(L.f)({
							kind: X.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						m = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await F(d(), m);
					if (b.ok) {
						const s = {
							ids: e,
							operation: z.a.RemovalReason,
							username: u,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (a(Object(I.b)(s)), t) {
							const s = {
									itemId: e,
									message: r,
									title: t.title,
									type: n
								},
								o = await G(d(), Object(Q.h)(s, Q.e.Bulk), Q.e.Bulk);
							o.ok ? (a(ye()), a(p)) : a(je(o.error))
						} else a(p)
					} else a(Ee(b.error))
				}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return h
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = r.n(l),
				p = r("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = p.a.div("Text", u.a),
				f = p.a.div("BottomText", u.a),
				_ = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				h = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				O = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: r
						} = t;
						return Object(d.b)(r)(e)
					}
				}),
				E = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				R = Object(c.a)(_, [i.a.Click, i.a.Keydown]),
				y = Object(o.b)(O);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(E, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(R, m({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				a = r("./src/reddit/constants/elementIds.ts"),
				i = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(o.a)(e, t);
				class s extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(r, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(s)
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./src/lib/fastdom/index.ts");
			const o = "https://js.stripe.com/v3/",
				a = "https://www.paypalobjects.com/api/checkout.js",
				i = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${s.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function c(e, t) {
				return t() ? Promise.resolve() : new Promise((r, s) => n.a.write(() => {
					t() && r();
					const n = document.head;
					let o = n.querySelector(`script[src='${e}']`);

					function a() {
						this.removeEventListener("load", a), this.removeEventListener("error", i), r()
					}

					function i() {
						this.removeEventListener("load", a), this.removeEventListener("error", i), o && n.removeChild(o), s()
					}
					o || ((o = document.createElement("script")).src = e, n.appendChild(o)), o.addEventListener("load", a), o.addEventListener("error", i)
				}))
			}

			function d() {
				return c(o, () => "undefined" != typeof Stripe)
			}

			function l() {
				return c(a, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(i).map(e => {
					const t = "__" + e;
					return c(i[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/isComment.ts"),
				o = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				a = r("./src/reddit/models/Vote/index.ts"),
				i = e => !0 === e ? a.a.upvoted : !1 === e ? a.a.downvoted : a.a.notVoted,
				c = r("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: l(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === s.G,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: d(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(n.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: i(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(o.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(o.b)(e.associated_award)), t
			};
			const d = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== s.G ? null : e.body === s.H ? c.c.User : e.body === s.Rb ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.K.NO_STRIPE_SUBSCRIPTION:
							case s.K.USER_DOESNT_EXIST:
							case s.K.USER_REQUIRED_ERROR:
							case s.K.VALIDATION_ERROR:
								return e;
							case s.K.NO_USER:
							case s.K.NO_TEXT:
							case s.K.NO_URL:
								return s.K.VALIDATION_ERROR;
							case s.K.CREDIT_CARD_FAILURE:
							case s.K.CREDIT_CARD_FAILURE_GENERIC:
								return s.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.K.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "h", (function() {
				return u
			}));
			var s = r("./src/reddit/helpers/isPost.ts");
			const n = 50,
				o = 50,
				a = 1e4,
				i = 100;
			var c, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(s.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				u = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./node_modules/reselect/es/index.js");
			const a = Object(o.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: s.Bb
			}), e => ({
				bucketed: e === s.hd.ExpandedSearch || e === s.hd.CollapsedSearch,
				collapsed: e === s.hd.CollapsedSearch,
				expanded: e === s.hd.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.6430315fd07690acc6d7.js.map