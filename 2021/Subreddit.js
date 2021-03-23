// https://www.redditstatic.com/desktop2x/Subreddit.99a487659e99824f7109.js
// Retrieved at 3/23/2021, 4:20:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: o
					} = e;
				return r.a.createElement("svg", {
					className: Object(a.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: s,
						[c.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", c.a)
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
					return e.forEach(e => n.push(e)), n
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
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const a = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const a = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = n, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/isFakeSubreddit/index.ts"),
				o = n("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t) => {
					const n = [s.a.dfpSlotPrefix];
					return t !== r.Db.PROFILE && (Object(a.a)(e) ? n.push("frontpage") : n.push(`r.${e}`)), t === r.Db.INDEX ? n.push(r.Db.LISTING) : t && n.push(t), n.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const n in t.properties) e.setTargeting(n, t.properties[n])
				},
				l = (e, t) => {
					p(e);
					const {
						id: n,
						slot: s,
						sizes: r
					} = t, a = window.googletag = window.googletag || {};
					return a.cmd = a.cmd || [], new Promise(c => {
						a.cmd.push(() => {
							o.a.write(() => {
								const o = a.defineSlot(s, r, n);
								if (!o) return c();
								o.addService(a.pubads()), i.set(e, o), o.setCollapseEmptyDiv(!0), d(o, t), a.display(n), c()
							})
						})
					})
				},
				u = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], s.cmd.push(() => {
						Object.keys(t).forEach(e => n.setTargeting(e, t[e]))
					})
				},
				m = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					d(n, t);
					const s = window.googletag = window.googletag || {};
					s.cmd = s.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && s.cmd.push(() => {
							s.pubads().refresh([n])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						s.cmd.push(() => {
							window.apstag.setDisplayBids(), s.pubads().refresh([n])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						o.a.write(() => {
							n.destroySlots([t]), i.delete(e)
						})
					})
				},
				b = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const n = document.getElementsByTagName("script")[0];
						n && n.parentNode && n.parentNode.insertBefore(t, n)
					};
					if (document.head && (() => {
							const {
								relList: e
							} = document.createElement("link");
							if (!e || !e.supports) return !1;
							try {
								return e.supports("preload")
							} catch (t) {
								return !1
							}
						})()) {
						const n = document.createElement("link");
						n.href = e, n.rel = "preload", n.as = "script", n.onload = t, document.head.insertBefore(n, document.head.firstChild)
					} else t()
				},
				h = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], b("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = (...e) => {
						window.apstag._Q.push(["i", e])
					}, window.apstag.fetchBids = (...e) => {
						window.apstag._Q.push(["f", e])
					}, b("//c.amazon-adsystem.com/aax2/apstag.js"), window.apstag.init({
						pubID: "3379",
						adServer: "googletag",
						bidTimeout: 2e3,
						params: {
							aps_privacy: e.limitDataProcessing ? "1YY" : "1--"
						}
					})), window.aax || (window.aax = {
						pubId: "AAX763KC6",
						ver: 1.2,
						initTime: (new Date).getTime(),
						hst: location.hostname,
						deliverExchangeDemand: () => {},
						cmd: [() => window.aax.addEventListener("impressionViewable", t => e.onAdView(t, !0))],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, b(`//c.aaxads.com/aax.js?pub=${window.aax.pubId}&hst=${window.aax.hst}&ver=${window.aax.ver}`))
				}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(s.c)(t)
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "EMBEDS__UNLOADABLE",
				a = "EMBEDS__LOADABLE",
				o = Object(s.a)(r),
				i = Object(s.a)(a)
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "JSAPI__CONSUMER_SUBSCRIBED",
				a = Object(s.a)(r)
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return B
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "h", (function() {
				return U
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				h = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				f = Object(r.a)(b),
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				x = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				E = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				y = Object(r.a)(x),
				_ = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				v = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(r.a)(v),
				j = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				k = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				I = Object(r.a)(S),
				P = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				N = Object(r.a)(T),
				L = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(r.a)(w),
				B = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						o = Object(p.T)(a, {
							subredditId: e
						}).name;
					n(h());
					const i = await Object(c.k)(r(), o, t);
					if (i.ok) {
						n(f({
							subredditId: e,
							isEnabled: t
						}))
					} else n(g());
					return i.ok
				}, D = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						o = Object(p.T)(a, {
							subredditId: e
						}).name;
					n(E());
					const i = await Object(c.j)(r(), t, l.d.LinkFlair, o);
					if (i.ok) {
						n(y({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(_());
					return i.ok
				}, R = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const d = r(),
						m = Object(p.T)(d, {
							subredditId: t
						}).name;
					n(O());
					const b = await Object(c.f)(a(), e, m, l.d.LinkFlair);
					let h = b.ok && !(b.body && !1 === b.body.success);
					if (h) {
						const s = b.body;
						if (n(C({
								subredditId: t,
								template: s
							})), s.id) {
							const r = e.styleTemplate,
								a = d.structuredStyles.flairTemplate.models[s.id];
							r ? h = await n(Object(o.d)(t, s.id, r)) : a && (h = await n(Object(o.c)(t, s.id)))
						}
					}
					if (h) {
						const e = Object(i.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(j());
						const r = Object(i.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), R(e, t));
						n(Object(i.f)(r))
					}
					return h
				}, F = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const o = r(),
						d = Object(p.T)(o, {
							subredditId: t
						}).name;
					if (n(k()), (await Object(c.b)(a(), e, d)).ok) {
						n(I({
							subredditId: t,
							templateId: e
						}));
						const r = Object(i.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(i.f)(r))
					} else {
						n(P());
						const r = Object(i.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(i.f)(r))
					}
				}, M = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const o = r(),
						d = Object(m.d)(o, {
							subredditId: t
						}).templateIds,
						b = Object(p.T)(o, {
							subredditId: t
						}).name;
					if (n(N({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(a(), b, l.d.LinkFlair, e)).ok) {
						n(L());
						const e = Object(i.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(A({
							subredditId: t,
							templateIds: d
						}));
						const r = Object(i.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(i.f)(r))
					}
				}, U = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (s, r, {
					apiContext: o
				}) => {
					const i = e.flair.filter(e => !Object(d.p)(e.type));
					if (t && i.unshift(t), s(Object(a.L)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const s = Object(d.g)(t);
						Object(c.h)(o(), e.id, n, s)
					} else Object(c.h)(o(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "c", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forEach.js"),
				r = n.n(s),
				a = n("./node_modules/lodash/isEqual.js"),
				o = n.n(a),
				i = n("./node_modules/lodash/values.js"),
				c = n.n(i),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/helpers/trackers/blade.ts"),
				g = n("./src/reddit/models/Image/index.tsx"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/telemetry/index.ts");
			const y = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: s
			}) => async (r, a, o) => {
				const i = a(),
					c = Object(x.T)(i, {
						subredditId: e
					});
				if (!c) return !1;
				r(Object(l.k)(s));
				const d = await (async (e, t, n, s, r, a) => Object(p.a)(Object(b.a)(e, [h.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: m.cb.POST,
					data: {
						filepath: s,
						imagetype: r,
						mimetype: a
					}
				}))(o.apiContext(), c.name, t, s.file.name, n, await Object(u.g)(s.file));
				let f = !1;
				try {
					const e = await Object(l.g)(a(), d, s, g.a.FlairTemplates);
					e && r(Object(l.j)(e)), f = !0
				} catch (E) {
					if (E instanceof Error) throw E;
					r(Object(l.i)(E))
				}
				return f
			}, _ = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", v = Object(d.a)(_), O = (e, t, n) => async (s, a, i) => {
				const {
					apiContext: d
				} = i;
				let u = a();
				const {
					pendingImages: _,
					...O
				} = n;
				let C = O;
				const j = Object(x.T)(u, {
					subredditId: e
				});
				if (!j) return !1;
				const S = u.structuredStyles.flairTemplate.models[t];
				if (S && o()(S, C)) return !0;
				if (_) {
					const n = [];
					if (r()(_, (r, a) => {
							r && n.push(s(y({
								flairId: t,
								imageData: Object(g.m)(r),
								imageKey: a,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					C = ((e, t, n) => {
						const s = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && n.imageUploads[e.id];
							r && r.kind === g.b.TempUploaded && (s[t] = r.url)
						}), s
					})(C, _, a())
				}
				u = a();
				let k = null,
					I = null;
				const P = [];
				try {
					(k = await Object(l.f)(u, g.a.FlairTemplates)) && (I = Object(l.m)(k)(s, a, i), P.push(...c()(k.imagesByKey)))
				} catch (L) {
					return !1
				}
				const T = await (async (e, t, n, s) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.PUT,
						data: s
					}))(d(), j.name, t, C),
					w = S ? "edit_post_flair_template" : "save_post_flair_template",
					N = Object(f.e)(u, w);
				if (T.ok) {
					let e;
					if (I) try {
						await I, e = ((e, t, n) => {
							const s = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === g.b.Uploaded && (e.url === s.postBackgroundImage ? s.postBackgroundImage = t.url : e.url === s.postPlaceholderImage && (s.postPlaceholderImage = t.url))
							}), s
						})(C, P, a())
					} catch (L) {
						e = null
					} else e = C;
					s(v({
						flairId: t,
						template: e || C
					}))
				} else k && k.websocket.close();
				return Object(E.a)({
					...N,
					actionInfo: {
						...N.actionInfo,
						success: T.ok
					}
				}), T.ok
			}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", j = Object(d.a)(C), S = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				const a = s(),
					o = Object(x.T)(a, {
						subredditId: e
					});
				if (!o) return !1;
				const i = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.DELETE
					}))(r(), o.name, t),
					c = Object(f.e)(a, "delete_flair_template");
				return i.ok && n(j({
					flairId: t
				})), Object(E.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const a = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				i = Object(s.a)(a),
				c = Object(s.a)(o),
				d = (e, t) => async (n, s) => {
					const a = s();
					e in a.listings.postOrder.fetchedTokens ? e in a.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : r.j(a, e) : n(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(o.u),
				f = Object(r.a)(o.v),
				g = Object(r.a)(o.t),
				x = (e, t, n) => async (s, r, a) => {
					const o = Object(p.A)(r(), {
						subredditName: e
					});
					if (o) return y(o, t, n)(s, r, a)
				}, E = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, n) => async (r, o, p) => {
					const x = await Object(l.e)(t);
					r(h());
					const y = o();
					try {
						await Object(a.g)("communityIcon", x, e.id)(r, o, p)
					} catch (v) {
						return Object(b.a)(Object(d.c)(y, "something went wrong with the uploading the image")), r(Object(i.f)({
							kind: u.b.Error,
							text: E()
						})), void r(g())
					}
					const _ = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!_) return Object(b.a)(Object(d.c)(y, "image is null")), r(Object(i.f)({
						kind: u.b.Error,
						text: E()
					})), void r(g());
					await Object(a.k)(e.id, {
						communityIcon: _
					}, c.b.idCard, n)(r, o, p), r(Object(i.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(f())
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				a = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return H
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = n("./src/graphql/operations/SubscribedSubreddits.json"),
				f = n("./src/lib/makeGqlRequest/index.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var x = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = n("./src/reddit/models/GqlTopLevelField.ts"),
				_ = n("./src/reddit/models/User/index.ts");

			function v(e) {
				const t = [],
					n = [],
					s = {},
					r = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== _.c.AvailableRedditor) continue;
					const e = Object(x.a)(i.node.profile);
					s[e.id] = e;
					const {
						isFavorite: n
					} = i.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== y.a.Subreddit) continue;
					const e = Object(E.a)(i.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: s,
					subreddits: r
				}
			}
			var O = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/reddit/selectors/subscriptions.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const I = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				P = Object(a.a)(d.c),
				T = Object(a.a)(d.b),
				w = Object(a.a)(d.a),
				N = Object(a.a)(d.h),
				L = (Object(a.a)(d.i), Object(a.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(T());
					const r = await (e => Object(f.a)(e, h))(n());
					if (r.ok) {
						const t = v(r.body.data);
						e(P(t))
					} else e(w({
						error: r.error
					}))
				}),
				A = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				B = (e, t, n) => async (a, d, {
					apiContext: h
				}) => {
					let f = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(j.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(C.m)(d(), e.name),
						name: `${r.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(k.J)(d())) return a(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void a(Object(i.j)());
					const x = Object(k.i)(d());
					if (x) {
						const t = f.length,
							n = e.length;
						if (f = f.filter(e => !A(x, e)), (e = e.filter(e => !A(x, e))).length !== n || f.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(l.f)(Object(l.e)(e, O.b.Error)))
						}
						if (!e.length && !f.length) return
					}
					if (a(N({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(S.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: s
						}) => Object(m.a)(Object(p.a)(e, [b.a]), {
							method: r.cb.POST,
							endpoint: Object(g.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(h(), {
							subredditNames: f.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : `${s.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						a(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "followed" : "unfollowed"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "joined" : "left"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						a(N({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(S.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const r = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(l.f)(Object(l.e)(r, O.b.Error)))
					}
				}, D = Object(a.a)(d.f), R = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n(),
						o = Object(j.L)(a, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = a.subscriptions.favoriteSubredditOrder || [],
						d = a.subscriptions.favoriteProfileOrder || [],
						h = c.indexOf(e.id),
						f = d.indexOf(e.id),
						g = -1 === h && -1 === f,
						x = a.subreddits.models,
						E = a.profiles.models;
					t(D({
						makeFavorite: g,
						identifier: e,
						subredditModels: x,
						profileModels: E
					}));
					const y = {
							type: e.type,
							name: o.name
						},
						_ = () => Object(j.gb)(n(), {
							identifier: y
						});
					(_() || (await t(B([y], !0)), _())) && ((await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(s(), i, g)).ok || (t(D({
						makeFavorite: !g,
						identifier: e,
						subredditModels: x,
						profileModels: E
					})), t(Object(l.f)({
						text: I(),
						kind: O.b.Error
					}))))
				}, F = Object(a.a)(d.d), M = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n().multireddits.models,
						o = () => {
							t(Object(l.f)({
								text: I(),
								kind: O.b.Error
							}))
						},
						i = a[e];
					if (!i) return void o();
					const c = !i.isFavorited;
					t(F({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(F({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), o())
				}, U = Object(a.a)(d.e), H = e => async (t, n, {
					apiContext: a
				}) => {
					const o = n(),
						i = o.multireddits.models;
					if (!Object(k.J)(o)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: O.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(U({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(a(), e, u)).ok || (t(U({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c(u))
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				a = n("./node_modules/react-router-redux/es/index.js");
			const o = (e, t = !0) => async (n, o, {
				routes: i
			}) => {
				const c = o();
				Object(s.a)(e, i, c) ? n(Object(a.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "Euf0eewj0MUfCAneI6fj_",
				title: "_3ugv2ujLUVD37KHjuncuRT",
				close: "_3JAHw6m54Wrjm0rnX7GgRZ",
				dismissedContainer: "_1HciFW1Gf3BHBs0dEvE_tk",
				dismissedText: "_1cXKsx4apv5X14RmNQ0794",
				iconCarouselWrapper: "_2BnXKMLxfFWoe-pZcfIiIm",
				awardIcon: "_34m3e-Z2OR_TEdYH0Ih7O6",
				linearAnimation: "_4HAlQmVogiasYQ9srm4z4",
				iconCarouselInnerWrapper0: "_2fP0vb7wP0Afwdaw6cwZpG",
				slide0: "_3GqXepZa1qvL1X0wE8N0e2",
				iconCarouselInnerWrapper1: "_2O70Ew5pvoBSnOqL4T5EGx",
				slide1: "Fo2rMgLePrq248kivE__Q",
				scale: "_1IMFuS4ukJn7lP178Rtiqd",
				fadeInALittle: "_2KMwT7J3kyGA-____-iftE",
				fadeInTheRest: "_2BxmXNxZx082mr62D3k1LQ"
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/banners.ts"),
				i = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./node_modules/lodash/sampleSize.js"),
				b = n.n(p),
				h = n("./src/reddit/models/Gold/Award.ts"),
				f = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				g = n.n(f);
			const x = 11,
				E = 1e3,
				y = 500,
				_ = [g.a.iconCarouselInnerWrapper0, g.a.iconCarouselInnerWrapper1];

			function v({
				asset: e
			}) {
				return r.a.createElement("div", {
					className: g.a.awardIcon,
					style: {
						backgroundImage: `url('${e}')`
					}
				})
			}
			const O = Object(m.c)({
				awards: e => e.awards.models
			});
			class C extends s.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: _[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), E + y)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === _[0] ? _[1] : _[0]
						}
					})
				}
				shouldComponentUpdate(e, t) {
					return this.state.animationClass !== t.animationClass
				}
				static getDerivedStateFromProps(e, t) {
					if (t.icons.length) return null;
					const n = Object.values(e.awards).filter(e => {
						return e.awardType === h.f.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, x).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return r.a.createElement(v, {
								asset: n,
								key: e.id
							})
						})
					} : null
				}
				render() {
					const {
						animationClass: e,
						icons: t
					} = this.state;
					return r.a.createElement("div", {
						className: g.a.iconCarouselWrapper
					}, r.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var j = Object(u.b)(O)(C);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(k || (k = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.f)(o.a.AWARDED_LISTING_BANNER, i.f), [u, m] = Object(s.useState)(n ? k.Hidden : k.Visible);
				if (u === k.Hidden) return null;
				const p = () => {
					m(k.Visible), Object(c.W)(o.a.AWARDED_LISTING_BANNER, !1, i.f)
				};
				return u === k.Dismissed ? r.a.createElement("div", {
					className: Object(a.a)(g.a.dismissedContainer, t)
				}, r.a.createElement("div", {
					className: g.a.dismissedText
				}, S._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), r.a.createElement(d.i, {
					onClick: p
				}, S._("undo", null, {
					hk: "1A9z3Y"
				}))) : r.a.createElement("div", {
					className: Object(a.a)(g.a.container, t)
				}, r.a.createElement("h2", {
					className: g.a.title
				}, S._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), r.a.createElement(j, null), r.a.createElement(l.a, {
					className: g.a.close,
					onClick: () => {
						m(k.Dismissed), Object(c.W)(o.a.AWARDED_LISTING_BANNER, !0, i.f)
					}
				}))
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/connectors/PostViewable/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(o.a)(null),
				l = ({
					className: e,
					post: t
				}) => t.isSponsored ? r.a.createElement(a.a, {
					post: t,
					trackDisplay: !0
				}, r.a.createElement("div", {
					className: Object(i.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(c.b)(d(l))
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/subredditWelcomeMessage.ts"),
				u = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				p = n("./src/reddit/components/SubredditNav/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				f = n("./src/reddit/constants/posts.ts"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				E = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/selectors/telemetry.ts");
			var _ = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				v = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var C = e => r.a.createElement("svg", O({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, e), r.a.createElement("path", {
					d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
				})),
				j = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/widgets.ts"),
				I = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				P = n.n(I);
			const T = d.a.wrapped(v.a, "Planet", P.a),
				w = d.a.img("SubredditIcon", P.a),
				N = Object(o.c)({
					spPollsEnabled: g.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(j.a)(e, {
						subredditId: t
					}),
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const n = t;
						return Object(S.gb)(e, {
							identifier: {
								name: n,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(k.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(a.b)(N, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(l.d)(s))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal()
			}))(Object(c.a)(e => {
				const t = Object(_.a)(),
					n = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					o = e.subreddit ? e.subreddit.title : "",
					c = e.subreddit && Object(x.a)(e),
					d = !(!e.theme || !c),
					l = s.charAt(0).toUpperCase() + s.slice(1),
					g = !!e.subreddit && e.subredditInlineEditingEnabled,
					v = Object(i.a)(P.a.SubredditIcon, P.a.editableIcon, {
						[P.a.emptyEditableIcon]: !c
					}),
					O = r.a.createElement(m.a, {
						className: v,
						subreddit: e.subreddit,
						iconUrl: c || void 0,
						inTopBar: !0
					}),
					j = d ? r.a.createElement(w, {
						src: c || void 0
					}) : t ? r.a.createElement(C, {
						className: P.a.DefaultIcon
					}) : r.a.createElement(T, null),
					S = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					k = e.layout ? e.layout === h.g.Large ? "984px" : "100%" : "1086px";
				return r.a.createElement("div", {
					className: P.a.container,
					style: {
						maxWidth: k
					}
				}, r.a.createElement("div", {
					className: P.a.subredditMetaContainer
				}, g ? O : j, r.a.createElement("div", {
					className: Object(i.a)(P.a.textContainer, {
						[P.a.textContainerNoIcon]: !d
					})
				}, r.a.createElement("div", {
					className: P.a.text
				}, r.a.createElement("h1", {
					className: P.a.title
				}, o || l), !!o && r.a.createElement("h2", {
					className: P.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: P.a.subscribeButtonContainer
				}, r.a.createElement(b.a, {
					className: P.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...y.defaults(t),
							source: "id_banner",
							action: E.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: f.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0
				})), e.subreddit && r.a.createElement(u.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), S && r.a.createElement(p.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: n,
					subredditNavContainerClassName: P.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = d.a.div("FooterContainer", f.a), E = d.a.div("UserAgreement", f.a), y = d.a.a("UserAgreementLink", f.a), _ = d.a.a("PrivacyLink", f.a);
			var v = () => a.a.createElement(x, null, a.a.createElement(E, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", a.a.createElement(y, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", a.a.createElement(_, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				O = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				C = n("./src/reddit/components/RichTextJson/index.tsx"),
				j = n("./node_modules/lodash/flatMap.js"),
				S = n.n(j),
				k = n("./src/lib/linkMatchers/index.ts"),
				I = n("./src/lib/linkMatchers/customLinks.ts"),
				P = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				w = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, a] = t.slice(s, s + 3);
						n.push(e), n.push([a, r])
					}
					return n
				};
			var N = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = S()(t, w)), e.parseRegularLinks && (t = S()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.f.add(I.g.subreddit.prefix, I.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return a.a.createElement(P.b, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				L = n("./src/reddit/contexts/PageLayer/index.tsx"),
				A = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/chat/controls/Svg/index.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => a.a.createElement(B.a, D({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				F = n("./src/reddit/models/ContentGate.ts"),
				M = n("./src/lib/constants/index.ts"),
				U = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var W = n("./src/reddit/selectors/experiments/requestToJoinPrivateCommunities.ts"),
				V = n("./src/reddit/selectors/meta.ts"),
				q = n("./src/reddit/components/ContentGate/index.m.less"),
				K = n.n(q);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = d.a.wrapped(R, "PrivateKey", K.a), J = d.a.div("ButtonsContainer", K.a), Y = d.a.div("Container", K.a), Z = d.a.div("Description", K.a), Q = d.a.div("PrivateSubredditDetails", K.a), X = d.a.div("PrivateSubredditDescription", K.a), $ = d.a.h3("PrivateSubredditName", K.a), ee = d.a.a("Link", K.a), te = d.a.wrapped(A.k, "LinkRouterButton", K.a), ne = d.a.wrapped(A.j, "LinkButton", K.a), se = d.a.wrapped(A.n, "SecondaryLinkRouterButton", K.a), re = d.a.wrapped(A.m, "SecondaryLinkButton", K.a), ae = d.a.wrapped(te, "GoHomeLinkButton", K.a), oe = d.a.img("Image", K.a), ie = d.a.img("ImagePlaceholder", K.a), ce = d.a.wrapped(te, "LeftLinkRouterButton", K.a), de = d.a.wrapped(ne, "LeftLinkButton", K.a), le = d.a.wrapped(re, "SecondaryLeftLinkButton", K.a), ue = d.a.wrapped(se, "SecondaryLeftLinkRouterButton", K.a), me = d.a.h3("Title", K.a), pe = d.a.div("PageBody", K.a), be = d.a.div("QuarantineMessageWrapper", K.a), he = Object(c.c)({
				isLoggedIn: H.I,
				isRequestToJoinPrivateCommunitiesEnabled: W.a,
				origin: V.i,
				user: H.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.J)(e)) return !1;
					const t = Object(U.d)(e);
					if (!t) return !1;
					const n = Object(H.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * M.x;
					return s > Date.now() - r
				})(e)
			}), fe = Object(L.t)(), ge = Object(o.b)(he, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), xe = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: o,
					isRequestToJoinPrivateCommunitiesEnabled: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					location: m,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: g,
					quarantineMessage: x,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: y,
					setNSFWPreference: _,
					subredditDescription: v,
					subredditName: j,
					user: S
				} = e, k = async () => {
					o ? await _() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case F.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(me, null, G._("r/{community name} is a Reddit Premium community", [G._param("community name", j)], {
							hk: "2lyDwB"
						})), a.a.createElement(Z, null, G._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(J, null, S ? a.a.createElement(le, {
							href: `${s.a.redditUrl}/premium`
						}, G._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(de, {
							href: Object(l.a)(m, h)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), S ? a.a.createElement(te, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(re, {
							href: Object(l.a)(m, h)
						}, G._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case F.a.Nsfw:
					case F.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(me, null, n === F.a.Nsfw ? G._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : G._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(Z, null, G._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(J, null, a.a.createElement(ce, {
							to: "/"
						}, G._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(re, {
							onClick: k
						}, G._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case F.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(z, null), a.a.createElement(me, null, "r/", j, " ", G._("is a private community", null, {
							hk: "7zZmq"
						})), v && v.length && a.a.createElement(Q, null, a.a.createElement($, null, "r/", j), a.a.createElement(X, null, a.a.createElement("div", null, v))), a.a.createElement(Z, null, G._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", j, " ", G._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), G._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(J, null, S ? a.a.createElement(a.a.Fragment, null, !c && i && a.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: K.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), a.a.createElement(le, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${j}`
						}, G._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(le, {
							href: Object(l.a)(m, h)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(te, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case F.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(me, null, G._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(Z, null, G._("This community is {=quarantined}", [G._param("=quarantined", a.a.createElement(ee, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, G._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(be, null, y ? a.a.createElement(C.a, {
							content: y,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? a.a.createElement(O.a, {
							html: E
						}) : x || G._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), G._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(J, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(J, null, a.a.createElement(ue, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ne, {
								href: `${s.a.redditUrl}/prefs/update`
							}, G._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(J, null, a.a.createElement(ce, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(re, {
								onClick: t
							}, G._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(S, r, g)));
					case F.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(me, null, G._("r/{community name} has been banned from Reddit", [G._param("community name", j)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(Z, null, e ? a.a.createElement(N, {
							linkClassName: K.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : G._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(J, null, a.a.createElement(te, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(me, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(J, null, a.a.createElement(te, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ie, null), a.a.createElement(me, null, G._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(Z, null, G._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(J, null, S && a.a.createElement(b.a, {
							eventSource: "content_gate"
						}), a.a.createElement(ae, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.ProfileDoesNotExist:
					case F.a.ProfileDeleted:
					case F.a.ProfileSuspended:
					case F.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(me, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case F.a.ProfileBlockedForLegalReason:
									return G._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case F.a.ProfileDeleted:
									return G._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case F.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, G._("This account has been {=suspended} .", [G._param("=suspended", a.a.createElement(ee, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, G._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case F.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(me, null, G._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(Z, null, G._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(J, null, a.a.createElement(ae, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(me, null, G._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(J, null, a.a.createElement(ae, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(oe, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(me, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(J, null, a.a.createElement(te, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = fe(ge(Object(i.i)(e => a.a.createElement(Y, null, a.a.createElement("div", null, a.a.createElement(pe, null, xe(e))), a.a.createElement(v, null)))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				E = g.a.wrapped(d.c, "StyledTooltip", f.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.gb)(e),
					userIsSuspended: b.O
				});
			t.a = Object(o.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: x
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: o,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d
			}) => a.a.createElement(u.l, {
				className: e,
				disabled: d || c,
				onClick: () => o(i),
				onMouseEnter: n,
				onMouseLeave: r,
				id: x,
				isFullWidth: !0
			}, s.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), c ? a.a.createElement(E, {
				caretOnTop: !0,
				tooltipId: x,
				text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : d ? a.a.createElement(E, {
				caretOnTop: !0,
				tooltipId: x,
				text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				buttonFontXS: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontXs: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontS: "_1l-KcydphK1LZ0DY8WNS7-",
				buttonFontM: "_2-Ytw7EJuJ76FU11odY0vH",
				buttonFontL: "_1fMOhvVkzFghuFsd8kzAEz",
				buttonFontXL: "_25jU9LTEsPZrTgo4UTgEvr",
				buttonFontXl: "_25jU9LTEsPZrTgo4UTgEvr",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/banners.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				p = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				g = n.n(f);
			const x = Object(o.b)(null, e => ({
				showToast: () => {
					e(Object(i.f)({
						kind: h.b.SuccessCommunity,
						text: s.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class E extends a.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.W)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(m.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(m.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = !Object(u.f)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(m.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? a.a.createElement("div", {
						className: g.a.banner
					}, a.a.createElement("button", {
						className: g.a.closeContainer,
						onClick: this.closeBanner
					}, a.a.createElement(b.a, {
						className: g.a.close
					})), a.a.createElement(p.a, {
						className: g.a.postIcon
					}), a.a.createElement("div", {
						className: g.a.heading
					}, s.fbt._("Create the ideal {subredditDisplayText} post", [s.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), a.a.createElement("div", {
						className: g.a.text
					}, s.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), a.a.createElement("br", null), s.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), a.a.createElement("div", {
						className: g.a.buttonWrapper
					}, a.a.createElement(l.j, {
						className: g.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, s.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = x(Object(c.c)(E))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = n.n(o);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(a.a)(i.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(a.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_1FQRn1pPshYj4hu7mq9APN",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/downToChat.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = n("./src/reddit/selectors/downToChat.ts"),
				m = n("./src/reddit/selectors/experiments/downToChat.ts"),
				p = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(o.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), g = Object(a.b)(f, e => ({
				startChatting: t => e(Object(i.i)(t))
			}));
			t.a = g(Object(c.c)(e => {
				const {
					headerButton: t,
					isEnabled: n,
					isDownToChatExperimentEnabled: s
				} = e;
				if (!n || !s) return null;
				const a = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return r.a.createElement(d.q, {
					className: b.a.button,
					text: a,
					Icon: t ? l.a : void 0,
					onClick: () => {
						const {
							startChatting: t,
							subreddit: n
						} = e;
						t(n.id)
					},
					redditStyle: !0
				})
			}))
		},
		"./src/reddit/components/DownToChatBanner/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundAnimationStyles: "nu9ZkGwD7hyrRLI6Isf0L",
				Container: "_3HwENDlXUGoAOP6zptLsmD",
				container: "_3HwENDlXUGoAOP6zptLsmD",
				backgroundAnimation: "E0C3InHZ3RJwQ52gcvYvk",
				Footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				Title: "_1XKqWvpbNVuWQvCDOzDnY9",
				title: "_1XKqWvpbNVuWQvCDOzDnY9",
				Description: "_2jyh4u7PkcB4yzPbeF0o5D",
				description: "_2jyh4u7PkcB4yzPbeF0o5D",
				AvatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				avatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				Avatar: "_368cN6FwbMRDo7PzTz7IsF",
				avatar: "_368cN6FwbMRDo7PzTz7IsF",
				editableIcon: "_191Gjm6x9puYH4dNQ6ISjj",
				emptyEditableIcon: "iM8M6DgU7p5Ok8n_Ks0gt",
				CloseButton: "_32Qext59XJHMV7WLlayaa",
				closeButton: "_32Qext59XJHMV7WLlayaa",
				Close: "_1KqEjgaeL1FeIc48mzjBo4",
				close: "_1KqEjgaeL1FeIc48mzjBo4",
				Counter: "_1I9s8rY01sj6dSMpZ120Pu",
				counter: "_1I9s8rY01sj6dSMpZ120Pu"
			}
		},
		"./src/reddit/components/DownToChatBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/actions/downToChat.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				m = n("./src/reddit/icons/svgs/DownToChatAvatar/index.tsx"),
				p = n("./src/reddit/selectors/downToChat.ts"),
				b = n("./src/reddit/selectors/experiments/downToChat.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				g = n("./src/reddit/components/DownToChatBanner/index.m.less"),
				x = n.n(g);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = i.a.wrapped(m.a, "Avatar", x.a), _ = i.a.div("AvatarContainer", x.a), v = i.a.wrapped(u.a, "Close", x.a), O = i.a.button("CloseButton", x.a), C = i.a.div("Counter", x.a), j = i.a.p("Description", x.a), S = i.a.div("Footer", x.a), k = i.a.h1("Title", x.a), I = i.a.div("Container", x.a), P = Object(o.c)({
				accountsActive: (e, t) => {
					const {
						subreddit: n
					} = t;
					if (n && n.name) {
						const t = Object(h.x)(e, {
							subredditName: n.name
						});
						return t && t.accountsActive
					}
				},
				isDownToChatExperimentEnabled: b.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(p.b)(e, t.id)
			}), T = Object(a.b)(P, e => ({
				dismissBanner: t => e(Object(d.h)(t)),
				fetchDownToChatAvailability: t => e(Object(d.j)(t))
			}));
			class w extends r.a.Component {
				constructor(e) {
					super(e), this.onCloseButtonClick = () => {
						const {
							subreddit: e,
							dismissBanner: t
						} = this.props, {
							isDismissed: n
						} = this.state;
						n || (this.setState({
							isDismissed: !0
						}), t(e.id))
					}, this.state = {
						isDismissed: !1
					}
				}
				render() {
					const {
						accountsActive: e,
						isDownToChatExperimentEnabled: t,
						subreddit: n,
						isEnabled: s
					} = this.props, {
						isDismissed: a
					} = this.state;
					return t && s && !a ? r.a.createElement(I, null, r.a.createElement(_, null, r.a.createElement(y, null)), r.a.createElement(k, null, E._("Find people who want to chat", null, {
						hk: "3Y6Pm1"
					})), r.a.createElement(j, null, E._("Bored at home? Want someone to talk to? Reddit will match you with members who want to chat too.", null, {
						hk: "3HaCWZ"
					})), r.a.createElement(S, null, r.a.createElement(f.a, {
						subreddit: n
					}), e ? r.a.createElement(C, null, E._("{viewingCount} Online", [E._param("viewingCount", Object(c.b)(e))], {
						hk: "LsWtb"
					})) : null), r.a.createElement(O, {
						onClick: this.onCloseButtonClick
					}, r.a.createElement(v, null))) : null
				}
			}
			t.a = T(Object(l.c)(w))
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PowerupsLevel2PerksBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PowerupsLevel2PerksBanner").then(n.bind(null, "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CreatingTournamentBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CreatingTournamentBanner").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less": function(e, t, n) {
			e.exports = {
				primaryText: "_1bwD7kygv4bVZM8fDgSQv8",
				mainContentWrapper: "_3-p7jwY9LowTxunslKskSz",
				mainContent: "_2ckdQlwH_QZ38t7uWKUMLo",
				backgroundPlaceholder: "s5jLEXcFLaQaE2Ck0qPJV",
				component: "_2fO9Pa6g6JYBjRFkKsbzHI"
			}
		},
		"./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					fill: "none",
					height: "20",
					viewBox: "0 0 20 20",
					width: "20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
					fill: "#ffc2dd"
				}), r.a.createElement("path", {
					d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
					fill: "#ffc2dd"
				}), r.a.createElement("path", {
					d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
					fill: "#7e53c1"
				}), r.a.createElement("path", {
					d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
					fill: "#ff85c6"
				}), r.a.createElement("g", {
					fill: "#000"
				}, r.a.createElement("path", {
					d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
				}), r.a.createElement("path", {
					d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
				}), r.a.createElement("path", {
					d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
				}), r.a.createElement("path", {
					d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
				}), r.a.createElement("path", {
					d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
				}), r.a.createElement("path", {
					d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
				}), r.a.createElement("path", {
					d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
				}), r.a.createElement("path", {
					d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
				}), r.a.createElement("path", {
					d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
				}), r.a.createElement("path", {
					d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
				}), r.a.createElement("path", {
					d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
				}), r.a.createElement("path", {
					d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
				}), r.a.createElement("path", {
					d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
				}), r.a.createElement("path", {
					d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
				})), r.a.createElement("path", {
					d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
					fill: "#fcff78"
				}), r.a.createElement("path", {
					d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
					fill: "#34e2ac"
				}), r.a.createElement("path", {
					d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
					fill: "#4ab6ff"
				}), r.a.createElement("path", {
					d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
					fill: "#ffc2dd"
				}), r.a.createElement("path", {
					d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
					fill: "#b8e7ff"
				}), r.a.createElement("path", {
					d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
					fill: "#ff85c6"
				}), r.a.createElement("path", {
					d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
					fill: "#ffc2dd"
				}), r.a.createElement("path", {
					d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
					fill: "#7e53c1",
					opacity: ".67"
				}), r.a.createElement("path", {
					d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
					fill: "#ffc2dd"
				}), r.a.createElement("path", {
					d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
					fill: "#c676ff"
				}), r.a.createElement("path", {
					d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
					fill: "#c676ff"
				}), r.a.createElement("path", {
					d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
					fill: "#c676ff"
				}), r.a.createElement("path", {
					d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
					fill: "#c676ff"
				}), r.a.createElement("path", {
					d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
					fill: "#fff"
				}))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, n) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				i = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function l({
				className: e,
				currentRank: t,
				topPredictorsRank: n,
				tournamentId: s
			}) {
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.predictionLeaderboardList, e)
				}, (null == n ? void 0 : n.length) ? n.map(({
					rank: e,
					redditor: n,
					score: a
				}) => n ? r.a.createElement("div", {
					key: `prediction-leaderboard-${n.id}`,
					className: c.a.topPredictor
				}, r.a.createElement(o.a, {
					isCurrentUser: (null == t ? void 0 : t.redditor.name) === n.name,
					rank: e,
					redditor: n,
					score: a,
					tournamentId: s
				})) : null) : d._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				tournamentName: "_3KMEVZQ1fKy47r4xUKQaCg",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv",
				isTournament: "S2wYSCw_j9gZfcPOmSnLk"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/helpers/trackers/predictions.ts"),
				m = n("./src/reddit/hooks/usePageLayer.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				x = n.n(g);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.a)((function({
				onClose: e,
				currentRank: t,
				subredditId: n,
				topPredictorsRank: i,
				tournamentId: g
			}) {
				const y = Object(p.a)(),
					_ = Object(m.a)(),
					v = Object(c.w)(_),
					O = Object(a.e)(e => Object(b.e)(e, {
						subredditId: n
					}));
				Object(s.useEffect)(() => {
					y(Object(u.h)(v))
				}, []);
				const C = t && t.rank > 0;
				return r.a.createElement("div", {
					className: Object(o.a)(x.a.container, {
						[x.a.isTournament]: !!g
					})
				}, r.a.createElement("div", {
					className: x.a.header
				}, r.a.createElement(d.q, {
					className: x.a.closeButton,
					Icon: l.a,
					priority: d.b.Plain,
					onClick: e
				}), r.a.createElement("h1", null, g ? E._("Tournament leaderboard", null, {
					hk: "3GP3FC"
				}) : E._("Top Predictors", null, {
					hk: "4BEbch"
				})), (null == O ? void 0 : O.name) && r.a.createElement("h2", {
					className: x.a.tournamentName
				}, null == O ? void 0 : O.name)), r.a.createElement("div", {
					className: x.a.listContainer
				}, r.a.createElement(h.a, {
					currentRank: t,
					topPredictorsRank: i,
					tournamentId: g
				}), C && r.a.createElement("div", {
					className: x.a.spacer
				}, " ")), t && C && r.a.createElement(f.a, {
					className: x.a.currentRank,
					isCurrentUser: !0,
					rank: t.rank,
					redditor: t.redditor,
					score: t.score,
					tournamentId: g
				}))
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less": function(e, t, n) {
			e.exports = {
				placeBadge: "_3j-KsBmkOxaO1_k3p8PS4q"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "ainvGgXQrIMFpP9X4Mrc_",
				userLink: "_34lqpm8WEQ2vCBLoneB-q5",
				userName: "Lm2HlDnjd61FFIUJMsqY1",
				yourProfile: "_3NXCPZBcTL9t1VpyqYkpAi",
				rank: "_35mmwlcmeMehfyJXIsaV6P",
				userIcon: "_12PvAVnV9Mni44vSgjcixP",
				avatar: "KajS3NI16AuxmHTMwUM9Y",
				score: "_3ebMVpO-ahVFbOZDTJpx9U",
				coinIcon: "_1aYPVtVpXwl960I3DbyeEc",
				tokenIcon: "_2kFr3_jRVVXfM5R1z3TgJI"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				i = n("./src/reddit/components/UserIcon/index.tsx"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictions.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/config.ts"),
				b = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less"),
				h = n.n(b);
			const f = `${p.a.assetPath}/img/econ/predictions/leaderboard`,
				g = `${f}/first@2x.png`,
				x = `${f}/second@2x.png`,
				E = `${f}/third@2x.png`,
				y = {
					1: {
						alt: m.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: g,
						srcSet: `\n  ${f}/first.png,\n  ${g} 2x,\n  ${f}/first@3x.png 3x,\n`
					},
					2: {
						alt: m.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: x,
						srcSet: `\n  ${f}/second.png,\n  ${x} 2x,\n  ${f}/second@3x.png 3x,\n`
					},
					3: {
						alt: m.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: E,
						srcSet: `\n  ${f}/third.png,\n  ${E} 2x,\n  ${f}/third@3x.png 3x,\n`
					}
				};

			function _({
				place: e
			}) {
				const t = e && y[e];
				return t ? r.a.createElement("img", {
					alt: t.alt,
					className: h.a.placeBadge,
					src: t.src,
					srcSet: t.srcSet
				}) : null
			}
			var v = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				O = n.n(v);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function j({
				className: e,
				isCurrentUser: t,
				rank: n,
				redditor: s,
				score: m,
				tournamentId: p
			}) {
				const b = Object(u.a)();
				if (!s) return null;
				const {
					icon: h,
					name: f,
					profile: g
				} = s;
				return r.a.createElement("div", {
					className: Object(a.a)(O.a.predictor, e)
				}, r.a.createElement("div", {
					className: O.a.rank
				}, n), r.a.createElement(c.a, {
					className: O.a.userLink,
					onClick: () => b(Object(l.b)({
						targetUserId: s.id
					})),
					to: `/user/${f}`
				}, r.a.createElement(_, {
					place: n
				}), r.a.createElement(i.a, {
					className: Object(a.a)(O.a.userIcon, O.a.avatar),
					iconUrl: null == h ? void 0 : h.url,
					isNSFW: !!(null == g ? void 0 : g.isNsfw),
					userName: null != f ? f : ""
				}), r.a.createElement("div", null, r.a.createElement("div", {
					className: O.a.userName
				}, f), t && r.a.createElement("div", {
					className: O.a.yourProfile
				}, C._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), r.a.createElement("div", {
					className: O.a.score
				}, p ? r.a.createElement(o.a, {
					className: O.a.tokenIcon
				}) : r.a.createElement(d.a, {
					className: O.a.coinIcon
				}), m))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe",
				modal: "PxqE9oFD_60_KiA_nA9CV"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionLeaderboardSidebar", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/economics/predictions/index.ts"),
				l = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				b = n("./src/lib/initializeClient/installReducer.ts"),
				h = n("./src/reddit/reducers/features/predictions/index.ts");
			Object(b.a)({
				features: {
					predictions: h.a
				}
			});
			var f = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				x = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				E = n.n(x);
			const y = 4,
				_ = 25,
				v = Object(i.c)({
					leaderboard: (e, t) => {
						var n, s;
						return (null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.predictions) || void 0 === s ? void 0 : s.leaderboards[t.subredditId]) || null
					}
				}),
				O = {
					fetchSubredditTopPredictors: d.f
				},
				C = Object(o.b)(v, O);

			function j({
				className: e,
				fetchSubredditTopPredictors: t,
				leaderboard: n,
				subredditId: o,
				tournamentId: i
			}) {
				var d;
				const [b, h] = Object(r.useState)(!1), [x, v] = Object(r.useState)(!1);
				Object(r.useEffect)(() => {
					(async () => {
						if (!n) try {
							await t(o, p.a.AllTime, _, i)
						} catch (e) {
							v(!0)
						}
					})()
				}, [o]);
				const O = () => {
					h(!1)
				};
				if (!(null === (d = null == n ? void 0 : n.topPredictorsRank) || void 0 === d ? void 0 : d.length) || x) return null;
				const {
					currentRank: C,
					topPredictorsRank: j
				} = n;
				return a.a.createElement(l.a, null, a.a.createElement(u.a, {
					className: Object(c.a)(E.a.themedWidget, e),
					title: i ? s.fbt._("Tournament leaderboard", null, {
						hk: "1WFLrI"
					}) : s.fbt._("Top Predictors", null, {
						hk: "3HCYxQ"
					})
				}, a.a.createElement(f.a, {
					currentRank: C,
					topPredictorsRank: j.slice(0, y),
					tournamentId: i
				}), a.a.createElement("div", {
					className: E.a.openModalButtonContainer
				}, a.a.createElement(m.i, {
					className: E.a.openModalButton,
					isFullWidth: !0,
					onClick: () => {
						h(!0)
					}
				}, s.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), b && a.a.createElement(g.a, {
					className: E.a.modal,
					currentRank: C,
					onOverlayClick: O,
					onClose: O,
					subredditId: o,
					topPredictorsRank: n.topPredictorsRank,
					tournamentId: i,
					withOverlay: !0
				})))
			}
			t.default = C(j)
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
			}
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				b = n.n(p);

			function h({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var s;
				const p = Object(a.e)(m.V),
					h = Object(a.e)(m.i),
					f = Object(a.e)(m.B),
					g = Object(a.e)(e => Object(u.b)(e, {
						subredditId: n
					}));
				return (null === (s = null == g ? void 0 : g.latestParticipants) || void 0 === s ? void 0 : s.length) ? r.a.createElement("div", {
					className: Object(o.a)(b.a.tournamentFacepile, e)
				}, g.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: s
				}) => {
					const a = !!h && Object(l.e)(h) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = s,
						g = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? r.a.createElement(i.a, {
						key: g,
						backgroundClassName: b.a.snoovatarBackground,
						className: Object(o.a)(b.a.snoovatar, t),
						headshot: u
					}) : r.a.createElement(c.a, {
						key: g,
						className: Object(o.a)(b.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: a,
						isNSFW: m,
						isNightMode: p,
						shouldHideNSFW: f
					})
				})) : null
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/Header/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentHeader: "_2L8VNMjNWlcP7ToGgB-MVT",
				icon: "_2SAm3TtzbpBy2zeX5sXDSY",
				title: "_3GhPDUwqXvOEMxzArLzLW9",
				subtitle: "_1vXOj5w7dYV91BVsFC8f42",
				status: "_1cyWKM1TKL3TVlK7DGt2aX",
				facepileRow: "_3wP4rK05eWhVhwlsZCRcwW",
				numberOfPlayers: "JMuDzgPbrHDhUhQ-LmFSx"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				c = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				d = n("./src/reddit/models/Poll/index.ts"),
				l = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/Econ/Tournament/Sidebar/Header/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function h({
				subredditId: e
			}) {
				const t = Object(a.e)(t => Object(l.e)(t, {
						subredditId: e
					})),
					n = Object(a.e)(t => Object(u.T)(t, {
						subredditId: e
					})),
					s = Object(c.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: n
					});
				if (!t) return null;
				const {
					name: m,
					status: h,
					totalParticipantsCount: f
				} = t;
				return r.a.createElement("div", {
					className: p.a.tournamentHeader
				}, r.a.createElement("img", {
					alt: b._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					className: p.a.icon,
					src: s.url,
					style: {
						backgroundColor: s.color
					}
				}), r.a.createElement("h1", {
					className: p.a.title
				}, m), r.a.createElement("h3", {
					className: p.a.subtitle
				}, h !== d.d.Closed ? b._("Join this live Predictions tournament!", null, {
					hk: "3BXAaU"
				}) : b._("Check out the leaderboard to see the winners!", null, {
					hk: "Nsabe"
				})), r.a.createElement("div", {
					className: p.a.status
				}, h !== d.d.Closed ? f > 0 && r.a.createElement("div", {
					className: p.a.facepileRow
				}, r.a.createElement(i.a, {
					subredditId: e
				}), r.a.createElement("div", {
					className: p.a.numberOfPlayers
				}, b._("{totalPlayers} playing now", [b._param("totalPlayers", Object(o.b)(f))], {
					hk: "2ZTOLO"
				}))) : b._("Tournament ended", null, {
					hk: "2gUDWl"
				})))
			}
			n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx");
			var f = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx");

			function g({
				subredditId: e
			}) {
				const t = Object(a.e)(t => Object(l.e)(t, {
					subredditId: e
				}));
				return t ? r.a.createElement(f.default, {
					subredditId: e,
					tournamentId: t.tournamentId
				}) : null
			}
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function E({
				subredditId: e
			}) {
				return r.a.createElement("div", null, r.a.createElement(h, {
					subredditId: e
				}), r.a.createElement(g, {
					subredditId: e
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", a)
		},
		"./src/reddit/components/EmptySubredditPostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/components/PostList/Placeholder.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = c.a.wrapped(o.a, "backgroundPlaceholder", l.a);

			function p() {
				return r.a.createElement("div", {
					className: Object(i.a)(l.a.component, l.a.emptyHomepage)
				}, r.a.createElement(m, {
					isLoading: !1,
					layout: a.g.Classic
				}), r.a.createElement("div", {
					className: l.a.mainContentWrapper
				}, r.a.createElement("div", {
					className: l.a.mainContent
				}, r.a.createElement("div", {
					className: l.a.primaryText
				}, u._("No prediction tournament posts", null, {
					hk: "1gqn5x"
				})))))
			}
			var b = n("./src/reddit/components/EmptySubreddit.tsx");

			function h({
				isPredictionsPage: e,
				listingName: t,
				sort: n,
				subreddit: s
			}) {
				return e ? r.a.createElement(p, null) : r.a.createElement(b.a, {
					listingName: t,
					sort: n,
					subreddit: s || void 0
				})
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-ClaimPointsBanner").then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(r.a)("spClaimablePoints", a)
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistrationStellarBanner").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				trending: "_2H51id1RX9dGNrtrAIOMGK",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				multi: "_3Hhjob0kyyqVjBXut8STgU",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				trendingContent: "BNJ5Y52EyQmTHFZJwjoXJ",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(a);
			const i = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				o = n("./src/reddit/constants/page.ts");
			const i = e => e && e.toLowerCase() === a.b.Popular,
				c = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === o.b,
				l = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				u = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let o, u, m, p, b;
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, x;
					return d(e) ? (o = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = a.c[a.b.Home], u = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : c(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = a.c[a.b.All]) : i(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = a.c[a.b.Popular]) : e && (u = n && n.description, m = l(""), p = t.displayText, b = t.url, x = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: x,
						subscribersText: h,
						currentlyViewingText: f,
						currentlyViewingCount: g,
						...o ? {
							bannerBackgroundImage: o
						} : {}
					}
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/index.m.less"),
				i = n.n(o);
			const c = ({
				snooBackground: e
			}) => r.a.createElement("div", {
				className: i.a.AdorableSnoo,
				style: {
					background: e.image,
					backgroundSize: `${e.width}px ${e.height}px`,
					height: e.height,
					width: e.width
				}
			});
			t.a = ({
				titleText: e,
				snooBackground: t
			}) => r.a.createElement("div", {
				className: Object(a.a)(i.a.Title, i.a.TitleShifted)
			}, r.a.createElement(c, {
				snooBackground: t
			}), r.a.createElement("div", {
				className: i.a.TitleTextShiftedContainer
			}, r.a.createElement("span", {
				className: i.a.TitleText
			}, e)))
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: o,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? r.a.createElement(d, null, s) : r.a.createElement(d, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: i.a.title
				}, c), o && r.a.createElement("div", {
					className: i.a.subtitle
				}, o)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = n.n(b);
			const f = a.a.createElement(u.a, {
					className: h.a.icon
				}),
				g = Object(i.c)({
					subreddit: m.A,
					subredditAboutInfo: m.x
				}),
				x = Object(o.b)(g);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					o = n && n.quarantineMessage || s.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return a.a.createElement(p.a, {
					className: h.a.container,
					color: d.b.quarantine,
					icon: f,
					subtitle: a.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", a.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? a.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: r
					}) : o, " ", a.a.createElement(l.a, {
						className: h.a.link,
						to: "/"
					}, s.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: s.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "i", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						l.a.publish(d.a, s, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(a.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(a.b)(() => Object(o.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const E = (e, t) => {
				const n = Object(h.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var y = Object(a.b)(() => Object(o.a)(E, e => e))(e => r.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var _ = Object(a.b)(() => Object(o.c)({
					subreddit: f.T
				}))(e => r.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				v = n("./src/reddit/hooks/usePostContext.ts");
			var O = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(v.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: a
				})
			};
			var C = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: a
				} = Object(v.a)(), o = Object(s.useMemo)(() => ({
					author: t.author,
					isModerator: a,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, a]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: o
				})
			};
			var j = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(v.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: a
				})
			};
			var S = Object(a.b)(() => Object(o.c)({
				subreddit: f.T
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var k = Object(a.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var I = Object(a.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.T)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(r.createContext)(null),
				u = Object(r.createContext)(null);
			class m extends a.a.Component {
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
					return a.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, a.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = o.f + 10,
				b = a.a.memo(() => a.a.createElement(l.Consumer, null, e => e && a.a.createElement("div", {
					className: d.a.wrapper
				}, a.a.createElement(i.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, s.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), a.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				h = a.a.memo(() => a.a.createElement(u.Consumer, null, e => a.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(a.b)(() => Object(o.c)({
					isNightmodeOn: m.V
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/components/Media/blurredContent.ts"),
				_ = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				v = n.n(_);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => e > 2 * f.e,
				j = e => {
					const t = Object(d.a)(v.a.image, b.g, e.className, {
							[v.a.mShowCentered]: e.showCentered,
							[v.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${f.j}px`), e.isListing || e.isTall && C(e.height) || (n.maxHeight = `${f.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), a.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(f.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${f.j}px`, e.shouldBlur && (t.maxWidth = Object(f.I)(e.height, e.width) ? `${f.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(d.a)(v.a.container, e.className),
						style: t
					}, e.children)
				},
				k = Object(o.b)(() => Object(c.a)(g.C, x.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(g.b)(e, n) : null, (e, t, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n
				})));
			t.a = k(e => e.outboundUrl && !e.shouldBlur ? a.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, P(e)) : e.isListing && e.postPermalink ? a.a.createElement(i.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, P(e)) : P(e));
			const I = (e, t) => a.a.createElement(j, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[E.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				P = ({
					onClick: e,
					...t
				}) => {
					const n = Object(f.I)(t.height, t.width),
						r = C(t.height) && n;
					return a.a.createElement(S, O({}, t, {
						className: `${n?`${E.a} `:""}${t.className||""}`
					}), t.isListing ? a.a.createElement("div", {
						className: t.contentImageClassName
					}, I(n, t)) : a.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, I(n, t)), t.isListing && !t.showFull && t.height > f.j && Object(f.I)(t.height, t.width) && a.a.createElement("div", {
						className: v.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && a.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && a.a.createElement("div", {
						className: v.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: v.a.unblurButton
					}, Object(y.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(a.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(a.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							a = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", a), e.addEventListener("playing", a);
						let o = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(i = c);
							if (e.paused || e.seeking || !n) return void(i = c);
							const r = o;
							4 === e.readyState ? o = !1 : !o && c >= i && c < i + f ? o = !0 : o && c >= i && c > i + f && (o = !1), i = c, r !== o && t(o)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: n,
						onBufferingChange: s,
						shouldLoad: r,
						shouldPause: a,
						showCentered: i,
						showFull: c,
						source: d,
						...l
					} = this.props;
					return o.a.createElement("video", x({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), o.a.createElement("source", {
						src: Object(g.a)(this.props.source || "")
					}))
				}
			}
			var y = E,
				_ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				v = n.n(_);
			const O = Object(c.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				C = Object(i.b)(O, (e, {
					postId: t
				}) => ({
					onBufferingChanged: n => {
						e(n ? l.r(t) : l.E(t))
					},
					onLoadStarted: n => e(l.q(t, n)),
					onMetadataReceived: n => e(l.D({
						metadata: n,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: n => e(l.A(t, n)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: n => e(l.N(n, t))
				}));
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, n = {};
						return e && (n.margin = "0 auto"), t || (n.maxHeight = `${m.e}px`), o.a.createElement(y, {
							autoplay: this.props.autoplayPref,
							className: Object(d.a)(u.a, v.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: n,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : o.a.createElement("div", {
						className: Object(d.a)(v.a.container, this.props.className, {
							[v.a.centered]: this.props.showCentered
						})
					}, o.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = C(j)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? s.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? s.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: o,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(s, e),
					onClick: o
				}, p), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/LRUCache/index.ts"),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(i.a)(e, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
			}, r.a.createElement(l.a, {
				className: h.a.backgroundWrapper
			}, r.a.createElement("div", {
				className: h.a.titleAndDescriptionContainer
			}, r.a.createElement("h3", {
				className: h.a.title
			}, f._("Top broadcast", null, {
				hk: "HADCh"
			}))), r.a.createElement("div", {
				className: h.a.body
			}, r.a.createElement("div", {
				className: h.a.previewContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(h.a.thumbnail, h.a.loading)
			})))));
			var x = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? r.a.createElement(c.b, {
				className: Object(i.a)(e, h.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? r.a.createElement(d.a, {
				className: Object(i.a)(e, h.a.compactPostPlaceholder),
				isLoading: !0
			}) : r.a.createElement(g, {
				className: e
			});
			const E = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: ({
					className: e,
					layout: t
				}) => r.a.createElement(x, {
					className: e,
					layout: t
				}),
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var y = e => r.a.createElement(E, e),
				_ = n("./src/reddit/helpers/trackers/rpan.ts");
			const v = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340,
				O = new a.a(20),
				C = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = O.get(t);
					if (n) return n;
					const s = j(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: v(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(_.G)()),
								render: ({
									className: t
								}) => r.a.createElement(y, {
									className: t,
									layout: e.layout,
									listingName: e.listingName
								})
							},
							idx: s
						};
					return O.set(t, a), a
				},
				j = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				b = c.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: {
						...e.style,
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(i.a)(b))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a);
			class i extends o.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
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
					return o.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				E = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => a.a.createElement(x, p({}, n, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				y = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class _ extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return a.a.createElement(E, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, a.a.createElement(f, null, a.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), a.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return A
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				m = c.a.hr("Hr", i.a),
				p = c.a.code("M", i.a),
				b = c.a.pre("Pre", i.a),
				h = c.a.blockquote("Blockquote", i.a),
				f = c.a.p("P", i.a),
				g = c.a.li("Li", i.a),
				x = c.a.ul("Ul", i.a),
				E = c.a.ol("Ol", i.a),
				y = c.a.strong("B", i.a),
				_ = c.a.em("I", i.a),
				v = c.a.span("U", i.a),
				O = e => r.a.createElement("del", e),
				C = c.a.sub("Sub", i.a),
				j = c.a.sup("Sup", i.a),
				S = c.a.table("Table", i.a),
				k = c.a.tr("Tr", i.a),
				I = c.a.td("Tdl", i.a),
				P = c.a.td("Tdc", i.a),
				T = c.a.td("Tdr", i.a),
				w = c.a.th("Thl", i.a),
				N = c.a.th("Thc", i.a),
				L = (c.a.th("Thr", i.a), c.a.wrapped(e => r.a.createElement(a.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", i.a)),
				A = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				x = n.n(g);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = n("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				_ = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => o.a.createElement(y, E({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				v = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				O = e => r()(e, v),
				C = e => e.findIndex(v),
				j = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: a,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: g,
						useExplicitTextColor: E,
						shouldBlur: v
					} = e, j = s.document, S = [], k = e.mediaMetadata || null, I = C(j), P = O(j);
					if (v && !r) return o.a.createElement(y, {
						className: Object(i.a)(u.j, n)
					}, o.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: d
					}, Object(l.a)(!!a, !!c))));
					if (-1 !== I)
						for (let o = I; o <= P; o++) {
							const e = j[o];
							switch (e.e) {
								case b.k:
									S.push(f.c(e, g, o));
									break;
								case b.l:
									S.push(f.d(o));
									break;
								case b.b:
									S.push(f.a(e, k, g, o));
									break;
								case b.c:
									S.push(f.b(e, o));
									break;
								case b.p:
									S.push(f.f(e, k, g, o));
									break;
								case b.z:
									S.push(f.h(e, k, g, o));
									break;
								case b.u:
									S.push(f.g(e, k, g, o));
									break;
								case b.h:
									S.push(Object(h.a)(e, o));
									break;
								case b.m:
								case b.a:
								case b.D:
									S.push(...Object(h.b)(e, o, k, p, m, t))
							}
						}
					return E ? o.a.createElement(y, {
						className: Object(i.a)(u.j, n)
					}, S) : o.a.createElement(_, {
						className: Object(i.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, S)
				};
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return j(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				g = n.n(f),
				x = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				_ = x.a.wrapped(h.a, "A", g.a),
				v = x.a.wrapped(l.a, "ImageBox", g.a),
				O = x.a.wrapped(e => a.a.createElement("p", e), "Caption", g.a),
				C = x.a.div("Placeholder", g.a),
				j = x.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return a.a.createElement(C, E({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", g.a),
				S = ({
					c: e,
					x: t,
					y: n
				}, s) => a.a.createElement("div", {
					className: g.a.MediaWrapper
				}, a.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
					showCentered: !0,
					showFull: !0,
					width: t
				}, a.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				k = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === b.s ? r = n.s.u : n.e === b.r ? r = n.s.gif : n.e === b.t && (r = (e => {
						const t = y.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? a.a.createElement(_, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				I = (e, t, n, s, r, i) => {
					const d = b.E(n, e.id);
					if (s) return [k(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => a.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: s
						})
					}, a.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, a.a.createElement(v, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, i)) : d.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(p.f)(e)) {
							const i = t || Object(p.e)(e);
							return a.a.createElement("div", {
								className: Object(o.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: r
								})
							}, a.a.createElement(_, {
								href: i,
								key: s,
								target: "_blank"
							}, n.mp4 ? a.a.createElement("video", {
								className: g.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, a.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: i
							}))
						}
						return a.a.createElement("div", {
							className: Object(o.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: r
							})
						}, a.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, a.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, i, d, l) => a.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: d
						})
					}, a.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: i,
						showCentered: !0,
						showFull: !0,
						width: n
					}, a.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(d, t, !!e.c, r)) : l.push(((e, t) => a.a.createElement(j, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => a.a.createElement(O, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "e", (function() {
				return F
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(g);
			const E = 1e3,
				y = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, E)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const a = this.state.tooltipOpen ? l()() : void 0;
					return r ? i.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: a,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: a,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(v),
				C = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				S = n("./src/reddit/components/SubredditMention/index.tsx"),
				k = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				I = n("./src/reddit/helpers/richTextJson/index.ts");
			const P = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						a = [],
						o = s.length;
					for (let i = 0; i < o; i++) {
						const e = s[i];
						a.push(e.e === p.w ? e.t : F(e, t, i))
					}
					const d = c.x[r - 1];
					return i.a.createElement(d, {
						key: n
					}, a)
				},
				T = e => i.a.createElement(c.e, {
					key: e
				}),
				w = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const a = r.length,
						o = [];
					for (let i = 0; i < a; i++) o.push(A(r[i], t, n, i));
					return i.a.createElement(c.c, {
						key: s
					}, o)
				},
				N = (e, t) => {
					const n = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				L = (e, t, {
					renderingObjectInfo: n
				}, s) => {
					const r = e.c,
						a = [],
						o = r.length;
					for (let l = 0; l < o; l++) {
						const e = r[l].c;
						e && e.length && a.push(i.a.createElement(c.g, {
							key: l
						}, e.map((e, s) => A(e, t, {
							renderingObjectInfo: n
						}, s))))
					}
					const d = e.o ? c.i : c.v;
					return i.a.createElement(d, {
						key: s
					}, a)
				},
				A = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return w(e, t, n, s);
						case p.c:
							return N(e, s);
						case p.k:
							return P(e, n, s);
						case p.l:
							return T(s);
						case p.p:
							return L(e, t, n, s);
						case p.u:
							return D(e, t, n, s);
						case p.z:
							return B(e, t, n, s)
					}
				},
				B = (e, t, n, s) => {
					const r = e.c,
						a = e.h,
						o = r.length,
						d = a.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = a[c],
							{
								H: s,
								D: r
							} = W(e.a),
							{
								c: o = []
							} = e;
						l.push(i.a.createElement(s, {
							key: c
						}, R(o, t, n))), m[c] = r
					}
					for (let p = 0; p < o; p++) {
						const e = r[p],
							s = e.length,
							a = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: o = []
								} = e[r];
							a.push(i.a.createElement(s, {
								key: r
							}, R(o, t, n)))
						}
						u.push(i.a.createElement(c.t, {
							key: p
						}, a))
					}
					return i.a.createElement(c.n, {
						key: s
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, l)), i.a.createElement("tbody", null, u))
				},
				D = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(I.f)(r.id) ? i.a.createElement(c.j, {
						key: s
					}, R(e.c, t, n)) : Object(C.b)(r, s, t)
				},
				R = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let a = 0; a < r; a++) {
						const r = e[a];
						if (r.e === p.A) s.push(M(r, a));
						else if (r.e === p.x) s.push(i.a.createElement(j.a, {
							key: a
						}, R(r.c, t, n)));
						else if (r.e === p.n) s.push(i.a.createElement("br", {
							key: a
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(i.a.createElement(O, {
									key: a,
									node: r,
									media: e
								}))
							}
						} else s.push(F(r, n, a))
					}
					return s
				},
				F = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = M({
								t: e.t,
								f: e.f
							}, 0);
							return Object(k.b)(e.u) ? i.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s) : i.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a
							}, s);
						case p.y:
							return i.a.createElement(S.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				M = (e, t) => {
					const {
						f: n,
						t: r
					} = e, a = [];
					if (!n) return H(0, r, t);
					const o = Object(s.a)(r);
					let i = 0,
						c = 0;
					const d = n.length;
					for (; i < d; i++) {
						const [e, t, s] = n[i], d = t + s, l = o[t], u = o[d] - l;
						l > c && a.push(H(0, r.substr(c, l - c), `between${i}`)), a.push(H(e, r.substr(l, u), i)), c = l + u
					}
					return c < r.length && a.push(H(0, r.substr(c), `remaining${i}`)), a
				},
				U = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				H = (e, t, n) => {
					let s = t;
					return s = a()(U, (t, s, r) => e & parseInt(r, 10) ? i.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				W = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				E = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/models/Theme/index.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/components/MiniCardPost/index.m.less"),
				C = n.n(O),
				j = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				S = n.n(j);
			const k = e => e.type === y.f.Spoiler,
				I = Object(h.t)();
			t.a = I(Object(f.b)(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: a,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: y,
					showSubredditMeta: O = !0,
					showSubredditName: j,
					subredditOrProfile: I
				} = e, P = h && h.preview && h.preview.url || void 0, T = h && h.isSponsored ? "promoted_trend" : "trending", w = h && Object(l.a)(h.permalink) || "", N = y && w || f && Object(i.a)("/search", {
					q: f.rawQuery,
					source: T
				}) || w, L = f ? f.subredditInfo && f.subredditInfo.icon : I && I.icon.url, A = f ? f.subredditInfo && f.subredditInfo.displayText : I && (I.displayText || I.name), B = h ? h.flair.filter(k) : [], D = h ? h.score : 0, R = h ? h.numComments : 0, F = h && h.isSponsored, M = Object(v.a)(e).body, U = `linear-gradient(\n      ${Object(r.g)(M,.2)},\n      ${Object(r.g)(M,.3)},\n      ${Object(r.g)(M,.4)},\n      ${Object(r.g)(M,.6)},\n      ${Object(r.g)(M,.8)},\n      ${M}\n    )`, H = o.a.createElement("div", {
					id: a,
					className: Object(c.a)(S.a.trendingPost, {
						[S.a["m-background"]]: !!P
					})
				}, o.a.createElement(g.a, {
					to: N
				}, o.a.createElement("div", {
					className: Object(c.a)(S.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(_.g)(Object(v.a)(e).body, P || Object(v.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, F && o.a.createElement("div", {
					className: S.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(c.a)(S.a.innerContainer, C.a.innerContainer, d),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? S.a.title : S.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(c.a)(S.a.description, n)
				}, B.length > 0 && o.a.createElement(m.a, {
					className: S.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : o.a.createElement("div", {
					className: S.a.spacer
				}), O && L && A && o.a.createElement(x.a, {
					className: S.a.relatedSubredditMetaData,
					iconClassName: S.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", A)], {
						hk: "2YTyJf"
					})
				}), !O && h && o.a.createElement("div", {
					className: S.a.metaLine
				}, j && A && o.a.createElement("span", {
					className: S.a.meta
				}, Object(E.c)(A)), o.a.createElement("span", {
					className: S.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: S.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "311aXY"
				})))))));
				return F ? o.a.createElement(p.a, {
					post: h
				}, H) : H
			}))))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(i);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(o.a, {
					className: c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.createElement(o.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/selectors/brandSafety.ts"),
				c = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.t)();
			t.a = m(Object(a.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const s = Object(i.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					r = Object(d.A)(e) || Object(c.a)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: s && !r,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: a
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: s,
				...a
			}) => !t && e && s ? r.a.createElement(l.a, u({
				forceHouseAd: n
			}, a)) : null))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", r.a)
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
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				y = n.n(E);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = u.a.div("BladeContainer", y.a), O = u.a.wrapped(h.a, "CloseIcon", y.a), C = u.a.div("LoadingTitleContainer", y.a), j = u.a.div("LoadingNavContainer", y.a), S = u.a.div("ShortLoadingNav", y.a), k = u.a.wrapped(b.a, "ThemedChevron", y.a), I = ({
				...e
			}) => o.a.createElement(v, null, o.a.createElement(O, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, _._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(p.o, null, o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(y.a.LoadingTitle, e.isLoading && y.a.loading)
			})), o.a.createElement(j, null, o.a.createElement("div", {
				className: Object(l.a)(y.a.LoadingNav, e.isLoading && y.a.loading)
			}), o.a.createElement(k, null)), o.a.createElement(j, null, o.a.createElement(S, null), o.a.createElement(k, null)), o.a.createElement(j, null, o.a.createElement("div", {
				className: Object(l.a)(y.a.LoadingNav, e.isLoading && y.a.loading)
			}), o.a.createElement(k, null)), o.a.createElement(j, null, o.a.createElement(S, null), o.a.createElement(k, null)), o.a.createElement(j, null, o.a.createElement("div", {
				className: Object(l.a)(y.a.LoadingNav, e.isLoading && y.a.loading)
			}), o.a.createElement(k, null))))), P = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(I, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(I, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: f.k
			});
			t.a = Object(i.b)(T)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(y.a.Container, e.isSubscriptionsPinned && y.a.isSubscriptionPinned)
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
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "j", (function() {
				return _
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
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				f = s.a.div("FormItem", a.a),
				g = s.a.h3("FormElementTitle", a.a),
				x = s.a.div("FormElementDescription", a.a),
				E = s.a.div("FormElementError", a.a),
				y = s.a.div("FormElementSubGroup", a.a),
				_ = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = n("./src/reddit/icons/svgs/Upload/index.tsx"),
				E = n("./src/reddit/models/ApiRequestState/index.ts"),
				y = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				v = n.n(_);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, o = Object(h.a)(), i = [n, v.a.inTopBar, v.a.iconContainer];
					return s ? i.push(v.a.emptyEditableIconInTopBar) : i.push(v.a.editableIcon, v.a.emptyEditableIcon), a.a.createElement("span", O({}, r, {
						className: Object(c.a)(...i)
					}), s ? o ? a.a.createElement(f.a, {
						name: "upload",
						className: v.a.emptyUploadButton
					}) : a.a.createElement(x.a, {
						className: v.a.emptyUploadButton
					}) : o ? a.a.createElement(f.a, {
						name: "add",
						className: v.a.emptyPlusButton
					}) : a.a.createElement(g.a, {
						className: v.a.emptyPlusButton
					}), e.children)
				},
				j = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: o,
						inTopBar: i,
						src: d
					} = e;
					return a.a.createElement("span", {
						className: v.a.iconContainer
					}, a.a.createElement("img", {
						alt: s,
						onClick: o,
						role: r,
						src: d,
						className: Object(c.a)(n, {
							[v.a.editableIcon]: !i
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				S = Object(i.c)({
					isLoading: y.b
				});
			class k extends a.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => a.a.createElement(u.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(E.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? a.a.createElement("span", {
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = a.a.createElement(a.a.Fragment, null, a.a.createElement(j, O({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, a.a.createElement(C, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : a.a.createElement(a.a.Fragment, null, a.a.createElement(C, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), a.a.createElement(m.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? a.a.createElement("div", {
						className: v.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(S, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(d.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(k))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = a.a.wrapped(o.b, "SubredditIcon", d.a),
				m = a.a.wrapped(e => r.a.createElement(i.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(b.c)(x),
				y = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				_ = Object(a.b)(y),
				v = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: a
				}) => {
					if (!t || !e) return r.a.createElement(E, {
						subredditName: n,
						rtJsonElementProps: a
					});
					switch (s) {
						case h.md.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: a
							});
						case h.md.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return r.a.createElement(E, {
								subredditName: n,
								rtJsonElementProps: a
							})
					}
				};
			t.b = _(v)
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				x = n("./src/reddit/components/IdCard/helpers.ts"),
				E = e => !Object(g.a)(e) || Object(x.c)(e) || Object(x.d)(e) || Object(x.e)(e),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				v = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				O = n("./src/reddit/components/SidebarContainer/index.tsx"),
				C = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = n("./src/lib/makeListingKey/index.ts"),
				k = n("./src/reddit/actions/subreddit.ts"),
				I = n("./src/lib/classNames/index.ts"),
				P = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/helpers/name/index.ts"),
				N = n("./src/reddit/helpers/overlay/index.ts"),
				L = n("./src/reddit/selectors/experiments/topPosts.ts"),
				A = n("./src/reddit/selectors/posts.ts"),
				B = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const D = .99;
			class R extends i.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= D && t(n)
					}
				}
				render() {
					return i.a.createElement(B.a, {
						threshold: D,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var F = R,
				M = n("./src/lib/isUrl/index.ts"),
				U = n("./src/lib/prettyPrintNumber/index.ts"),
				H = n("./src/reddit/components/FlairWrapper/index.tsx"),
				W = n("./src/reddit/components/Thumbnail/index.tsx"),
				V = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				K = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				G = n.n(K);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = e => e.type === V.f.Nsfw || e.type === V.f.Spoiler, Y = Object(d.c)({
				post: A.D,
				subredditOrProfile: A.P
			});
			class Z extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, a = {
						post: t
					}, o = Object(M.a)(Object(W.b)(a)), c = t.flair.filter(J);
					return i.a.createElement("div", {
						className: Object(I.a)(G.a.container, e, {
							[G.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, i.a.createElement("div", {
						className: G.a.mainLine
					}, o && i.a.createElement("div", {
						className: G.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, i.a.createElement(W.a, a)), i.a.createElement("div", {
						className: Object(I.a)(G.a.title, !o && G.a.titleSingle),
						title: t.title
					}, c.length > 0 && i.a.createElement(H.a, {
						className: G.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), i.a.createElement("div", {
						className: G.a.metaLine
					}, s && !!r && i.a.createElement("span", {
						className: G.a.meta
					}, Object(q.g)(r) ? Object(w.d)(r.displayText || r.name) : Object(w.c)(r.displayText || r.name)), i.a.createElement("span", {
						className: G.a.meta
					}, z._({
						"*": "{score} points",
						_1: "1 point"
					}, [z._plural(t.score, "score", Object(U.b)(t.score))], {
						hk: "1JZ0qm"
					})), i.a.createElement("span", {
						className: G.a.meta
					}, z._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [z._plural(t.numComments, "numComments", Object(U.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Q = Object(c.b)(Y, e => ({
					openLightbox: t => e(Object(N.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Z),
				X = n("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = n.n(X);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 10, ne = 2, se = Object(d.a)(A.J, e => e.filter(e => !e.isSponsored)), re = Object(d.c)({
				posts: (e, t) => se(e, {
					...t
				})
			});
			class ae extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: a
						} = this.props;
						return i.a.createElement(F, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, i.a.createElement(Q, {
							className: Object(I.a)($.a.smallPost, a),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(g.a)(Object(w.g)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: a,
						redditStyle: o,
						showMoreButton: c,
						topPostsVariant: d
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === a.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(L.a)(d),
						p = Object(L.b)(d),
						b = m || p,
						h = a.slice(l * u, (l + 1) * u),
						[f, ...x] = h,
						E = b ? h.slice(0, ne) : x.slice(0, ne),
						y = b ? h.slice(ne) : x.slice(ne);
					return i.a.createElement("div", {
						className: Object(I.a)($.a.container, t, {
							[$.a.redditStyle]: o
						})
					}, !b && i.a.createElement(F, {
						onPostVisible: r,
						postId: f.id
					}, i.a.createElement(P.a, {
						postId: f.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(w.g)(n)),
						trendingPost: f
					})), E.map(this.renderSmallPost), e, y.map(this.renderSmallPost), c && i.a.createElement(T.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, s || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var oe = Object(c.b)(re, e => ({
					openPost: t => e(Object(N.a)(t.permalink))
				}))(ae),
				ie = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				de = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const he = 10,
				fe = Object(d.a)((e, t) => t.subredditName, e => Object(S.a)(e, l.P.TOP, {
					t: l.Ub.WEEK
				})),
				ge = Object(d.c)({
					discoveryUnit: e => Object(ue.c)(e, {
						unitName: le.j
					}),
					listingKey: fe,
					posts: (e, t) => {
						const n = fe(e, t);
						return Object(A.J)(e, {
							listingKey: n
						})
					},
					subreddit: me.A
				});
			class xe extends i.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(de.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(de.x)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(de.C)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: a,
						subredditName: o,
						topPostsVariant: c
					} = this.props;
					if (0 === a.length) return null;
					const d = o,
						l = a.length > he;
					return i.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, i.a.createElement(oe, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, i.a.createElement("div", null, e)))
				}
			}
			var Ee = Object(c.b)(ge, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(k.r)({
						sort: l.P.TOP,
						subredditName: t,
						t: l.Ub.WEEK
					}))
				}))(Object(ie.c)(xe)),
				ye = n("./src/config.ts"),
				_e = n("./src/lib/localStorageAvailable/index.ts"),
				ve = n("./src/reddit/actions/modal.ts"),
				Oe = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ce = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				je = n("./src/reddit/controls/TextButton/index.tsx"),
				Se = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Ie extends i.a.Component {
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(Ce.d, null, i.a.createElement(Ce.h, null, i.a.createElement(Se.a, null, i.a.createElement(Ce.p, null, ke._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), i.a.createElement(je.a, {
						onClick: e.toggleModal
					}, i.a.createElement(Ce.b, null)))), i.a.createElement(Ce.k, null, i.a.createElement(Ce.o, null, ke._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), i.a.createElement(Ce.f, null, i.a.createElement(Ce.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, ke._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(Ce.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, ke._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Pe = Object(Oe.a)(Ie),
				Te = n("./src/reddit/components/IdCard/Banner.tsx"),
				we = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Ne = n("./src/reddit/constants/blade.ts"),
				Le = n("./src/reddit/controls/InternalLink/index.tsx"),
				Ae = n("./src/reddit/helpers/localStorage/index.ts"),
				Be = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				De = n("./src/reddit/icons/fonts/index.tsx"),
				Re = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				Fe = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Me = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = n("./src/reddit/selectors/activeModalId.ts"),
				He = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				We = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ve = n("./src/reddit/selectors/structuredStyles.ts"),
				qe = n("./src/reddit/components/IdCard/index.m.less"),
				Ke = n.n(qe),
				Ge = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				ze = n.n(Ge);
			const Je = "mod_onboarding_modal",
				Ye = "mod_onboarding_widget",
				Ze = Object(d.a)(Ue.a, (e, t) => Object(We.a)(Me.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(Ve.k)(e, {
					subredditId: t.subredditId
				}), He.a, (e, t, n, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					isInIcons2020: s,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Qe extends i.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Ae.lb)(Ye, !0, this.props.subredditId), this.props.sendEvent(Object(Be.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Be.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Be.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Be.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Be.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: s,
						subredditId: r
					} = this.props, a = e && !(t && n && s) && (!Object(_e.a)() || !Object(Ae.u)(Ye, r));
					a !== this.state.visible && (this.setState({
						visible: a
					}), a && this.props.sendEvent(Object(Be.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						isInIcons2020: t,
						modHasEditedBanner: n,
						modHasEditedColors: r,
						modHasEditedIcon: a,
						subredditName: o,
						toggleCloseMenuModal: c
					} = this.props;
					return this.state.visible ? i.a.createElement(ce.a, {
						className: Object(I.a)(ze.a.container, this.props.className)
					}, i.a.createElement(Te.a, {
						bannerBackgroundImage: `${ye.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), t ? i.a.createElement(De.a, {
						name: "close",
						className: ze.a.closeIcon,
						onClick: c
					}) : i.a.createElement(Fe.a, {
						className: ze.a.closeIcon,
						onClick: c
					}), Object(we.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(x.b)(`url('${ye.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), i.a.createElement("div", {
						className: Object(I.a)(Ke.a.Description, ze.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", i.a.createElement("a", {
						href: Ne.e.exportImport,
						className: ze.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), i.a.createElement(Le.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.NameAndIcon}`,
						className: ze.a.link,
						onClick: this.customizeIcon
					}, a ? i.a.createElement(Re.a, {
						className: ze.a.checked
					}) : i.a.createElement(Re.a, {
						className: ze.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), i.a.createElement(Le.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.Banner}`,
						className: ze.a.link,
						onClick: this.customizeBannerImage
					}, n ? i.a.createElement(Re.a, {
						className: ze.a.checked
					}) : i.a.createElement(Re.a, {
						className: ze.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), i.a.createElement(Le.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.Global}`,
						className: ze.a.link,
						onClick: this.customizeThemeColors
					}, r ? i.a.createElement(Re.a, {
						className: ze.a.checked
					}) : i.a.createElement(Re.a, {
						className: ze.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), i.a.createElement(T.n, {
						to: `/r/${o}?styling=true`,
						className: ze.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), i.a.createElement("div", {
						className: ze.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Je && i.a.createElement(Pe, {
						withOverlay: !0,
						toggleModal: c,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Xe = Object(c.b)(Ze, (e, {
					subredditId: t,
					subredditName: n
				}) => ({
					toggleCloseMenuModal: () => e(Object(ve.i)(Je))
				}))(Object(ie.c)(Qe)),
				$e = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				et = n("./src/reddit/constants/tracking.ts"),
				tt = n("./src/reddit/selectors/seo/linksModule.ts"),
				nt = n("./src/reddit/selectors/telemetry.ts"),
				st = n("./src/telemetry/models/Subreddit.ts");
			const rt = e => t => ({
					...nt.defaults(t),
					action: et.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				at = e => t => n => ({
					...nt.defaults(n),
					action: et.c.CLICK,
					noun: Object(st.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				ot = Object(d.c)({
					communities: tt.c
				});
			var it = Object(c.b)(ot)(e => {
					const t = Object(ie.b)();
					return e.communities && e.communities.length ? i.a.createElement(C.a, null, i.a.createElement($e.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: rt,
						getSubscribeEventFactoryHandler: at,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				ct = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				dt = n("./src/reddit/featureFlags/index.ts"),
				lt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				ut = n("./src/reddit/models/Widgets/index.ts"),
				mt = n("./src/reddit/selectors/communityFlairs.ts"),
				pt = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				bt = n("./src/reddit/selectors/listings.ts"),
				ht = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				ft = n.n(ht);
			const gt = 250,
				xt = 270,
				Et = u.a.wrapped(O.a, "SidebarContainer", ft.a),
				yt = Object(d.c)({
					apiError: bt.c,
					apiPending: bt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(mt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(mt.c)(e, t),
					isPredictionsLeaderboardsEnabled: pt.f,
					showGovernance: dt.d.spPoints,
					showLeaderboard: dt.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.M)(e, {
						subredditId: t
					}) && !Object(me.N)(e, {
						subredditId: t
					}),
					widgets: me.s
				}),
				_t = Object(c.b)(yt);
			class vt extends o.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: ut.d.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !a()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						isPredictionsLeaderboardsEnabled: t,
						listingName: n,
						showGovernance: s,
						showLeaderboard: r,
						showPredictionsLeaderboard: a,
						subredditId: o,
						subredditName: c,
						topPostsVariant: d
					} = this.props;
					let u = 0;
					const g = Object(L.a)(d),
						x = Object(L.b)(d),
						O = Object(L.c)(d),
						S = g || x;
					let k, I;
					!!this.getPostFlairWidget() ? k = this.props.widgets : (k = this.getCommunityWidgets(), I = this.makeFlairFilterWidget());
					const P = this.makeRelatedCommunitiesWidget(g, x),
						T = !g,
						w = x,
						N = i.a.createElement(v.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.FIRST,
							sizes: l.h
						});
					return i.a.createElement(Et, {
						className: e
					}, E(n) && i.a.createElement(f.a, {
						listingName: n
					}), i.a.createElement(p.a, {
						cardClassName: ft.a.card,
						subredditId: o
					}), i.a.createElement(_.a, {
						subredditId: o
					}), t && a && i.a.createElement(m.a, {
						subredditId: o
					}), S && i.a.createElement(C.a, null, i.a.createElement(Ee, {
						subredditName: c,
						topPostsVariant: d
					}, i.a.createElement("div", {
						className: ft.a.inFeedAd
					}, N))), S && P && i.a.createElement(C.a, null, i.a.createElement(ct.a, {
						subredditName: c,
						truncateThreshold: xt,
						widget: P
					})), w && k.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return i.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, i.a.createElement(ct.a, {
							subredditName: c,
							truncateThreshold: gt,
							widget: e
						}))
					}), i.a.createElement(Xe, {
						subredditId: o,
						subredditName: c
					}), s && i.a.createElement(b.a, {
						className: ft.a.card,
						subredditId: o
					}), I && i.a.createElement(C.a, null, i.a.createElement(ct.a, {
						subredditName: c,
						widget: I
					})), r && i.a.createElement(h.a, {
						className: ft.a.card,
						subredditId: o,
						uniqueId: o
					}), i.a.createElement(y.g, {
						subredditId: o
					}), !S && N, i.a.createElement(it, {
						subredditId: o
					}), T && !w && k.map((e, t) => {
						const n = "community-list" === e.kind;
						return i.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, i.a.createElement(ct.a, {
							subredditName: c,
							truncateThreshold: O && n ? xt : O ? gt : void 0,
							widget: e
						}))
					}), i.a.createElement(j.a, {
						adComponent: i.a.createElement(v.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = _t(vt)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...n
				}) => a.a.createElement(o.q, u({}, n, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...s
				}) => a.a.createElement(o.q, u({}, s, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? o.c.S : o.c.M,
					text: p(e)
				}));
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						small: s = !1
					} = this.props, r = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(b, u({}, r, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, r, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => a[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(a.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(o.c)({
					postCount: l.I,
					previousPageIsOverlay: d.n,
					tabBadged: e => e.tabBadged
				}),
				m = Object(a.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = r.a.createContext(() => {});

			function l({
				children: e
			}) {
				const t = Object(a.f)(),
					n = Object(s.useCallback)(e => {
						{
							const n = t.getState(),
								s = e(n);
							Object(i.a)({
								...o.defaults(n),
								...s
							})
						}
					}, [t]);
				return r.a.createElement(d.Provider, {
					value: n
				}, e ? r.a.Children.only(e) : null)
			}

			function u() {
				return Object(s.useContext)(d)
			}

			function m(e) {
				function t(t) {
					const n = u();
					return r.a.createElement(e, c({}, t, {
						sendEvent: n
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/components/BlankPost/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends r.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? r.a.createElement(o.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : r.a.createElement(a.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = c(d)
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				j = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				S = n.n(j);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => a.a.createElement(b.a, {
					className: Object(d.a)(S.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: S.a.container
				}, e.isLoading ? a.a.createElement(g.a, {
					className: S.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: S.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(T, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(f.o, {
					className: S.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(c.c)({
					hideNSFWPref: O.B,
					nightmode: O.V
				}),
				T = Object(o.b)(P)(e => {
					const t = Object(x.a)();
					return a.a.createElement("div", {
						className: S.a.communityItemContainer
					}, a.a.createElement(_.a, {
						widthRight: h.t
					}, a.a.createElement("div", {
						className: S.a.iconContainer
					}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
						className: S.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? a.a.createElement(E.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(d.a)(S.a.defaultCommunityIcon, {
							[S.a.mNightmode]: e.nightmode
						})
					}) : a.a.createElement(y.a, {
						className: S.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: S.a.communityDescriptionContainer
					}, a.a.createElement(i.a, {
						className: S.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(C.b)(e.name, e.type),
						to: Object(C.a)(e.name, e.type)
					}, Object(C.b)(e.name, e.type)), a.a.createElement("div", {
						className: S.a.communityInfoContainer
					}, !!e.subscribers && a.a.createElement("p", {
						className: S.a.subscriberCount
					}, s.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [s.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && a.a.createElement(l.b, {
						flair: {
							type: v.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(g.a, {
						className: Object(d.a)(S.a.communityCta, S.a.smallLoadingIcon),
						sizePx: 12
					}) : a.a.createElement(f.o, {
						className: Object(d.a)(S.a.communityCta, {
							[S.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? a.a.createElement(p, {
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
					}) : a.a.createElement(u.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && a.a.createElement("p", {
						title: e.description,
						className: S.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
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
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, n) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: o.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(o.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(a.h)(t))
			}))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/postFlair.ts"),
				i = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.S,
				hideNSFWPref: b.B,
				isActive: p.j,
				moderatorPermissions: u.j,
				modModeEnabled: d.Q,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				}) => e(Object(o.h)({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				})),
				handleVote: n => {
					const s = n === c.a.upvoted ? Object(a.U)(t) : Object(a.r)(t);
					e(s)
				},
				onIgnoreReports: () => e(Object(a.S)(t)),
				onOpenReportsDropdown: t => e(Object(i.h)({
					tooltipId: t
				}))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: s
				}) => t.dispatchFlairChanged({
					post: n.post,
					previewFlair: e,
					selectedTemplateId: s
				})
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "d", (function() {
					return s
				})), n.d(t, "c", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(s || (s = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(r || (r = {}));
			const a = "SHORTCUT_FOCUSABLE_DIV",
				o = [9, 13, 32]
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(s.createContext)(o);

			function c(e) {
				return t => r.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => r.a.createElement(e, a({
					apiContext: n,
					gqlContext: s
				}, t)))
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, a = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !a && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(b);
			const f = Object(a.b)(() => Object(o.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.A)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}));
			t.a = f(e => r.a.createElement("div", {
				className: Object(i.a)(p.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => r.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, r.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : r.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && r.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2xQx4j6lBnDGQ8QsRnJEJa",
				iconContainer: "_2QGKgHKTtOwKHI4B_LI0YM",
				icon: "_1hdDhVEGWEdVJcgy2XQ2Eq",
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ"
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(s)(e => {
					const {
						featureEnabled: s,
						...a
					} = e, o = a;
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, s) => {
					let a = Object(r.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; a && a.depth > n && a.prev && (o = a.prev, (a = Object(r.n)(s, {
							commentLink: o,
							commentsPageKey: e
						})) && !(a.depth <= n)););
					return o.id
				},
				u = (e, t, n) => {
					const {
						commentLists: s,
						comments: r
					} = e, {
						head: i
					} = s[t];
					if (i) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: a.w,
								expEventOverride: t
							});
							return !!(Object(a.Hd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, a, o, i, c, d, l, u;
				return e ? e.quarantinedSubreddit ? (a = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (a = s.a.PrivateSubreddit, o = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? a = s.a.GoldSubreddit : e.subredditBanned ? (a = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? a = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (a = s.a.SubredditBlockedForLegalReason) : t && (a = s.a.Nsfw), a && n ? {
					banMessage: r,
					contentGateType: a,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: o,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/history/esm/history.js"), n("./src/reddit/actions/platform.ts");
			var s = n("./src/config.ts");
			t.a = (e, t) => {
				const n = t.platform.currentPage && t.platform.currentPage.url;
				let r = `${s.a.accountManagerOrigin}/login/`;
				const a = window.location.origin;
				n && (r += `?dest=${encodeURIComponent(`${a}${n}`)}`), window.location.href = r
			}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const n = Array.prototype.slice.call(arguments);
								return n.unshift(t), e.push(n), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const n = e.methods[t];
							e[n] = e.factory(n)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const n = document.getElementsByTagName("script")[0];
							n.parentNode.insertBefore(t, n)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				a = "|downsized";

			function o(e, t) {
				return r + e + (t ? a : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(r)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function d(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, s.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(a.a)(Object(r.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "dfp",
					action: "request",
					noun: "ad",
					...r.defaults(e),
					subreddit: r.subreddit(e)
				}),
				o = () => e => ({
					source: "dfp",
					action: "define",
					noun: "ad",
					...r.defaults(e),
					subreddit: r.subreddit(e)
				}),
				i = (e, t) => n => {
					const a = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						o = -1 !== a.indexOf(s.c.ABOVE_THE_FOLD) ? s.c.ABOVE_THE_FOLD : s.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + a);
					let c, d;
					if (i && (c = s.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = s.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = `${e.offsetWidth}x${e.offsetHeight}`
					}
					const l = t ? "aax" : void 0;
					return {
						source: "post",
						action: "view",
						noun: "programmatic_ad",
						...r.defaults(n),
						subreddit: r.subreddit(n),
						programmatic: {
							adUnit: d ? `DESKTOP ${d} ${o}` : `DESKTOP ${o}`,
							count: 1,
							partner: l,
							type: c
						}
					}
				},
				c = (e, t, n) => a => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...r.defaults(a),
					subreddit: r.subreddit(a),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: s.f.SWITCH_HOUSE_AD
					}
				})
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return x
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "E", (function() {
				return C
			})), n.d(t, "F", (function() {
				return j
			})), n.d(t, "M", (function() {
				return k
			})), n.d(t, "B", (function() {
				return I
			})), n.d(t, "C", (function() {
				return P
			})), n.d(t, "D", (function() {
				return T
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "L", (function() {
				return A
			})), n.d(t, "K", (function() {
				return B
			})), n.d(t, "I", (function() {
				return D
			})), n.d(t, "v", (function() {
				return R
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "z", (function() {
				return M
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "N", (function() {
				return H
			})), n.d(t, "J", (function() {
				return W
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "H", (function() {
				return q
			})), n.d(t, "d", (function() {
				return K
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "b", (function() {
				return z
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "e", (function() {
				return Y
			})), n.d(t, "s", (function() {
				return X
			})), n.d(t, "m", (function() {
				return $
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "p", (function() {
				return re
			})), n.d(t, "q", (function() {
				return ae
			})), n.d(t, "o", (function() {
				return oe
			})), n.d(t, "j", (function() {
				return ie
			})), n.d(t, "u", (function() {
				return ce
			})), n.d(t, "G", (function() {
				return de
			}));
			var s, r = n("./src/lib/stringInterpolate/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/models/Widgets/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const h = "discovery_unit",
				f = (e, t, n) => ({
					...m.defaults(e),
					source: h,
					screen: m.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(r.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				g = (e, t, n) => ({
					...f(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				x = (e, t) => {
					Object(b.a)(E(t)(e))
				},
				E = (e, t) => n => g(n, e, t),
				y = (e, t, n, s) => "unitName" in t ? f(e, t, s) : ((e, t, n) => ({
					...m.defaults(e),
					source: "search",
					screen: m.screen(e),
					search: n ? {
						...m.search(e, n),
						structureType: m.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				_ = (e, t, n, r, a) => ({
					...y(e, t, r, a),
					action: "view",
					noun: s.ITEM_POST,
					post: m.post(e, n)
				}),
				v = ({
					post: e,
					rawQuery: t,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? m.StructureType.PromotedTrend : m.StructureType.Trending
				});
			var O;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(O || (O = {}));
			const C = (e, t, n) => {
					Object(b.a)(S(e, t, n, o.c.CLICK))
				},
				j = (e, t, n) => {
					Object(b.a)(S(e, t, n, o.c.VIEW))
				},
				S = (e, t, n, s) => {
					const r = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...m.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: v(t),
						discoveryUnit: n === O.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: m.actionInfo(e, {
							paneName: n,
							position: r
						}),
						search: {
							originPageType: e.platform.currentPage ? m.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: m.StructureType.Trending,
							queryId: s === o.c.CLICK ? Object(i.c)(i.a.SearchResults) : void 0
						}
					}
				},
				k = (e, t, n, s, r, a, i) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(c.e)(e, n, s, r, a, t),
						action: o.c.VIEW,
						noun: i ? "ad" : "post"
					})
				},
				I = (e, t, n, s) => {
					Object(b.a)(_(e, t, n, s))
				},
				P = (e, t, n, s) => r => _(r, e, t, n, s),
				T = (e, t, n, r) => {
					const a = y(e, t, r);
					Object(b.a)({
						...a,
						...Object(p.b)(e, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				w = (e, t) => {
					Object(b.a)({
						...f(e, t),
						source: h,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				N = (e, t, n, s) => {
					Object(b.a)(L(t, n, s)(e))
				},
				L = (e, t, n, r) => a => {
					return {
						...y(a, e, n, r),
						source: h,
						action: o.c.CLICK,
						noun: s.ITEM_POST,
						post: m.post(a, t)
					}
				},
				A = (e, t, n, s) => r => a => Object(c.e)(a, r, e, t, n, s),
				B = (e, t, n, s) => r => a => Object(c.d)(a, e, t, void 0, n, r, s),
				D = (e, t, n, s) => r => a => ({
					...Object(c.e)(a, r, e, t, n, s),
					noun: "ad"
				}),
				R = (e, t) => n => r => ({
					...e ? f(r, e, t) : {},
					source: h,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: m.post(r, n)
				}),
				F = (e, t, n, s) => {
					Object(b.a)(M(t, n, s)(e))
				},
				M = (e, t, n, s) => r => {
					const a = Object(u.c)(r, {
							postId: t
						}),
						i = a ? Object(p.b)(r, a) : void 0;
					return {
						...y(r, e, n, s),
						...i,
						source: h,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: m.post(r, t)
					}
				},
				U = (e, t, n) => s => r => {
					const a = Object(u.c)(r, {
							postId: t
						}),
						i = a ? Object(p.b)(r, a) : void 0;
					return {
						...y(r, e, void 0, n),
						...i,
						source: h,
						action: o.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: m.post(r, t)
					}
				},
				H = (e, t, n) => {
					const s = y(e, t);
					Object(b.a)({
						...s,
						...Object(p.b)(e, n),
						source: "search",
						action: o.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				W = (e, t, n, s, r, a) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(c.d)(e, t, n, s, r, void 0, a)
					})
				},
				V = (e, t, n) => {
					const s = y(e, t);
					Object(b.a)({
						...s,
						...Object(p.b)(e, n),
						source: h,
						action: o.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				q = (e, t) => n => {
					const s = Object(l.j)(t);
					return {
						...f(n, e, t),
						...Object(p.b)(n, s),
						source: h,
						action: o.c.CLICK,
						noun: "title_subreddit"
					}
				},
				K = (e, t) => n => ({
					...f(n, e, t),
					action: "status",
					actionInfo: m.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				G = (e, t, n) => s => ({
					...f(s, e, n),
					action: "status",
					actionInfo: m.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				z = (e, t) => n => ({
					...f(n, e, t),
					action: "click",
					noun: "close"
				}),
				J = (e, t, n) => s => ({
					...y(s, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				Y = (e, t) => n => ({
					...f(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				Z = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Q = (e, t, n) => m.actionInfo(e, {
					position: n
				}),
				X = (e, t, n) => {
					const s = Z();
					return e => ({
						...g(e, s),
						actionInfo: Q(e, 0, n),
						subreddit: m.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const s = Z();
					return e => ({
						..._(e, s, t),
						actionInfo: Q(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const r = Z();
					return e => ({
						...f(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: h,
						action: o.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const r = Z();
					return e => ({
						...f(e, r),
						actionInfo: Q(e, 0, n),
						post: m.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				ne = (e, t, n, r) => {
					const a = Z();
					return e => ({
						...f(e, a),
						actionInfo: Q(e, 0, r),
						subreddit: m.subredditById(e, n) || null,
						post: m.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, n) => {
					const r = Z();
					return e => ({
						...f(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				re = (e, t, n, r) => {
					const a = Z();
					return e => ({
						...f(e, a),
						actionInfo: Q(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						post: r ? m.post(e, r) : null,
						source: h,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ae = (e, t, n, r) => {
					const a = Z();
					return e => ({
						...f(e, a),
						actionInfo: Q(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						post: r ? m.post(e, r) : null,
						source: h,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				oe = (e, t, n) => {
					const r = Z();
					return e => ({
						...f(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ie = (e, t, n) => {
					const r = Z();
					return e => ({
						...f(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ce = (e, t) => n => ({
					...f(n, e),
					...t && Object(p.b)(n, t),
					source: h,
					action: o.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					...f(t, e),
					source: h,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			}));
			const s = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				a = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				o = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				i = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...r(t)
				}),
				o = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "t", (function() {
				return I
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "m", (function() {
				return F
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "v", (function() {
				return q
			})), n.d(t, "g", (function() {
				return K
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/media/index.ts"),
				o = n("./src/reddit/models/PostCreationForm/index.ts"),
				i = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/postDraft.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/telemetry/index.ts"),
				m = n("./src/telemetry/models/PostComposer.ts"),
				p = n("./src/telemetry/models/PostDraft.ts");
			const b = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				h = e => ({
					source: "post_composer",
					action: s.c.CLICK,
					...d.defaults(e),
					screen: d.screen(e),
					correlationId: Object(r.c)(r.a.PostComposer)
				}),
				f = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === o.h.MARKDOWN ? "markdown" : "rte"
				},
				g = e => {
					Object(u.a)({
						noun: "cancel",
						...h(e)
					})
				},
				x = e => {
					Object(u.a)({
						noun: "discard",
						...h(e)
					})
				},
				E = e => {
					Object(u.a)({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e),
						...h(e),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				y = e => {
					Object(u.a)({
						noun: "subreddit_selector",
						...h(e)
					})
				},
				_ = (e, t) => {
					Object(u.a)({
						noun: "post_type_selector",
						postComposer: {
							type: b[t]
						},
						...h(e)
					})
				},
				v = () => e => ({
					noun: "add_option",
					...h(e)
				}),
				O = () => e => ({
					noun: "voting_length",
					...h(e)
				}),
				C = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(u.a)({
						noun: t,
						...h(e)
					}) : Object(u.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						...h(e)
					})
				},
				j = (e, t, n) => {
					Object(u.a)({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...f(e, t)
						},
						post: n ? d.post(e, n) : null,
						...h(e)
					})
				},
				S = (e, t) => {
					const n = t === o.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(u.a)({
						noun: n,
						...h(e)
					})
				},
				k = (e, t) => {
					Object(u.a)({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...f(e, t)
						},
						...h(e)
					})
				},
				I = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(u.a)({
						...h(e),
						noun: "media",
						action: s.c.REJECT,
						actionInfo: {
							...d.actionInfo(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				P = (e, t) => {
					t.forEach(t => {
						const n = Object(a.f)(t.type);
						n && Object(u.a)({
							...h(e),
							action: s.c.DRAG,
							noun: n
						})
					})
				},
				T = (e, t, n) => {
					Object(u.a)({
						...h(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				w = (e, t, n) => {
					Object(u.a)({
						...h(e),
						noun: n,
						action: Object(m.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				N = e => B("input", e),
				L = () => B("add"),
				A = () => B("remove"),
				B = (e, t) => n => ({
					...h(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: b.imageOnly
					},
					action: s.c.CLICK
				}),
				D = e => {
					Object(u.a)({
						...h(e),
						noun: "hide_oc_description",
						action: s.c.CLICK
					})
				},
				R = (e, t) => {
					if (t) {
						const n = d.subredditById(e, t);
						if (n) return {
							subreddit: n
						};
						const s = d.profileById(e, t);
						if (s) return {
							profile: s
						}
					}
				},
				F = (e, t) => {
					const {
						draftId: n,
						destSubreddit: s
					} = t, r = Object(l.i)(e), a = Object(c.d)(e, {
						draftId: n
					}), o = {
						authorId: r ? r.id : void 0,
						createdTimestamp: a ? a.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case i.b.Link:
							o.type = p.DraftType.Link, o.urlLength = t.body.length;
							break;
						case i.b.Markdown:
							o.type = p.DraftType.Self, o.bodyTextLength = t.body.length;
							break;
						case i.b.RichText:
							o.type = p.DraftType.RichText, t.documentStats && (o.bodyTextLength = t.documentStats.textLength, o.numberRteImages = t.documentStats.rteImagesCount, o.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case i.b.Image:
							o.type = p.DraftType.Image;
							break;
						case i.b.Video:
							o.type = p.DraftType.Video
					}
					return {
						postDraft: o,
						...R(e, s.id)
					}
				},
				M = (e, t) => {
					const n = Object(l.i)(e),
						s = {
							authorId: n ? n.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case i.b.Link:
							s.type = p.DraftType.Link, s.urlLength = (t.body || "").length;
							break;
						case i.b.Markdown:
							s.type = p.DraftType.Self, s.bodyTextLength = (t.body || "").length;
							break;
						case i.b.RichText:
							s.type = p.DraftType.RichText
					}
					return {
						postDraft: s,
						...R(e, t.subredditId)
					}
				},
				U = (e, t) => {
					Object(u.a)({
						noun: "draft_load",
						...h(e),
						...F(e, t)
					})
				},
				H = (e, t) => {
					Object(u.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...h(e),
						...F(e, t)
					})
				},
				W = (e, t) => {
					Object(u.a)({
						noun: "draft_delete",
						...h(e),
						...M(e, t)
					})
				},
				V = e => {
					Object(u.a)({
						...h(e),
						noun: "social_connect_link",
						action: s.c.CLICK
					})
				},
				q = (e, t) => {
					Object(u.a)({
						...h(e),
						noun: "twitter_share_checkbox",
						action: Object(m.getToggleAction)(t)
					})
				},
				K = (e, t, n) => {
					Object(u.a)({
						...h(e),
						...F(e, t),
						noun: "draft_share",
						action: n ? s.c.ENABLE : s.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => ({
					...r.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: {
						...r.subredditPowerups(e),
						freeCount: t,
						paidCount: n
					}
				}),
				o = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...a(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				i = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...a(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...a(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...a(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = (e, t) => n => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...a(n, e, t)
				}),
				u = (e, t) => n => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...a(n, e, t)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...a(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...a(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				b = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...a(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				h = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...a(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				f = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...a(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				a = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				o = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				i = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => r => ({
					...Object(s.defaults)(r),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(r, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				l = e => ({
					...Object(s.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				u = e => t => ({
					...Object(s.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				m = ({
					targetUserId: e
				}) => t => ({
					...Object(s.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "G", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "C", (function() {
				return p
			})), n.d(t, "z", (function() {
				return b
			})), n.d(t, "D", (function() {
				return h
			})), n.d(t, "B", (function() {
				return f
			})), n.d(t, "A", (function() {
				return g
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "F", (function() {
				return I
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "E", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "m", (function() {
				return M
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "h", (function() {
				return H
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const i = (e, t) => {
					if (t) {
						const n = o.media(e, t.post.id),
							s = o.post(e, t.post.id),
							r = o.subreddit(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === a.a.LIVE ? n.type = "stream_live" : s === a.a.VOD ? n.type = "stream_vod" : s === a.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || n.chatState === r.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === a.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: o ? r.a.None : r.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(n, e),
					actionInfo: o.actionInfo(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...i(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				f = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				g = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				x = (e, t, n, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t),
					actionInfo: o.actionInfo(r, {
						referralId: s
					})
				}),
				E = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				y = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				_ = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				v = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				C = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...i(n, e)
				}),
				j = e => t => {
					const n = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, n)
					}
				},
				S = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, n),
					...i(s, t)
				}),
				k = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				I = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t),
					...i(t, e)
				}),
				P = e => e => {
					const t = i(e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e),
						...t
					}
				},
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.subreddit(t)
				}),
				N = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...i(n, e)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...i(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...i(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...i(n, e)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				M = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				}),
				H = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return C
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "n", (function() {
				return M
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "w", (function() {
				return q
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "u", (function() {
				return J
			})), n.d(t, "v", (function() {
				return Y
			})), n.d(t, "h", (function() {
				return Z
			}));
			var s = n("./node_modules/lodash/pick.js"),
				r = n.n(s),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makePostDraftPageKey/index.ts"),
				i = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = n("./src/reddit/helpers/routeKey/index.ts"),
				l = n("./src/reddit/helpers/trackers/postComposer.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/Comment/index.ts"),
				p = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				h = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/lib/makePostCreationPageKey/index.ts"),
				x = n("./src/lib/makeSearchKey/index.ts"),
				E = n("./src/reddit/helpers/correlationIdTracker.ts"),
				y = n("./src/reddit/helpers/trackers/searchResults.ts"),
				_ = n("./src/reddit/selectors/postDraft.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/telemetry/index.ts");
			const C = (e, t, n, s, l, b) => {
					const {
						route: h
					} = e, {
						name: f
					} = h.meta;
					if (!f) return;
					const E = t.platform.currentPage;
					switch (f) {
						case a.Db.COMMENTS: {
							const {
								partialCommentId: r,
								partialPostId: a
							} = e.match.params, o = Object(p.r)(a), i = Object(d.a)(e, t, t.posts.models[o]);
							if (!i) return;
							const l = r && Object(m.f)(r),
								{
									sortToUse: u
								} = Object(c.a)(t, o),
								b = !0;
							Object(O.a)(T(i, o, l, n, s, u, b)(t));
							break
						}
						case a.Db.INDEX:
						case a.Db.LISTING:
						case a.Db.MULTIREDDIT:
						case a.Db.SUBREDDIT: {
							const r = Object(d.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: o,
								queryParams: i
							} = e.match, {
								sort: c = (r.sort ? r.sort : a.P.HOT)
							} = o, l = i.t;
							Object(O.a)(j(r.listingKey, c, n, s, l)(t));
							break
						}
						case a.Db.TOPIC: {
							const r = Object(d.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: o
							} = e.match, i = r.sort ? r.sort : a.Q, {
								sort: c = i
							} = o;
							Object(O.a)(j(r.listingKey, c, n, s)(t));
							break
						}
						case a.Db.PROFILE_OVERVIEW: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							const {
								params: o,
								queryParams: i
							} = e.match, {
								sort: c = a.vb
							} = o, l = i.t;
							Object(O.a)(S(r, c, n, s, l)(t));
							break
						}
						case a.Db.PROFILE_POSTS: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = a.vb,
								t: c = a.wb
							} = o;
							Object(O.a)(k(r, i, n, s, c)(t));
							break
						}
						case a.Db.PROFILE_COMMENTS: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = a.vb,
								t: c = a.wb
							} = o;
							Object(O.a)(I(r, i, n, s, c)(t));
							break
						}
						case a.Db.PROFILE_PRIVATE: {
							const r = Object(d.d)(e, t);
							if (!r) return;
							Object(O.a)(P(r)(s, n)(t));
							break
						}
						case a.Db.PROFILE_MODERATION:
							b && N(t, !0);
							break;
						case a.Db.SETTINGS: {
							const r = e;
							Object(O.a)(W(n, s)(t)), r.match.params.page === a.Qb.Profile && Object(u.j)(t);
							break
						}
						case a.Db.POST_CREATION:
							if (b && l) {
								const e = Object(g.a)(l);
								Object(O.a)(w(e, n, s)(t))
							}
							break;
						case a.Db.POST_DRAFT: {
							const {
								draftId: r
							} = e.match.params, a = Object(o.a)(e.match.params);
							if (!a) return;
							D(t, a, r, n, s);
							break
						}
						case a.Db.SUBREDDIT_WIKI:
							Object(O.a)(G(n, s)(t));
							break;
						case a.Db.COINS:
							Object(O.a)(R(n, s)(t)), Object(O.a)(F()(t));
							break;
						case a.Db.PREMIUM:
							Object(O.a)(M(n, s)(t)), Object(O.a)(U()(t));
							break;
						case a.Db.APPEAL:
							Object(O.a)(H(n, s)(t));
							break;
						case a.Db.INBOX_PAGES:
							b && B(t);
							break;
						case a.Db.MODERATION_PAGES:
							b && L(t, !0, l ? l.subredditName : null, l ? l.profileName : null);
							break;
						case a.Db.COLLECTION_COMMENTS:
							b && Y(t, !0);
							break;
						case a.Db.MODQUEUE_PAGES:
							b && A(t, l ? l.subredditName : null, l ? l.profileName : null);
							break;
						case a.Db.SUBREDDIT_LEADERBOARD:
							b && Object(O.a)(K()(t));
							break;
						case a.Db.SEARCH_RESULTS:
							if (b) {
								const a = Object(d.e)(e);
								if (!a) return;
								Object(O.a)(J(a, Object(x.c)(r()(E && E.queryParams || {}, i.t)), n, s, E)(t))
							}
							break;
						case a.Db.PUBLIC_ACCESS_NETWORK:
							b && Object(O.a)(V()(t));
							break;
						case a.Db.GEOTAGGING:
							b && Object(O.a)(z()(t));
							break;
						case a.Db.SUBREDDIT_CREATION:
							b && Object(O.a)(q()(t));
							break;
						case a.Db.MOD_LISTING:
							b && Z(t, !0)
					}
				},
				j = (e, t, n, s, r, a) => o => {
					const {
						api: i
					} = o.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(o),
						actionInfo: v.actionInfo(o, {
							success: c
						}),
						customFeed: v.customFeed(o),
						listing: v.listing(o, e, {
							sort: t,
							sortTime: r
						}),
						subreddit: v.subreddit(o),
						timer: v.timer(n, s),
						userSubreddit: v.userSubreddit(o),
						adblock: v.adblock(o),
						postFlair: {
							title: a
						}
					}
				},
				S = (e, t, n, s, r) => a => {
					const o = v.listing(a, e);
					o && (o.sort = t, r && (o.sortTime = r));
					const {
						api: i
					} = a.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(a),
						actionInfo: v.actionInfo(a, {
							success: c
						}),
						profile: v.profile(a),
						snoovatar: v.snoovatar(a),
						subreddit: v.subreddit(a),
						timer: v.timer(n, s),
						userSubreddit: v.userSubreddit(a),
						adblock: v.adblock(a)
					}
				},
				k = (e, t, n, s, r) => a => {
					const o = v.listing(a, e);
					o && (o.sort = t, r && (o.sortTime = r));
					const {
						api: i
					} = a.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(a),
						actionInfo: v.actionInfo(a, {
							success: c
						}),
						profile: v.profile(a),
						subreddit: v.subreddit(a),
						timer: v.timer(n, s),
						userSubreddit: v.userSubreddit(a),
						adblock: v.adblock(a)
					}
				},
				I = (e, t, n, s, r) => a => {
					const o = v.profileComments(a, e);
					o && (o.sort = t, r && (o.sortTime = r));
					const {
						api: i
					} = a.profileCommentsPage, c = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(a),
						actionInfo: v.actionInfo(a, {
							success: c
						}),
						profile: v.profile(a),
						subreddit: v.subreddit(a),
						timer: v.timer(n, s),
						userSubreddit: v.userSubreddit(a),
						adblock: v.adblock(a)
					}
				},
				P = e => (t, n) => s => {
					const r = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(s),
						actionInfo: v.actionInfo(s, {
							success: r
						}),
						profile: v.profile(s),
						subreddit: v.subreddit(s),
						timer: v.timer(n, t),
						userSubreddit: v.userSubreddit(s),
						adblock: v.adblock(s)
					}
				},
				T = (e, t, n, s, r, a, o) => i => {
					const {
						api: c
					} = i.pages.comments, d = !c.error[e] && !c.pending[e], l = Object(b.c)(i, {
						postId: t,
						isForceSelected: o
					}), u = {
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(i),
						actionInfo: v.actionInfo(i, {
							success: d,
							reason: l || void 0
						}),
						post: v.post(i, t),
						profile: v.profile(i),
						subreddit: v.subreddit(i),
						timer: v.timer(s, r),
						userSubreddit: v.userSubreddit(i),
						adblock: v.adblock(i),
						postEvent: v.postEventI13nSelector(i, {
							postId: t
						}),
						postCollection: v.postCollectionI13nSelector(i, {
							postId: t
						}),
						listing: v.listing(i, void 0, {
							sort: a
						})
					};
					return n && (u.comment = v.comment(i, n)), u
				},
				w = (e, t, n) => s => {
					const r = s.creations.api.page.fetched[e],
						a = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(s),
						actionInfo: v.actionInfo(s, {
							success: r
						}),
						post: a ? v.post(s, a) : void 0,
						subreddit: v.subreddit(s),
						timer: v.timer(t, n),
						userSubreddit: v.userSubreddit(s),
						adblock: v.adblock(s)
					}
				},
				N = (e, t) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(e),
						actionInfo: v.actionInfo(e, {
							success: t
						})
					})
				},
				L = (e, t, n, s) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(e),
						actionInfo: v.actionInfo(e, {
							success: t
						}),
						profile: v.profileById(e, Object(h.m)(e, s)),
						subreddit: v.subredditById(e, Object(f.F)(e, n)),
						userSubreddit: v.userSubreddit(e),
						adblock: v.adblock(e)
					})
				},
				A = (e, t, n) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(e),
						profile: v.profileById(e, Object(h.m)(e, n)),
						subreddit: v.subredditById(e, Object(f.F)(e, t)),
						userSubreddit: v.userSubreddit(e),
						adblock: v.adblock(e)
					})
				},
				B = e => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(e),
						actionInfo: v.actionInfo(e)
					})
				},
				D = (e, t, n, s, r) => {
					const a = e.creations.api.page.pending[t],
						o = !e.creations.api.page.error[t] && !a && !!n,
						i = Object(_.h)(e, n);
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(e),
						actionInfo: v.actionInfo(e, {
							success: o
						}),
						subreddit: v.subreddit(e),
						timer: v.timer(s, r),
						userSubreddit: v.userSubreddit(e),
						adblock: v.adblock(e),
						...i ? Object(l.m)(e, i) : {}
					})
				},
				R = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(E.c)(E.a.GoldPayment),
					...v.defaults(n),
					timer: v.timer(e, t),
					adblock: v.adblock(n)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v.defaults(e)
				}),
				M = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(E.c)(E.a.GoldPayment),
					...v.defaults(n),
					timer: v.timer(e, t),
					adblock: v.adblock(n)
				}),
				U = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v.defaults(e)
				}),
				H = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...v.defaults(n),
					timer: v.timer(e, t)
				}),
				W = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v.defaults(n),
					timer: v.timer(e, t)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: v.subreddit(e),
					...v.defaults(e)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v.defaults(e)
				}),
				K = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...v.defaults(e)
				}),
				G = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v.defaults(n),
					customFeed: v.customFeed(n),
					subreddit: v.subreddit(n),
					timer: v.timer(e, t),
					userSubreddit: v.userSubreddit(n),
					adblock: v.adblock(n)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v.defaults(e)
				}),
				J = (e, t, n, s, r, o) => i => {
					let c = !0;
					if (t.type.indexOf(a.Pb.Posts) > -1) {
						const {
							api: t
						} = i.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(a.Pb.Subreddits) > -1 || t.type.indexOf(a.Pb.Users) > -1) {
						const {
							api: t
						} = i.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					const d = v.paneName(i, r),
						l = v.structureType(i, r),
						u = i.platform.currentPage && i.platform.currentPage.urlParams && i.platform.currentPage.urlParams.subredditName ? v.subredditByName(i, i.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...y.c(i, t),
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(i),
						actionInfo: v.actionInfo(i, {
							success: c,
							paneName: d
						}),
						timer: v.timer(n, s),
						search: {
							...v.search(i, t, !0, r || void 0),
							...!!o && {
								originElement: o
							},
							queryId: Object(E.c)(E.a.SearchResults),
							structureType: l,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						},
						...!!o && {
							correlationId: Object(E.c)(E.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !i.user.prefs.over18
						}
					}
				},
				Y = (e, t) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(e),
						actionInfo: v.actionInfo(e, {
							success: t
						})
					})
				},
				Z = (e, t) => {
					Object(O.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v.defaults(e),
						actionInfo: v.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "b", (function() {
				return B
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/posts.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				l = "search_results_best",
				u = (e, t) => {
					const n = c.subreddit(e);
					return {
						screen: c.screen(e),
						subreddit: n && t && t.restrict_sr ? n : null
					}
				},
				m = (e, t) => n => {
					const s = t;
					return s.structureType = "related", {
						action: e,
						correlationId: Object(o.c)(o.a.SearchResults),
						noun: "related_search",
						source: d,
						search: c.search(n, s),
						...u(n)
					}
				},
				p = (e, t, n, s) => r => ({
					...u(r, n),
					source: d,
					action: "click",
					noun: t,
					actionInfo: c.actionInfo(r, s ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: s ? c.discoveryUnit(s) : null,
					search: c.search(r, n),
					post: c.post(r, e),
					media: c.media(r, e)
				}),
				b = (e, t, n, s, r) => a => ({
					...I(a, e, t, r, s, n),
					noun: "ad"
				}),
				h = (e, t, n) => r => {
					let a = !0;
					if (t.type.indexOf(s.Pb.Posts) > -1) {
						const {
							api: t
						} = r.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Pb.Subreddits) > -1 || t.type.indexOf(s.Pb.Users) > -1) {
						const {
							api: t
						} = r.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					return {
						...u(r, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: c.actionInfo(r, {
							success: a,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: c.discoveryUnit(n),
						search: c.search(r, t)
					}
				},
				f = (e, t) => n => ({
					action: "view",
					actionInfo: c.actionInfo(n),
					metaSearch: c.metaSearch(t),
					noun: e,
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				g = (e, t) => n => ({
					action: "click",
					actionInfo: c.actionInfo(n),
					noun: e,
					metaSearch: c.metaSearch(t),
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				x = (e, t, n) => s => ({
					source: d,
					action: "click",
					noun: c.SearchDropdownNouns.Recent,
					actionInfo: c.actionInfo(s, {
						paneName: "subreddit_dropdown",
						position: n + 1
					}),
					search: {
						query: e,
						originPageType: s.platform.currentPage ? c.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
						queryId: Object(o.c)(o.a.SearchResults)
					},
					...y(s, t)
				}),
				E = (e, t, n, s) => r => {
					const a = s.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: c.SearchDropdownNouns.Typeahead,
						actionInfo: c.actionInfo(r, {
							position: n + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: r.platform.currentPage ? c.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0,
							queryId: Object(o.c)(o.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: a.map(e => e.id),
							numberSubreddits: a.length
						},
						...y(r, t)
					}
				},
				y = (e, t) => {
					const n = t.isSubreddit && t.id ? c.subredditForSearch(e, t.id) : void 0,
						s = t.isProfile && t.id ? c.profileForSearch(e, t.id) : void 0,
						r = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? n || r : void 0,
						profile: t.isProfile ? s || r : void 0
					}
				},
				_ = (e, t, n) => s => ({
					action: t,
					actionInfo: c.actionInfo(s),
					noun: e,
					screen: c.screen(s),
					search: c.search(s, n),
					source: l
				});
			var v;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(v || (v = {}));
			const O = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				C = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				j = (e, t) => n => ({
					action: "click",
					correlationId: Object(o.c)(o.a.SearchResults),
					noun: e ? s.Ob.ToSubreddit : s.Ob.ToGlobal,
					search: c.search(n, t),
					source: d
				}),
				S = (e, t, n, s) => r => ({
					...u(r, n),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(r, {
						relativePosition: c.getRelativePostOrder(r, t, e)
					}),
					search: {
						...c.search(r, n),
						...!!s && {
							originElement: s
						}
					},
					post: c.post(r, t)
				}),
				k = (e, t, n, s, r) => a => I(a, e, t, n, s, r),
				I = (e, t, n, s, r, i) => {
					const l = c.paneName(e, s),
						u = c.postRelativePosition(e, t, r, i),
						m = c.amountOfElementsBeforePost(e, n, r, i, l),
						p = null !== u ? m + u : null,
						b = c.structureType(e, s),
						h = {
							...c.search(e, n, !0, s || void 0),
							structureType: b,
							queryId: Object(o.c)(o.a.SearchResults)
						};
					return {
						source: d,
						action: a.c.CLICK,
						noun: "post",
						actionInfo: s ? {
							pageType: c.getPageTypeFromCurrentPage(s),
							paneName: l,
							position: p,
							relativePosition: u
						} : c.actionInfo(e, {
							paneName: l,
							position: p,
							relativePosition: u
						}),
						search: h,
						post: c.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: i ? c.discoveryUnit(i) : null
					}
				},
				P = (e, t, n, s, r, a) => o => T(o, e, t, n, s, r, a),
				T = (e, t, n, s, l, u, m) => {
					if (!s) {
						s = Object(i.D)(e, {
							postId: u
						}).belongsTo
					}
					const p = c.paneName(e, n);
					let b, h;
					if (u) {
						b = c.postRelativePosition(e, u, l, m);
						const n = c.amountOfElementsBeforePost(e, t, l, m, p);
						h = null !== b ? n + b : null
					} else {
						b = c.communityRelativePosition(e, s.id, l, m);
						const t = c.amountOfElementsBeforeCommunity(e, l, m);
						h = null !== b ? t + b : null
					}
					const f = c.structureType(e, n),
						g = {
							...c.search(e, t, !0, n || void 0),
							structureType: f,
							queryId: Object(o.c)(o.a.SearchResults)
						};
					return {
						source: d,
						action: a.c.CLICK,
						noun: s.type,
						search: g,
						subreddit: s.type === r.a.SUBREDDIT ? c.subredditForSearch(e, s.id) : void 0,
						profile: s.type === r.a.PROFILE ? c.profileForSearch(e, s.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: m ? c.discoveryUnit(m) : null,
						actionInfo: n ? {
							pageType: c.getPageTypeFromCurrentPage(n),
							paneName: p,
							position: h,
							relativePosition: b
						} : c.actionInfo(e, {
							paneName: p,
							position: h,
							relativePosition: b
						}),
						post: u ? c.post(e, u) : void 0
					}
				},
				w = (e, t) => n => ({
					...u(n, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: {
						...c.search(n, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: c.subreddit(n)
				}),
				N = (e, t, n, s, r) => o => ({
					...I(o, t, n, s, e, r),
					action: a.c.VIEW
				}),
				L = (e, t, n, s) => r => ({
					...u(r, n),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(r, {
						relativePosition: c.getRelativePostOrder(r, t, e),
						position: c.getAbsoluteOrder(r, t, e)
					}),
					search: {
						...c.search(r, n),
						...!!s && {
							originElement: s
						}
					},
					post: c.post(r, t)
				}),
				A = (e, t, n) => s => ({
					...u(s),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(s),
					search: {
						...c.search(s, t),
						...!!n && {
							originElement: n
						}
					},
					[e]: c[e](s)
				}),
				B = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...r.defaults(t),
					actionInfo: r.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...r.defaults(a),
					actionInfo: r.actionInfo(a, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...r.defaults(e),
					actionInfo: r.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				c = e => t => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...r.defaults(t),
					actionInfo: r.actionInfo(t, {
						reason: e
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return C
			}));
			var s, r, a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: a.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				b = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.f.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, {
					renderingObjectInfo: t,
					pageLayer: n
				}) => {
					if (t && (Object(i.b)(t) || Object(c.b)(t))) return Object(i.b)(t) ? m.SourceElement.Comment : Object(o.w)(n) ? m.SourceElement.PostDetail : Object(o.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(c.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const r = Object(c.b)(n) ? "postId" : "commentId",
						a = {
							url: `/r/${s}/`,
							sourceElement: h(0, t),
							subredditName: s,
							[r]: n.id
						},
						o = Object(l.A)(e, {
							subredditName: s
						});
					return o ? {
						outbound: {
							...a,
							url: o.url,
							subredditId: o.id
						}
					} : {
						outbound: {
							...a
						}
					}
				},
				g = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(c.b)(n) && !Object(i.b)(n)) return {};
					const s = Object(c.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
						...f(e, t)
					}
				},
				x = e => t => ({
					...p(t),
					...g(t, e)
				}),
				E = e => t => ({
					...b(t),
					source: "global",
					action: a.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				y = (e, t) => n => ({
					...b(n),
					source: r.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				_ = (e, t) => n => ({
					...b(n),
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				v = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				C = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(d);
			const u = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return r.a.createElement("i", {
					className: Object(a.a)(e.className, Object(c.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || o.b.gold
					}
				})
			}, "CoinIcon", l.a);
			t.a = u
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				c = n.n(i);
			t.a = e => {
				const t = Object(a.a)();
				return r.a.createElement("i", {
					className: `${Object(o.b)(t?"message":"envelope",e.isFilled)} ${c.a.Envelope} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, r.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, r.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), r.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), r.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				cls1: "_27ZvSsL0zi1nAja8nD5wM8",
				cls3: "qXtY7I_GoiY3yZuQSiIxk",
				cls4: "_2CRPf4Bo0p7KCRDFYv6WzO",
				cls5: "_2dYeHLcTCSuVCgU8GN_pWV",
				cls7: "_3vSXIQsi-G_3bo41eaYRjh",
				cls6: "_1mQOm7u0X9LlZoCnM5HHkJ",
				cls8: "_3fxIhlHWNlaXwlNMXtCZ-x",
				cls9: "_1L0T9MQ7u60GxCoL3DFJ4Z",
				cls10: "_1xlX8IJ47jyoodC4L9co14"
			}
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/svgs/DownToChatAvatar/index.m.less"),
				o = n.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 60 60"
			}, e), r.a.createElement("g", null, r.a.createElement("g", {
				className: o.a.cls2
			}, r.a.createElement("path", {
				className: o.a.cls3,
				d: "M54.44-5.35A67.31,67.31,0,0,0,4,.77C-.47,3.27-4.7,6.36-7.69,10.5a20.47,20.47,0,0,0-3.52,7.88c-.5,2.47.23,5.13-.42,7.5-1.35,4.89-4.93,7.56-2.79,13.24,1.48,3.91,4.7,6.91,8.14,9.3,8.24,5.74,16.53,2.11,25.37-.67,2.62-.83,5.23-1.64,7.79-2.6C29.14,44.3,31,42.79,33.27,42a62.83,62.83,0,0,0,8.3-3.39c2.54-1.31,5-2.73,7.69-3.79,2.38-1,5.11-1.82,6.28-4.1a7.74,7.74,0,0,0,.55-4.13c-.39-4.63-2.17-9-4-13.32a40.17,40.17,0,0,0-2-4.36c-.7-1.23-1.82-2.26-2.42-3.52-1.1-2.3-1.37-5.4-2-7.87"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M48.81.61C39.94,7.54,37.18,9.26,25.05,16.13,29.21,19,45.38,26.28,53.92,29.28,42.46,33.81,12.15,41-1.85,44.74c3,1.76,8.22,7.79,10.8,10.14,4,3.65,8.39,9.47,14.32,9.42a60.26,60.26,0,0,0,18-2.54c8.83-2.84,17.6-7.09,23.31-14.39a29.94,29.94,0,0,0,1.2-35.32C64.61,10.32,63,7.79,61.09,6.94,59,6,55.46,6.22,53.16,6.16"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M20,30.71A9.26,9.26,0,0,0,24.77,36a4,4,0,0,1,1.48.85,2,2,0,0,1-.12,2.48,3.39,3.39,0,0,1-2.4,1.05C20.55,40.62,18,37.7,17,35"
			}), r.a.createElement("path", {
				d: "M17,35c.11.06.44.91,1,1.78A8.17,8.17,0,0,0,20,38.84a5.9,5.9,0,0,0,3.24,1.21A3,3,0,0,0,26,38.73a1.63,1.63,0,0,0,.09-1.2,1.46,1.46,0,0,0-.87-.79,12.78,12.78,0,0,1-1.4-.68,7.84,7.84,0,0,1-1.26-.92,9.52,9.52,0,0,1-2.69-4.38c.4.52.94,1.26,1.49,1.9s1.1,1.18,1.37,1.48a6.64,6.64,0,0,0,1.86,1.5c.64.37,1.57.59,2,1.41a2.25,2.25,0,0,1-.23,2.3,3.27,3.27,0,0,1-1.83,1.14,5.52,5.52,0,0,1-2,.08A6.16,6.16,0,0,1,20.74,40a7.49,7.49,0,0,1-2.5-2.24A8.31,8.31,0,0,1,17,35Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M5.87,46.65c3.07,2.59,7.08,2.88,9,.65s.91-6.13-2.16-8.72-7.08-2.88-9-.65"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M5.41,46.45a3.56,3.56,0,0,1-2-2.69,10.5,10.5,0,0,1,.08-3.49A49.24,49.24,0,0,1,4.83,34,17.67,17.67,0,0,1,7.46,28.7a7.51,7.51,0,0,1,1.11-1.4c2.33-2.22,6.24-2.2,9.1-1.16,1.81.66,1.81,2.12,1.85,4a22.8,22.8,0,0,1-3.69,13.5"
			}), r.a.createElement("path", {
				d: "M15.82,43.62c0-.23,1.08-1.83,1.86-3.9a21.21,21.21,0,0,0,1.37-5.9,31.42,31.42,0,0,0,.05-3.77C19,28.76,19,27.39,18,26.87a6.76,6.76,0,0,0-1.73-.59A11.13,11.13,0,0,0,14.41,26a8.46,8.46,0,0,0-3.61.55,5.48,5.48,0,0,0-2.38,1.8,30.74,30.74,0,0,0-1.72,2.7,13.79,13.79,0,0,0-1.23,2.83c-.29,1-.57,2-.82,3a34.3,34.3,0,0,0-1,5.53A5,5,0,0,0,4,44.75a3,3,0,0,0,1.44,1.54A2.91,2.91,0,0,1,3.61,45a5.42,5.42,0,0,1-.78-2.73,17.89,17.89,0,0,1,.47-4.49c.23-.89.48-1.75.74-2.6a25.31,25.31,0,0,1,.84-2.5A23.26,23.26,0,0,1,7.4,28.29a6.69,6.69,0,0,1,3.86-2.73,10.58,10.58,0,0,1,4.43-.19,12.31,12.31,0,0,1,2,.52,2.7,2.7,0,0,1,1.66,1.39,5.41,5.41,0,0,1,.4,2c0,.64,0,1.27,0,1.89a22.8,22.8,0,0,1-1,6.9,17.41,17.41,0,0,1-1.51,3.35A20.12,20.12,0,0,1,15.82,43.62Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M10.91,28.22a24.4,24.4,0,0,1,.94,2.63l-.25,0,0-3.11.35,0a10.52,10.52,0,0,0,1.83,4.62l-.44.21-.06-.16a15.52,15.52,0,0,1-.74-4.24l.7-.07A12.81,12.81,0,0,0,15.88,33l-.75.44a14,14,0,0,1-1.36-4.9l.89-.28.94,1.55,1.61,2.67L16.3,33a36.05,36.05,0,0,1-1.14-4.52l1-.28a21,21,0,0,0,2,4l-.82.42a18.77,18.77,0,0,1-.9-3.54l.77-.26a10.37,10.37,0,0,0,2,2.81l-.5.4a11.41,11.41,0,0,1-1.05-2.72L18,29a21,21,0,0,0,1.7,2.24,13.32,13.32,0,0,1-2-1.95l.29-.17a13.85,13.85,0,0,0,1.26,2.49l-.59.46a9.8,9.8,0,0,1-2.29-2.9l1-.32.14.81a16.84,16.84,0,0,0,.66,2.59l-.71.36a22.75,22.75,0,0,1-2-4.15l.53-.16A35.93,35.93,0,0,0,17,32.74l-.38.18-2.54-4.28.37-.12a13.27,13.27,0,0,0,1.27,4.68l-.36.22a13,13,0,0,1-2.67-5.2l.52,0a15.76,15.76,0,0,0,.69,4.26l-.51.24a10.5,10.5,0,0,1-1.68-4.08c0-.25-.1-.53-.13-.78l.49,0c-.06,1.18-.15,2.57-.23,3.11l-.21,0C11.18,29.33,11,28.52,10.91,28.22Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M3.23,34.05a4.89,4.89,0,0,1-.36-3.11,3.82,3.82,0,0,1,1.51-2.23A9.28,9.28,0,0,1,7,27.61c1.08-.33,4.74.59,5.06,1.91"
			}), r.a.createElement("path", {
				d: "M12,29.52a2.66,2.66,0,0,0-.88-.81,5.79,5.79,0,0,0-1.62-.61,8.19,8.19,0,0,0-2.14-.18,7.18,7.18,0,0,0-1,.31c-.35.13-.69.27-1,.42a3.82,3.82,0,0,0-2.12,2.47A5.56,5.56,0,0,0,3.33,34a2.38,2.38,0,0,1-.84-1.29,2.92,2.92,0,0,1-.13-1.37,4.44,4.44,0,0,1,1.71-2.64,8.54,8.54,0,0,1,2.44-1.12,2.85,2.85,0,0,1,1.22-.23,6.87,6.87,0,0,1,1.14.12,6.47,6.47,0,0,1,2,.66,3,3,0,0,1,.86.68A1.2,1.2,0,0,1,12,29.52Z"
			}), r.a.createElement("path", {
				d: "M33.11,8.69a1.12,1.12,0,0,1-.62.29,2.35,2.35,0,0,1-1.41-.18,10.13,10.13,0,0,1-2.31-1.75,15.24,15.24,0,0,0-1.32-1,3,3,0,0,0-.67-.33A3.76,3.76,0,0,0,26,5.53a2.73,2.73,0,0,0-2.45,1.25,7.65,7.65,0,0,0-1.28,5A4.77,4.77,0,0,0,23,14a3.39,3.39,0,0,0,1.54,1.23,2.65,2.65,0,0,1-2.41-.6,3.4,3.4,0,0,1-1.18-2,9.6,9.6,0,0,1,.81-4.89,5.25,5.25,0,0,1,3-3,3.88,3.88,0,0,1,3.69.94c.88.78,1.53,1.6,2.22,2.19A4,4,0,0,0,32,8.6,2.65,2.65,0,0,0,33.11,8.69Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M31,23.45c2.42-1.82,3.32-5.73,1.55-8.22-1.05-1.42-2.65-3-4.56-1.87"
			}), r.a.createElement("path", {
				d: "M28,13.36a1.62,1.62,0,0,1,1.2-.55,3.21,3.21,0,0,1,1.86.48,6.08,6.08,0,0,1,1.83,1.57,5.44,5.44,0,0,1,1.07,2.33,6.28,6.28,0,0,1-.59,4,5.42,5.42,0,0,1-2.26,2.37c.38-.87.87-2.13,1.13-2.53a5.16,5.16,0,0,0,1-2.64,4.64,4.64,0,0,0-.5-2.46,6.89,6.89,0,0,0-1.42-1.71,4.24,4.24,0,0,0-1.59-.93,3.43,3.43,0,0,0-1-.11A4.12,4.12,0,0,0,28,13.36Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M10.38,7.68c7.31-2.53,18.18,1.32,20.67,9,1.08,4.27.9,10.19-2.53,12.84C19.77,36.32-1.84,26.59,5,13.93"
			}), r.a.createElement("path", {
				d: "M5,13.94a4.44,4.44,0,0,1-.23.64l-.25.58-.24.77A9.27,9.27,0,0,0,4,20.23a9.85,9.85,0,0,0,2.09,4.48,15.11,15.11,0,0,0,3,2.79,21.66,21.66,0,0,0,10.81,3.74,14.5,14.5,0,0,0,5.76-.73,10.08,10.08,0,0,0,2.48-1.35,6.26,6.26,0,0,0,1.7-2.06A11.24,11.24,0,0,0,31,22.48a19.33,19.33,0,0,0-.34-4.81,9.91,9.91,0,0,0-2-4.11,13.61,13.61,0,0,0-3.28-3.06,16.91,16.91,0,0,0-3.84-2,19.08,19.08,0,0,0-4-1.06,16.86,16.86,0,0,0-7.2.39A14.78,14.78,0,0,1,18,6.69a17.43,17.43,0,0,1,6.54,2,15.24,15.24,0,0,1,5.83,5.65l.47.87.36.93a4.33,4.33,0,0,1,.28.93c.08.32.13.63.18.95a20.43,20.43,0,0,1,.26,3.72,11.81,11.81,0,0,1-2,6.79,7.54,7.54,0,0,1-2.67,2.14,11.17,11.17,0,0,1-3.11,1.08,19.94,19.94,0,0,1-11.83-1.65,15.78,15.78,0,0,1-7.82-6.94,9.27,9.27,0,0,1-.85-2.56,8.88,8.88,0,0,1,0-2.91A10.92,10.92,0,0,1,5,13.94Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M5.47,18.27a2.52,2.52,0,0,1-.57.46v-.18a2.68,2.68,0,0,1,.69.6l.09.11s-.07.07-.11.11l-.21.2-.22.2c-.09.09,0,.2.11.22l.28.11.7.27.79.31-.84.14a.69.69,0,0,0-.18,0,.72.72,0,0,0-.25.17l-.07.09.17,0,.13,0h.07l.09,0,.77.26,1,.33-1,.44c-.33.14-.27.19-.31.21l.06,0h0l.11,0,.93.36.86.33-.8.51-.14.09s0,0,0,0l1.19.35.71.2L9.15,25c-.1.15-.06.1-.08.11l0,0s0,0,0,0h0l.24.06c.35.08.68.14,1,.19l.52.08-.19.45c0,.07-.1.19-.12.21a.07.07,0,0,1,0,0l-.09.08a.43.43,0,0,0-.09.1l0,.06h.63a6,6,0,0,1,1,.08c-.31.07-.62.19-1,.3a15.8,15.8,0,0,1-1.72.39c0-.06,0-.07,0-.16l0-.22a2.22,2.22,0,0,1,.1-.41,2.38,2.38,0,0,1,.34-.51,1.42,1.42,0,0,0,.14-.22l0-.08.41.67a2.73,2.73,0,0,1-.49-.07l-1-.25L8,25.79c-.22-.05-.51-.08-.56-.15.24-.2.53-.46.73-.66a4,4,0,0,1,.32-.46l.18.45-.89-.29-1.06-.33-.51-.19c-.08,0,0,0,0-.08L6.38,24l.2-.19a5.93,5.93,0,0,1,.87-.62l0,.34-1-.38a10,10,0,0,1-1.17-.5c.59-.35.94-.87,1.36-1v.42l-.86-.3a6.78,6.78,0,0,1-1.11-.46l-.22-.12c0-.06.12-.13.17-.19a3.19,3.19,0,0,1,.4-.33,2.44,2.44,0,0,1,.51-.26,2.16,2.16,0,0,1,.53-.12l-.06.54-.72-.32c-.11-.06-.33-.14-.47-.23A.6.6,0,0,1,4.59,20c-.13-.38.79-.81.61-.78A1.28,1.28,0,0,0,5,18.94l-.22-.25-.06-.07.06,0A6.68,6.68,0,0,1,5.47,18.27Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M14.41,9.83C15,6.68,10.85,5.27,7.89,6.28c-4.72,1.16-5.22,10.26.6,9.54"
			}), r.a.createElement("path", {
				d: "M8.49,15.83a3.38,3.38,0,0,1-2,0,7.27,7.27,0,0,1-.75-.35c-.21-.17-.43-.34-.63-.52l-.46-.58c-.12-.19-.2-.38-.29-.53A6.29,6.29,0,0,1,5.87,6.7a4.64,4.64,0,0,1,1.49-.86,6.7,6.7,0,0,1,1.57-.4A6.78,6.78,0,0,1,12,5.76,4.29,4.29,0,0,1,14.3,7.48a2.85,2.85,0,0,1,.27,2.38,3.2,3.2,0,0,0-1-2A6.68,6.68,0,0,0,12.12,7a5.48,5.48,0,0,0-4.26-.4A4.32,4.32,0,0,0,5.06,9.1c-1,2.27-.52,4.79.89,5.88a4.64,4.64,0,0,0,.61.38,4.6,4.6,0,0,0,.76.29C7.84,15.78,8.33,15.79,8.49,15.83Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M33.24,5.42c-4-.29-4.62,6.08-.28,6.25C36.81,11.83,37,5.5,33.24,5.42Z"
			}), r.a.createElement("path", {
				d: "M33.24,5.42a2.17,2.17,0,0,1,1.67.41A3.4,3.4,0,0,1,36.18,8a3.79,3.79,0,0,1-.79,3.15,3,3,0,0,1-1.55.91,4.4,4.4,0,0,1-.88.1L32.11,12a3.24,3.24,0,0,1-2.3-1.81,3.81,3.81,0,0,1-.12-2.75,3.34,3.34,0,0,1,1.55-1.9,3.21,3.21,0,0,1,2-.3,4.63,4.63,0,0,0-1.7.89,5.56,5.56,0,0,0-.85,1.21,2.77,2.77,0,0,0,.35,3.33,2.51,2.51,0,0,0,1.5.71l.42.06.4,0a2.65,2.65,0,0,0,.75-.17A2.79,2.79,0,0,0,35.65,9a3.62,3.62,0,0,0-.5-2.38,2.81,2.81,0,0,0-1-.87l-.3-.16-.28-.08Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M16.13,19.35A2.7,2.7,0,0,1,14,16a3.25,3.25,0,0,1,3.21-2.54C21.33,13.66,19.73,20.06,16.13,19.35Z"
			}), r.a.createElement("path", {
				d: "M16.13,19.34a4.16,4.16,0,0,0,1.53-.27,3,3,0,0,0,1.43-1.56,3.28,3.28,0,0,0,0-2.59A2.19,2.19,0,0,0,17,13.76a3.09,3.09,0,0,0-2.77,2.78,2.49,2.49,0,0,0,.51,1.78,2.73,2.73,0,0,0,1.39.92,2.28,2.28,0,0,1-1.8-.64A2.35,2.35,0,0,1,13.57,17a3.82,3.82,0,0,1,2-3.33,3.11,3.11,0,0,1,3.32.23,2.45,2.45,0,0,1,.56.6,3.55,3.55,0,0,1,.29.74,3.37,3.37,0,0,1,0,1.48A3.57,3.57,0,0,1,18.43,19a2.37,2.37,0,0,1-1.31.49l-.34,0-.29,0Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M27,21.4c-.36-1,.07-4.84,2-3.82,1.28.7.19,4-.82,4.55C27.59,22.45,27.22,22,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M27,21.4c.08,0,.22.54.64.7s.83-.5,1-.76a6.26,6.26,0,0,0,.54-1.7A2.21,2.21,0,0,0,29,18.07c0-.08-.13-.11-.19-.16l-.28-.11a.59.59,0,0,0-.45.09A2.21,2.21,0,0,0,27.41,19a6.12,6.12,0,0,0-.31,2.4,2.86,2.86,0,0,1-.43-2.3,4.87,4.87,0,0,1,.61-1.23,1.28,1.28,0,0,1,1.2-.58,1.31,1.31,0,0,1,1,.69,2.24,2.24,0,0,1,.2,1.09A5.3,5.3,0,0,1,29.25,21a2.62,2.62,0,0,1-1.1,1.37.72.72,0,0,1-.53,0,.7.7,0,0,1-.4-.35A1.49,1.49,0,0,1,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M26.34,24.19a12.22,12.22,0,0,1-5.91-.48,7.19,7.19,0,0,1-2.56-1.88s-.17,2-.17,2.13c0,2.74,2.73,4.42,5,2.55.55-.46,1.67-1.5,2.19-2"
			}), r.a.createElement("path", {
				d: "M24.85,24.51a9,9,0,0,1-1.28,1.37,13.06,13.06,0,0,1-1.09,1,3.48,3.48,0,0,1-1.12.57A3,3,0,0,1,18,26.31a4,4,0,0,1-.74-1.77l0-.48c0-.17,0-.33,0-.47l.06-.91a5.79,5.79,0,0,1,.07-.76l.05-.15c0-.05.06,0,.09-.05l.16,0,.07,0h0l-.09-.25h0c0-.06,0-.17.07-.18a.44.44,0,0,1,.2.07l.26.25a7,7,0,0,0,2.2,1.69,8.15,8.15,0,0,0,2.08.62,21.63,21.63,0,0,0,3.79.22,7.62,7.62,0,0,1-2.15.62,5.55,5.55,0,0,1-2,0,8.76,8.76,0,0,1-2.31-.87,9.56,9.56,0,0,1-1-.66l-.43-.36c-.14-.13-.15-.16-.24-.25l-.16-.17a.27.27,0,0,0-.07-.08s0,.06,0,.1l0,.43a8.66,8.66,0,0,0-.07,1.35,3.18,3.18,0,0,0,1,2.21,2.58,2.58,0,0,0,2,.65,3.46,3.46,0,0,0,1.77-.88C23.35,25.56,24.6,24.68,24.85,24.51Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M19,39.36C12.27,41.12,3.41,42.68-3.4,44.22a48.19,48.19,0,0,0,10.83,9,5.38,5.38,0,0,0,1.68.65,5.09,5.09,0,0,0,3.5-1.07A27.16,27.16,0,0,0,18,47.76Q20.38,45,22.6,42.1"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M26.84,53.17a5.89,5.89,0,0,1-1.51-.63A2.4,2.4,0,0,1,24,50.1a2.1,2.1,0,0,1,1.21-1.28,6.69,6.69,0,0,1,1.77-.4,42.66,42.66,0,0,0,6.51-1.5c1-.3,1.48.1,1.87,1.06a3,3,0,0,1-.08,2.38c-1,2.21-3.9,2.87-6.12,3A7.19,7.19,0,0,1,26.84,53.17Z"
			}), r.a.createElement("path", {
				d: "M26.85,53.16a12.24,12.24,0,0,0,2.52.05,9.91,9.91,0,0,0,3.42-.88A5.13,5.13,0,0,0,34.45,51a3,3,0,0,0,.71-1.92,2.41,2.41,0,0,0-.21-1,1.67,1.67,0,0,0-.52-.76.92.92,0,0,0-.76,0l-1.09.34a37.62,37.62,0,0,1-3.84.93c-.63.12-1.27.21-1.89.29a5.35,5.35,0,0,0-1.62.39,1.39,1.39,0,0,0-.57,2.26A4.51,4.51,0,0,0,26.88,53a3.79,3.79,0,0,1-2.79-1.19,2.13,2.13,0,0,1-.58-1.68A1.88,1.88,0,0,1,24.16,49a3.44,3.44,0,0,1,1.63-.72c.55-.1,1.05-.12,1.55-.18,1-.12,1.94-.28,2.86-.47s1.8-.42,2.64-.67a4,4,0,0,1,1.34-.27,1.42,1.42,0,0,1,1.13.8,3.33,3.33,0,0,1,.36,2.48,4.14,4.14,0,0,1-1.28,2,7.48,7.48,0,0,1-3.85,1.55,9.11,9.11,0,0,1-2.17,0A5.72,5.72,0,0,1,26.85,53.16Z"
			}), r.a.createElement("path", {
				className: o.a.cls7,
				d: "M29.83,58c-.66,2.08.89,5,5.59,6.51,4.37,1.41,7.12-1.27,7.78-3.36s-1.64-3-5.4-4.18S30.48,55.9,29.83,58Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M42.73,62.91c.38-.17.38-.7.35-1.12-.16-2.17.54-4.3,1.05-6.42a35.6,35.6,0,0,0,.75-4.1A5.9,5.9,0,0,0,38,44.81a8.09,8.09,0,0,0-4.88,2.93A13.74,13.74,0,0,0,30.56,53c-.5,1.84-1.62,6-1,8"
			}), r.a.createElement("path", {
				d: "M29.56,61a2.86,2.86,0,0,1-.29-1.19,12.94,12.94,0,0,1,.13-2.54,51.74,51.74,0,0,1,1.12-5.18A11.88,11.88,0,0,1,34,46.19a8.46,8.46,0,0,1,3.19-1.76,6.94,6.94,0,0,1,3.62,0,6.25,6.25,0,0,1,4.62,7.1l-.52,2.65c-.29,1.74-.9,3.29-1.22,4.76a13.73,13.73,0,0,0-.33,2.11c0,.35,0,.66,0,1a1.78,1.78,0,0,1-.1.55.74.74,0,0,1-.41.44.91.91,0,0,0,.27-1c-.06-.33-.15-.69-.19-1.07a11.15,11.15,0,0,1,0-2.38,32.73,32.73,0,0,1,.72-3.75l.52-2.2a13.22,13.22,0,0,0,.4-2.13,5.22,5.22,0,0,0-1.31-3.69A5.58,5.58,0,0,0,40,45.07a6.12,6.12,0,0,0-3.53.45,9.37,9.37,0,0,0-4.48,4.66,30.36,30.36,0,0,0-1.75,5.56c-.2.85-.48,2-.62,3A6.91,6.91,0,0,0,29.56,61Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M37.27,49a1.25,1.25,0,0,1-.07.34l-.06-.06.64-.33.49-.25.07,0s0,0,0,.06l0,.15.07.31.07.4s0,.12,0,.13l.12-.1a.94.94,0,0,0,.25-.3,5.09,5.09,0,0,0,.29-.7s.09.15.14.25l.5,1.35-.34-.05.1-.18,0-.09a1.54,1.54,0,0,0,.08-.19A9.75,9.75,0,0,0,40,48.48c.14.26.34.85.54,1.21l.08.15,0,.08.1.15.21.29-.45.11,0-.17,0-.26a6.58,6.58,0,0,0,0-.78,1.2,1.2,0,0,0,.25-.14l.28,0,.61,1.1.28.51-.55.11a3.38,3.38,0,0,0-.32-1.7l.53-.28a12.64,12.64,0,0,0,1.25,1.89l-.46.25a8.24,8.24,0,0,0-.31-.92c0-.09-.15-.39-.26-.62l-.33-.66,1.31.51.66.28-.18.2a1.76,1.76,0,0,0-.69-.75,1.58,1.58,0,0,1,.91.63l.16.23-.29-.07-.79-.19c-.13,0-.12,0-.12,0l.06.05s0,.08.07.15l.07.2a7.91,7.91,0,0,1,.22.78l-.42.23a13.67,13.67,0,0,1-1.26-2l.28-.14a3.85,3.85,0,0,1,.32,1.94l0,.39-.18-.34-.53-1c-.06-.09-.12-.22-.16-.28V50a3.51,3.51,0,0,1-.05.55l0,.29-.18-.23c-.15-.19-.32-.46-.41-.6l-.09-.17,0-.09,0,0v0a1.3,1.3,0,0,1-.29.63l-.18.25-.1-.3-.23-.68-.06-.15s0-.16,0-.06l-.07.14-.06.07a1.35,1.35,0,0,1-.17.17,2.07,2.07,0,0,1-.4.28l-.1.06,0-.11,0-.22c0-.28-.09-.56-.1-.67a1.38,1.38,0,0,0,0-.2L38,49c-.35.13-.72.27-.86.31h0v0Z"
			}), r.a.createElement("path", {
				d: "M44,28.63c0-.21,1.82-1.47,2.41-2.09s1.17-1.11,1.64-1.63c.25-.33.15-.3.14-.34a.06.06,0,0,0-.06,0l-.59,0-.54,0a2,2,0,0,1-.93-.08.89.89,0,0,1-.48-.6,1.08,1.08,0,0,1,.16-.8,8.24,8.24,0,0,1,.81-1c.22-.24.45-.47.68-.69a12.6,12.6,0,0,1,2.67-2A7.94,7.94,0,0,1,48.24,22,12.13,12.13,0,0,0,47,23l-.41.4c-.08.08-.17.27,0,.35a1.26,1.26,0,0,0,.4,0l.7,0H48a1.7,1.7,0,0,1,.45,0,.64.64,0,0,1,.49.64,1.28,1.28,0,0,1-.26.78,2.75,2.75,0,0,1-.45.5l-.87.79a17.69,17.69,0,0,1-1.69,1.29A9.78,9.78,0,0,1,44,28.63Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M39,27.34a5,5,0,0,0-2-2.39,3.14,3.14,0,0,0-1.32-.26,4.73,4.73,0,0,0-3.19,1.2A4.45,4.45,0,0,0,31,29.06c0,.18.05,1.71.15.5"
			}), r.a.createElement("path", {
				d: "M31.12,29.56c.05,0,.08.17.08.39a.87.87,0,0,0,0,.1v0s0,0-.09.07a.14.14,0,0,1-.15,0l0,0s0-.06,0-.08a1.62,1.62,0,0,1,0-.19c0-.14,0-.28,0-.43a5.21,5.21,0,0,1,.11-1.69,4.16,4.16,0,0,1,1-2,5,5,0,0,1,3.85-1.63,3.32,3.32,0,0,1,1.87.62,4.8,4.8,0,0,1,1.51,2.58,6.84,6.84,0,0,1-1.2-.81,5,5,0,0,1-.78-.65A2.31,2.31,0,0,0,35,25a3.78,3.78,0,0,0-2.07.78,4.64,4.64,0,0,0-1.67,3.09l-.12.92,0,.11v0h0a.13.13,0,0,0-.08,0c-.05,0,0,0-.09,0s0-.11,0-.16Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M43.74,49.05a2.43,2.43,0,0,1,2.42.74,5,5,0,0,1,1.39,2,3.31,3.31,0,0,1-.06,2.44,4,4,0,0,1-1.33,1.44,3.07,3.07,0,0,1-1.77.73A2.59,2.59,0,0,1,43.11,56a4,4,0,0,1-1.69-2.2c-.28-.93-1.57-1.62-1-2.38"
			}), r.a.createElement("path", {
				d: "M40.39,51.4c0,.06-.08.24,0,.47a2.55,2.55,0,0,0,.59.82,3.34,3.34,0,0,1,.71,1.12,2.9,2.9,0,0,0,.48.82,3.47,3.47,0,0,0,2.12,1.25A3.48,3.48,0,0,0,46.4,54.7a2.86,2.86,0,0,0,.15-3.64c-.71-1.13-1.78-2.06-2.74-1.84a1.18,1.18,0,0,1,.8-.44,2.49,2.49,0,0,1,1.14.15A3.2,3.2,0,0,1,47.22,50a4.59,4.59,0,0,1,.65,4,3.53,3.53,0,0,1-1.11,1.49,6.88,6.88,0,0,1-1.41.93,2.26,2.26,0,0,1-1.67.12,3.92,3.92,0,0,1-1.34-.77,4.18,4.18,0,0,1-.91-1.11A10.05,10.05,0,0,1,41,53.55c-.15-.29-.46-.71-.67-1.16a1.07,1.07,0,0,1-.11-.66A.74.74,0,0,1,40.39,51.4Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M56.48,39.84c.38-4-2.18-6.9-5.12-9.28a18.11,18.11,0,0,0-9.42-4.16,12.74,12.74,0,0,0-5.16.5,14.25,14.25,0,0,0-4.75,3,12.39,12.39,0,0,0-1.86,1.76,8,8,0,0,0-1.43,6.52c1.18,6,7.6,9.65,13,10.63,3.43.62,7.43.64,10.55-1.44C54.39,46,56.09,43.85,56.48,39.84Z"
			}), r.a.createElement("path", {
				d: "M56.49,39.84a8.51,8.51,0,0,1-.28,2.25A9,9,0,0,1,54,46.23a10.28,10.28,0,0,1-4.71,2.71,16,16,0,0,1-4.44.49,20.28,20.28,0,0,1-11.86-4,13,13,0,0,1-4.15-5.13,9.89,9.89,0,0,1-.53-1.59A7.59,7.59,0,0,1,28,37.07a9.05,9.05,0,0,1,.35-3.28,8,8,0,0,1,1.33-2.57,13.92,13.92,0,0,1,2-1.92,15.09,15.09,0,0,1,4.61-2.9A14.24,14.24,0,0,1,46.57,27a21.82,21.82,0,0,1,7.49,5.49,11.09,11.09,0,0,1,2.19,3.58,8.23,8.23,0,0,1,.41,3.76,9,9,0,0,0-.86-3.6,11.66,11.66,0,0,0-2.53-3.34,29.35,29.35,0,0,0-5.55-4.05A14.75,14.75,0,0,0,40,26.74a11.51,11.51,0,0,0-3.8.74,12.83,12.83,0,0,0-3.22,2A14.5,14.5,0,0,0,30.23,32a7.09,7.09,0,0,0-1.32,3.24,8.15,8.15,0,0,0,.2,3.41,9.67,9.67,0,0,0,1.36,3A11.91,11.91,0,0,0,32.6,44.1,15.11,15.11,0,0,0,35.14,46a19.85,19.85,0,0,0,5.54,2.24c3.75.85,7.56.89,10.55-.6a9.05,9.05,0,0,0,4-3.8A12.41,12.41,0,0,0,56.49,39.84Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M51.92,33a4.71,4.71,0,0,1,5-1.22c1.86.62,3,2.87,2.75,4.89a5.69,5.69,0,0,1-1.46,3.19c-.69.75-2.1,1.93-3.1,1.56"
			}), r.a.createElement("path", {
				d: "M55.1,41.44c.06,0,.24,0,.51,0a2.81,2.81,0,0,0,.94-.4,5.57,5.57,0,0,0,1.59-1.53,6,6,0,0,0,1-2.51,4.81,4.81,0,0,0-.41-2.58,4,4,0,0,0-1.33-1.63,3.75,3.75,0,0,0-1.9-.61,4.51,4.51,0,0,0-3.4,1,2.56,2.56,0,0,1,1.19-1.63A3.14,3.14,0,0,1,55,31a6.16,6.16,0,0,1,2.12.5,4.39,4.39,0,0,1,1.58,1.25A5.89,5.89,0,0,1,59.93,36a5.71,5.71,0,0,1-2.49,5,3.25,3.25,0,0,1-1.32.57A1.4,1.4,0,0,1,55.1,41.44Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M43.86,47.39a.36.36,0,0,0,.35.23c.08,0,.18,0,.21-.33,0,0,0-.07.07-.06l.17.13.18.12.13-.21c.09-.13.21-.4.26-.3.16.56.38.59.61.63l-.12.09a2.27,2.27,0,0,0,0-.64.81.81,0,0,0,.06-.44c.06,0,.2.14.28.17l.24.34.26.38a.26.26,0,0,0,.12.12s0,0,.06-.12.08-.28-.1-1.12c.17.1.2.08.22.07a.09.09,0,0,0,0-.05l.14.12.18.21a.74.74,0,0,1,.14.2c.06.1.1.26.16.35s.18,0,.3-.05a.3.3,0,0,0,.08-.19.64.64,0,0,0,0-.25,2.59,2.59,0,0,0-.1-.4.65.65,0,0,0,.2-.21.71.71,0,0,0,.27-.09,3.23,3.23,0,0,0,.45.4l.15.11.08,0,0,0v0l-.15-.79-.18-1,1.3,1,.27.21h0v-.1l0-.18a3.26,3.26,0,0,0-.06-.38l-.21-.81,1.18.58c.15.08.07,0,.1.06l0,0v0h0V45a3.49,3.49,0,0,0,0-.57v-.18l.13-.07a.42.42,0,0,1,.48,0c.12.09.05,0,.08.07l.05.08c0,.07.15.07.12,0v-.07s0-.06.06.14L52,44.08c-.16-.48-.25-.64-.2-.74.25.17.49.33.64.41a1.26,1.26,0,0,0,.33.09.75.75,0,0,0,.26,0,1.63,1.63,0,0,0-.27-.67,1.58,1.58,0,0,1,.5.82,1.32,1.32,0,0,1-.56.13h-.28l0,.06,0,.06c.06.14-.1-.29,0-.12l.07.14,0,.07.13.33a.72.72,0,0,1,0,.36.41.41,0,0,1-.28.31.58.58,0,0,1-.38,0,.84.84,0,0,1-.35-.33,1.06,1.06,0,0,0-.18-.22s0,0,0-.06,0-.15,0-.11l.21-.16a5.44,5.44,0,0,1,0,.7,7.94,7.94,0,0,0,.06,1.07l-.56-.36L51,45.62l-.15-.09c-.06,0-.17-.11-.21-.12a4,4,0,0,1,0,.55c0,.19,0,.41,0,.6l0,.29a1,1,0,0,1-.23-.15l-1.16-.9.22,1.26,0,.23s0,0,0,.05l0,0-.11,0a3.89,3.89,0,0,1-.42-.19l-.35-.21-.16-.12a1.23,1.23,0,0,1-.2-.19c0,.1.06.2.08.29a.59.59,0,0,1,0,.26.74.74,0,0,1-.18.39.77.77,0,0,1-.38.22.52.52,0,0,1-.43-.12c-.08-.08-.09-.2-.15-.29s0-.05,0-.05l0,.08a.43.43,0,0,1,0,.16.46.46,0,0,1-.06.23.44.44,0,0,1-.24.22.37.37,0,0,1-.35-.09,1.22,1.22,0,0,1-.16-.18l-.05-.09-.1-.16c0-.06-.12-.19-.14-.19a1.24,1.24,0,0,1,0,.27c0,.07,0,.12,0,.22l0,.15-.14,0h0a.87.87,0,0,1-.46-.2.53.53,0,0,1-.16-.23l0-.07h0v0l-.07.09a1.93,1.93,0,0,1-.19.26l-.22-.19-.12-.11s0,.1,0,.07a.35.35,0,0,1-.2.18c-.07,0-.11,0-.09,0a.33.33,0,0,1-.31-.17A.21.21,0,0,1,43.86,47.39Z"
			}), r.a.createElement("path", {
				className: o.a.cls6,
				d: "M54.8,39.38a5,5,0,0,0,.16.71L54.83,40a.44.44,0,0,0,.18-.51l.25,0a1.05,1.05,0,0,0,.09.34,1.37,1.37,0,0,0,.26.4l-.32,0a1.27,1.27,0,0,0,.13-.19,1.18,1.18,0,0,0,.15-.55c.2-.07.25-.12.27-.15a1.57,1.57,0,0,0,.29,0,4.36,4.36,0,0,0,.28.64c.07.11.12.17.18.25l0,.05-.53.08a2.37,2.37,0,0,0,.09-.36,1.93,1.93,0,0,0,0-.32,2.2,2.2,0,0,0,0-.45l.3-.07.31,0a1,1,0,0,0,.39.49l-.42.29c0-.32-.06-.6-.07-.85l.4-.16a.25.25,0,0,0,.24.15c.08,0,.06-.13.1-.31a2.17,2.17,0,0,1,.12.26,1.29,1.29,0,0,1,0,.19.18.18,0,0,1,0,.1l-.08,0a.57.57,0,0,1-.42.08.7.7,0,0,1-.42-.24l.5-.2a2.09,2.09,0,0,1,.12.53v.31l0,.57-.41-.3c-.17-.12-.11-.1-.15-.15a1.38,1.38,0,0,1-.11-.24s0,.1,0,.15a3.14,3.14,0,0,1-.18.65l-.08.22-.13-.18a3,3,0,0,1-.21-.33L56,40c0-.08-.1-.26-.11-.22a.94.94,0,0,1,0,.3.4.4,0,0,1-.07.15,1.08,1.08,0,0,1-.18.24l-.13.14-.12-.15a1.7,1.7,0,0,1-.36-1l.34-.06a.66.66,0,0,1,0,.48.59.59,0,0,1-.34.32l-.14,0,0-.11A1.48,1.48,0,0,1,54.8,39.38Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M45.58,36.55a1.63,1.63,0,0,1-.08-.37,2.88,2.88,0,0,1,.12-.92A3.38,3.38,0,0,1,46.89,33a2.43,2.43,0,0,1,3.2.53c1.39,1.59-.16,4.18-2.07,4.29a2.88,2.88,0,0,1-1.61-.33A1.85,1.85,0,0,1,45.58,36.55Z"
			}), r.a.createElement("path", {
				d: "M45.58,36.54a2.4,2.4,0,0,0,1,.94,2.8,2.8,0,0,0,1.88.14,3,3,0,0,0,1.69-1.57A2.08,2.08,0,0,0,50,33.88a2.41,2.41,0,0,0-1.61-.94,2.16,2.16,0,0,0-1.66.57A3.48,3.48,0,0,0,45.88,35a2.64,2.64,0,0,0-.22,1.49,2.27,2.27,0,0,1-.16-1.64A3,3,0,0,1,46,33.44a2.63,2.63,0,0,1,3.27-.66,2.8,2.8,0,0,1,1.13,1.08,2.31,2.31,0,0,1,.28,1.44,3.22,3.22,0,0,1-1.38,2.23,2.76,2.76,0,0,1-2.27.39A2.16,2.16,0,0,1,46,37.31,1.84,1.84,0,0,1,45.58,36.54Z"
			}), r.a.createElement("path", {
				className: o.a.cls4,
				d: "M35.34,29.49a1.81,1.81,0,0,1,1.9-.24,1.52,1.52,0,0,1,.65,1.33,2.77,2.77,0,0,1-1.82,2.71,1.51,1.51,0,0,1-2-1.76A2.63,2.63,0,0,1,35.34,29.49Z"
			}), r.a.createElement("path", {
				d: "M35.34,29.5a6.72,6.72,0,0,0-.73.81,2.6,2.6,0,0,0-.4,1.43,1.36,1.36,0,0,0,.93,1.33,1.78,1.78,0,0,0,1.62-.49,2.65,2.65,0,0,0,.71-2.71,1,1,0,0,0-1-.61,2.5,2.5,0,0,0-1.13.3,1.88,1.88,0,0,1,1.16-.7,1.29,1.29,0,0,1,1.23.47,2.16,2.16,0,0,1,.3,1.47,3.57,3.57,0,0,1-.4,1.27,2.62,2.62,0,0,1-1.88,1.4,1.58,1.58,0,0,1-1.77-1,2.45,2.45,0,0,1,.14-1.84,2.18,2.18,0,0,1,.6-.77A2.66,2.66,0,0,1,35.34,29.5Z"
			}), r.a.createElement("path", {
				d: "M36,34.9a19,19,0,0,0,8.08,2.8,20.79,20.79,0,0,1-.92,2.17A8.13,8.13,0,0,1,41.6,42a4,4,0,0,1-4.33.91c-1.18-.59-1.06-2.08-1.06-3.2a29.23,29.23,0,0,1,.4-4.38"
			}), r.a.createElement("path", {
				d: "M36.61,35.37c0,.12-.12,1.12-.2,2.29a25.35,25.35,0,0,0,0,3.23,2.29,2.29,0,0,0,.7,1.67A2.65,2.65,0,0,0,38.9,43a4.66,4.66,0,0,0,3.26-2,9.77,9.77,0,0,0,1-1.75l.4-.91.1-.22,0-.11h0l-.43-.06-.6-.11q-.6-.12-1.17-.27a18.06,18.06,0,0,1-2.15-.71A15.64,15.64,0,0,1,36,35c.66.27,1.59.66,2.49,1s1.76.56,2.2.71a15.88,15.88,0,0,0,1.67.51l.82.18.39.08.5.07.15.08h0s.06,0,0,0v0l0,.07c0,.1,0,.24-.08.37l-.24.53-.46,1a10,10,0,0,1-1.12,1.79,5.09,5.09,0,0,1-3.3,2,3.27,3.27,0,0,1-1.81-.27,2,2,0,0,1-1.07-1.37A6.46,6.46,0,0,1,36,40.14c0-.5,0-1,.06-1.48A20.63,20.63,0,0,1,36.61,35.37Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M54.28,16.26a2.92,2.92,0,0,1,.28,2.67,3.34,3.34,0,0,1-2.1,1.88,2.72,2.72,0,0,1-.86.14A3.19,3.19,0,0,1,50,20.49a2.71,2.71,0,0,1-1.62-3.15A3.16,3.16,0,0,1,52.33,15a3.38,3.38,0,0,1,2.54,2.22"
			}), r.a.createElement("path", {
				d: "M54.86,17.18a4.77,4.77,0,0,0-1.11-1.33,3.42,3.42,0,0,0-2.26-.69,2.77,2.77,0,0,0-2.27,1.48A3,3,0,0,0,48.83,18a1.87,1.87,0,0,0,.43,1.16,3.77,3.77,0,0,0,2,1.19,2.69,2.69,0,0,0,2-.53,2.62,2.62,0,0,0,1.11-1.64,2.91,2.91,0,0,0-.23-1.81,2.39,2.39,0,0,1,1,2,2.66,2.66,0,0,1-.81,2,4.28,4.28,0,0,1-2.26,1,3.51,3.51,0,0,1-2.18-.55,4,4,0,0,1-1.49-1.41,2.61,2.61,0,0,1-.3-1.92,3.65,3.65,0,0,1,2.17-2.67,3.73,3.73,0,0,1,3,.26,3.07,3.07,0,0,1,1.16,1.11A2.56,2.56,0,0,1,54.86,17.18Z"
			}), r.a.createElement("path", {
				className: o.a.cls8,
				d: "M28.91,55c0,1.3-1.84.76-2.86.65l-1.77-.19a4.85,4.85,0,0,1-1.42-.23c-.74-.34-2.58-7.68-2.95-9.25a2.41,2.41,0,0,1,.32-1.41c.27-.44.76-.34,1.2-.27l1.44.26,1.72.35c.55.13,1.08.2,1.27.8.13.37.25.74.37,1.11l.94,2.93.36,1.1c.39,1.22,1,2.39,1.3,3.62A1.89,1.89,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				d: "M28.91,55c-.06-.07-.08-.41-.28-.91S28.2,53,27.91,52.3c-.59-1.4-1.07-3-1.41-3.93l-.88-2.44c-.11-.39-.33-.49-.76-.59l-1.33-.25c-.86-.16-1.82-.34-2.61-.44a.4.4,0,0,0-.32.1,1.67,1.67,0,0,0-.21.46,1.82,1.82,0,0,0-.1.54.78.78,0,0,0,0,.22l.08.32c.37,1.46.75,2.92,1.15,4.33a32.94,32.94,0,0,0,1.3,4c.19.32.12.35.48.43s.61.08.95.12l1.87.26a14.7,14.7,0,0,0,1.69.27,1.4,1.4,0,0,0,.69-.12.64.64,0,0,0,.27-.54.7.7,0,0,1-.16.66,1.33,1.33,0,0,1-.8.31A11.5,11.5,0,0,1,26,56l-1.74-.08a4.86,4.86,0,0,1-1.33-.18.89.89,0,0,1-.29-.15,1.06,1.06,0,0,1-.26-.29,3.15,3.15,0,0,1-.22-.46c-.13-.3-.22-.59-.32-.88-.18-.57-.35-1.14-.5-1.7C21,51.12,20.73,50,20.46,49s-.52-2-.73-3.1a2.41,2.41,0,0,1,.13-.81,1.77,1.77,0,0,1,.37-.72,1,1,0,0,1,.81-.23c.27,0,.49.07.73.11.95.16,1.85.34,2.73.51a2.29,2.29,0,0,1,1.32.52,1.57,1.57,0,0,1,.32.65l.2.6c.53,1.58,1,3.06,1.44,4.45A18.72,18.72,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				className: o.a.cls9,
				d: "M26.58,49.75c.23.7.46,1.41.71,2.11.12.35.26.71.39,1.06,0,.12.28.67.19.75h0a5.32,5.32,0,0,1-1.18-.16l-1.26-.22-1.05-.2a1.37,1.37,0,0,1-.49-.13c-.17-.12-1.87-5.31-2.38-7a.29.29,0,0,1,.35-.36c.64.17,2.83.49,3.12.58a1.63,1.63,0,0,1,.48.13c.14.09.14.22.18.36s.16.53.24.79C26.08,48.21,26.33,49,26.58,49.75Z"
			}), r.a.createElement("path", {
				d: "M26.58,49.75c0-.09-.34-1-.67-2L25.66,47l-.12-.39c0-.13-.05-.25-.15-.3a8.59,8.59,0,0,0-1.26-.26l-1.79-.3-.46-.08c-.16-.05-.23,0-.29.07a.23.23,0,0,0,0,.14l.07.23.15.45L23,50.17l.51,1.49.27.74.14.35c0,.08,0,.09,0,.11l.14,0,2.94.56a4.14,4.14,0,0,0,.68.1c.08,0,.06,0,.07,0a1.86,1.86,0,0,0-.1-.31L27.23,52l-.69-2.22c.26.57.59,1.42.9,2.22l.46,1.12a1.34,1.34,0,0,1,.09.26.47.47,0,0,1,0,.14.37.37,0,0,1,0,.21c-.05.12-.25.12-.31.12h-.19l-2.47-.49c-.41-.1-.77-.14-1.18-.26a.26.26,0,0,1-.13-.14l-.06-.14-.11-.27L23.38,52,22,47.91l-.58-1.85a.4.4,0,0,1,.1-.5c.17-.13.37,0,.5,0l.88.16,1.67.31a8,8,0,0,1,.79.17.42.42,0,0,1,.27.35c0,.12.07.25.1.37Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M43.91,52.83c-1.93.15-3-2-4.47-2.85A3.66,3.66,0,0,0,38,49.45c-1.76-.14-2.19,1.76-2,3.17a5.54,5.54,0,0,0,2.93,4,7.69,7.69,0,0,0,5.59.51,3.27,3.27,0,0,0,2.54-3"
			}), r.a.createElement("path", {
				d: "M47,54.12a1.4,1.4,0,0,1,0,.78,2.85,2.85,0,0,1-.78,1.42,5.56,5.56,0,0,1-3.07,1.4,7.62,7.62,0,0,1-4.3-.51A6.19,6.19,0,0,1,35.72,54,4.65,4.65,0,0,1,35.78,50a2.29,2.29,0,0,1,.78-.83,2.32,2.32,0,0,1,1.09-.32,3.53,3.53,0,0,1,1.85.53,11.2,11.2,0,0,1,2.33,2.15,3.09,3.09,0,0,0,2.07,1.1,2,2,0,0,1-1.27.1,4.18,4.18,0,0,1-1.4-.66c-.83-.59-1.48-1.17-1.8-1.43a2.53,2.53,0,0,0-2.15-.76c-.69.19-1,1.06-1.1,1.84a4.84,4.84,0,0,0,1.83,4,6.46,6.46,0,0,0,3.74,1.36,6.79,6.79,0,0,0,3.41-.6,3.87,3.87,0,0,0,1.39-1.14A2.79,2.79,0,0,0,47,54.12Z"
			}), r.a.createElement("path", {
				d: "M24.54,49.69c-.13,0-.35-.76-.5-1-.07-.12-.13-.25-.19-.38a1.26,1.26,0,0,1-.16-.5.53.53,0,0,1,.23-.48.51.51,0,0,1,.62.06,1.11,1.11,0,0,1,.28.58,7.21,7.21,0,0,1,.24,2v.23l-.13,0a.5.5,0,0,1-.67-.29c.23.08.48-.07.44-.17l-.15.3a.85.85,0,0,1-.2-.47,6,6,0,0,0,0-1.12c0-.31-.11-.79-.17-.73s0,0,0,0,0,0,0,0a.69.69,0,0,0,0,.13l.14.38a4.64,4.64,0,0,1,.2.72A2.3,2.3,0,0,1,24.54,49.69Z"
			}), r.a.createElement("path", {
				d: "M25.26,50.93c-.09.07-.13.11-.1.19s.09.05.07.05,0,0,0,0,0,.09,0,0-.18-.09-.14-.08a.25.25,0,0,0,.17-.18c.32-.21.68.1.58.22a.76.76,0,0,1-.51.4.46.46,0,0,1-.41-.21.42.42,0,0,1,.13-.66.19.19,0,0,1,.21,0A.16.16,0,0,1,25.26,50.93Z"
			}), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M16.21,48.3c0-.11.63-.32,1.11-.79a1.62,1.62,0,0,0,.46-.86.93.93,0,0,0-.15-.7,1.25,1.25,0,0,0-.23-.23,2.49,2.49,0,0,0-.55-.33l-1.77-.74c.49-.06,1.25-.14,1.84-.24l.4-.1a1.68,1.68,0,0,0,.31-.11L18,44a2.56,2.56,0,0,0,1.08-.92l.05-.12s0-.11,0-.24a3.24,3.24,0,0,0-.13-.41,2.67,2.67,0,0,0-.37-.65l.72-.67a13.4,13.4,0,0,0,.86,1.18,1.37,1.37,0,0,0,.35.32,3.48,3.48,0,0,0,.61.08,5.5,5.5,0,0,0,1.21,0l1.12-.14a4.45,4.45,0,0,1-1.52.84,3.3,3.3,0,0,1-1.55.1,1.27,1.27,0,0,1-.44-.21,2.28,2.28,0,0,1-.27-.27,5.77,5.77,0,0,1-.39-.51c-.23-.33-.42-.66-.61-1l.39-.37a2.74,2.74,0,0,1,.58,1,1.86,1.86,0,0,1,.12,1.11,3,3,0,0,1-1.47,1.37l-.42.2-.26.09a2.59,2.59,0,0,1-.4.1,3.34,3.34,0,0,1,.38.17,1.36,1.36,0,0,1,.17.12,1.85,1.85,0,0,1,.29.33,1.52,1.52,0,0,1,0,1.64,2,2,0,0,1-1,.81A3.79,3.79,0,0,1,16.21,48.3Z"
			}), r.a.createElement("path", {
				className: o.a.cls8,
				d: "M8.62,33.78l.76-1,1.72-2.21A4.92,4.92,0,0,1,12,29.51a1.37,1.37,0,0,1,.5-.28,2.43,2.43,0,0,1,1.58.39c.51.21,2.57,1.48,3.06,1.76s1.08.56,1.06,1.25a1.86,1.86,0,0,1-.33.87c-.61,1-1.31,2-2,3s-3.14,4.35-3.8,5a1.1,1.1,0,0,1-.38.3c-.63.26-1.24-.24-1.77-.53L8.59,40.6l-1.52-.86c-.37-.21-1.12-.49-1.21-.94s.57-1.15.84-1.51L7.63,36"
			}), r.a.createElement("path", {
				d: "M7.63,36a4.56,4.56,0,0,1-.5.85c-.15.22-.32.49-.54.77A3.55,3.55,0,0,0,6,38.5c-.13.32.13.55.47.75l1,.53,1.69.9,1.17.6a1.77,1.77,0,0,0,1.06.35.59.59,0,0,0,.38-.25c.14-.15.28-.32.42-.5l.83-1.1c1.08-1.5,2.19-3,3.11-4.49l1.24-1.94a1.51,1.51,0,0,0,.32-.79c0-.2-.12-.35-.41-.53-1.28-.73-2.52-1.61-3.73-2.18a2.09,2.09,0,0,0-.8-.27.6.6,0,0,0-.32.07,1.36,1.36,0,0,0-.34.23,17.67,17.67,0,0,0-1.21,1.41c-.79.94-1.53,1.81-2.21,2.57a33.53,33.53,0,0,1,1.77-3.05l.5-.76a3.72,3.72,0,0,1,.57-.75,2.12,2.12,0,0,1,.76-.51,1.56,1.56,0,0,1,.79,0,16.69,16.69,0,0,1,3.32,1.85c.5.35,1,.59,1.49,1a1.3,1.3,0,0,1,.51.87,1.59,1.59,0,0,1-.23.93C17,35.24,15.86,37,14.69,38.57c-.57.8-1.13,1.56-1.69,2.29a9.73,9.73,0,0,1-.9,1.06,1.32,1.32,0,0,1-1.48.1c-1.53-.82-2.9-1.62-4.19-2.35a2.25,2.25,0,0,1-.51-.37.78.78,0,0,1-.25-.77,2.94,2.94,0,0,1,.79-1.14Z"
			}), r.a.createElement("g", {
				className: "cls10"
			}, r.a.createElement("path", {
				d: "M11.3,40.88a24.23,24.23,0,0,1-2.84-1.27l-.6-.29-.31-.17-.16-.09a.6.6,0,0,1-.21-.21.76.76,0,0,1,.09-.58l.19-.36.41-.73.84-1.41a47.55,47.55,0,0,1,4-5.69,11.25,11.25,0,0,1-1.28,2.51,37.38,37.38,0,0,0-2.37,3.3c-.34.52-.64,1-.93,1.51l-.41.72c-.12.23-.3.5-.25.58a.11.11,0,0,0,.07.06l.14.09L8,39l.59.32,1.09.59C10.23,40.21,11.11,40.78,11.3,40.88Z"
			})), r.a.createElement("path", {
				className: o.a.cls5,
				d: "M5.43,28.78a3.44,3.44,0,0,0-2.11,5.71c1.24,1.58,4.57,3.39,6.28,2.21a2.11,2.11,0,0,0,.94-1.29c.17-.94-.69-2-1.35-2.55a5.75,5.75,0,0,0-3.54-1.34c-.09,0-.22.06-.18.13"
			}), r.a.createElement("path", {
				d: "M5.47,31.66c-.06,0,0-.17.12-.19a2.36,2.36,0,0,1,.47,0,5.2,5.2,0,0,1,1.37.24,6.14,6.14,0,0,1,2.49,1.57A3.23,3.23,0,0,1,10.86,35,2.12,2.12,0,0,1,10,36.87a2.82,2.82,0,0,1-2,.6A5.89,5.89,0,0,1,6.05,37a8.39,8.39,0,0,1-2.72-1.82,4.34,4.34,0,0,1-1.26-2.93,3.4,3.4,0,0,1,1.15-2.64,4.22,4.22,0,0,1,2.18-.95,5.58,5.58,0,0,0-1.8,1.43,3.61,3.61,0,0,0-.68,1.66,3.29,3.29,0,0,0,.35,2.17,5.24,5.24,0,0,0,1.49,1.62,5.86,5.86,0,0,0,3.78,1.34c1.21-.12,2.18-1.37,1.66-2.32A4.93,4.93,0,0,0,8.1,32.4a7.54,7.54,0,0,0-1.51-.66,7.49,7.49,0,0,0-.74-.17C5.65,31.53,5.43,31.53,5.47,31.66Z"
			}), r.a.createElement("path", {
				d: "M14.69,31.63c0,.09-.34.56-.37.79s.14.17.12.12l0,0,.13-.22.26-.41s0-.09.05-.15,0-.07.09-.07l0,0c0-.05-.1-.08-.22,0a.33.33,0,0,1,.45-.34.4.4,0,0,1,.2.17.79.79,0,0,1,.07.2.42.42,0,0,1,0,.2.79.79,0,0,1-.1.21c-.21.24-.37.46-.53.67a.86.86,0,0,1-.73.46.29.29,0,0,1-.2-.29.73.73,0,0,1,0-.38,1.77,1.77,0,0,1,.3-.59A1.31,1.31,0,0,1,14.69,31.63Z"
			}), r.a.createElement("path", {
				d: "M13.77,33.64s.09,0,.14,0h0v.11a.59.59,0,0,1,0,.14c0,.2-.35.34-.56.15a.38.38,0,0,1,0-.63.25.25,0,0,1,.39.19.24.24,0,0,0-.14.1s0,0,0,0v0c.05,0,0,0,0,0s0-.07,0-.05h0l.07.17A.41.41,0,0,1,13.77,33.64Z"
			}))))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", c({
				className: Object(a.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, r.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.t)(),
				h = Object(o.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				f = Object(a.b)(h),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: s,
					isCollectionLayout: a,
					isEditing: o,
					layout: i,
					pageLayer: c,
					...d
				}) => r.a.createElement("div", d);
			t.a = b(f(({
				className: e,
				...t
			}) => r.a.createElement(g, p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
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
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class h extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var f = Object(b.a)(h);
			var g = e => r.a.createElement(f, e),
				x = n("./src/reddit/layout/page/Listing/index.m.less"),
				E = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: s,
						theme: a,
						...i
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return r.a.createElement("div", y({
						className: Object(o.a)(E.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				v = c.a.div("Body", E.a),
				O = c.a.div("Sidebar", E.a),
				C = e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null;

			function j(e) {
				const t = e.trendingUnit && !e.noSidebarTopMargin ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					s = e.sidebar && r.a.createElement(O, {
						className: e.isCollectionLayout ? E.a["m-collectionLayout"] : E.a.defaultLayout,
						style: n
					}, e.sidebar),
					i = r.a.createElement(a.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? r.a.createElement(r.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? r.a.createElement(r.a.Fragment, null, s, i) : r.a.createElement(r.a.Fragment, null, i, s);
				const m = e.disableFullscreen ? `${e.maxWidth||u.a+2*d.m}px` : "100%";
				return r.a.createElement(g, {
					subredditId: e.subredditId
				}, r.a.createElement("div", {
					className: Object(o.a)(E.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, r.a.createElement(_, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), r.a.createElement("div", {
					className: E.a.innerContainer
				}, r.a.createElement("div", {
					className: E.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, C(e), r.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), r.a.createElement(v, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
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
				r = n.n(s),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(i);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				af: "GWC1a5vux4ivxu9auf82p"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/extractQueryParams/index.ts"),
				p = n("./src/lib/isAdHocMultireddit/index.ts"),
				b = n("./src/lib/isFakeSubreddit/index.ts"),
				h = n("./src/lib/listingSort/index.ts"),
				f = n("./src/lib/makeListingKey/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				x = n("./src/lib/constants/index.ts"),
				E = n("./src/lib/fastdom/index.ts"),
				y = n("./src/lib/performanceTimings/index.tsx"),
				_ = n("./src/reddit/actions/pages/subreddit.ts"),
				v = n("./src/reddit/actions/preferences.ts"),
				O = n("./src/reddit/actions/search.ts"),
				C = n("./src/reddit/actions/subreddit.ts"),
				j = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				S = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				k = n("./src/reddit/components/ContentGate/index.tsx"),
				I = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				P = n("./src/reddit/components/DownToChatBanner/index.tsx"),
				T = n("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx"),
				w = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts"),
				N = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				L = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				A = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				B = n("./src/reddit/components/EmptySubredditPostList/index.tsx"),
				D = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				R = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				F = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				M = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				U = n("./src/reddit/components/HeaderImage/index.tsx"),
				H = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				W = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				V = n("./src/reddit/components/JumpToContent/index.tsx"),
				q = n("./src/reddit/components/ListingPostList/index.tsx"),
				K = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				G = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				z = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				J = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				Y = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				Z = n("./src/reddit/components/TabBadger/index.tsx"),
				Q = n("./src/reddit/components/TrackingHelper/index.tsx"),
				X = n("./src/reddit/constants/page.ts"),
				$ = n("./src/reddit/constants/parameters.ts"),
				ee = n("./src/reddit/constants/postLayout.ts"),
				te = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = n("./src/reddit/featureFlags/index.ts"),
				se = n("./src/reddit/helpers/correlationIdTracker.ts"),
				re = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ae = n("./src/reddit/helpers/resonatePage/index.ts"),
				oe = n("./src/reddit/helpers/trackers/screenview.ts"),
				ie = n("./src/reddit/layout/page/Listing/index.tsx"),
				ce = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				de = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				le = n("./src/reddit/selectors/discoveryUnit.ts"),
				ue = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				me = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				pe = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				be = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				he = n("./src/reddit/selectors/experiments/second.ts"),
				fe = n("./src/reddit/selectors/experiments/topPosts.ts"),
				ge = n("./src/reddit/selectors/experiments/trending.ts"),
				xe = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				Ee = n("./src/reddit/selectors/gold/powerups.ts"),
				ye = n("./src/reddit/selectors/listings.ts"),
				_e = n("./src/reddit/selectors/meta.ts"),
				ve = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Oe = n("./src/reddit/selectors/posts.ts"),
				Ce = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				je = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/selectors/user.ts"),
				ke = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx"),
				Ie = n("./src/reddit/pages/Subreddit/index.m.less"),
				Pe = n.n(Ie);

			function Te() {
				return (Te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ne = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), Le = 5, Ae = 3, Be = Object(te.t)(), De = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), Re = Object(g.a)(Object(d.a)((e, {
				location: t
			}) => t.search, e => a()([...Object(m.a)(e)]))), Fe = Object(d.a)((e, {
				match: t
			}) => t.params.subredditName, (e, {
				match: t
			}) => t.params.sort, Re, Se.cb, ue.a, (e, t, n, s, r) => {
				let a = t;
				a || (e === X.f && r ? a = x.P.BEST : Object(b.a)(e) && (a = x.P.HOT));
				const o = Object(_.makeFlairSearchOptions)(n, s);
				return Object(_.makeSubredditPageKey)(e, a, n, o)
			}), Me = Object(d.c)({
				isTopContentDismissed: Se.P
			}), Ue = Object(d.c)({
				subreddit: (e, t) => Object(je.A)(e, {
					subredditName: t.match.params.subredditName
				})
			}), He = Object(d.c)({
				powerupsEnabled: (e, t) => {
					const {
						subreddit: n
					} = Ue(e, t);
					return !(!n || !Object(Ee.i)(e, {
						subredditId: n.id
					}))
				},
				powerupsTier2Achieved: (e, t) => {
					const {
						subreddit: n
					} = Ue(e, t);
					return !(!n || !Object(Ee.j)(e, {
						subredditId: n.id
					}))
				}
			}), We = Object(d.c)({
				countryMeta: _e.b,
				geopopular: Se.m
			}), Ve = Object(d.c)({
				isLoggedIn: Se.J
			}), qe = Object(g.a)((e, t) => {
				const {
					subreddit: n
				} = Ue(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					const r = Fe(e, t),
						a = Object(ve.a)(de.c.config)(e, {
							subredditId: n.id
						}),
						o = Object(Oe.A)(e, r, s, !0),
						i = !Object(ye.d)(e, {
							listingKey: r
						});
					if (a && i && o.length <= 1) return !0
				}
				return !1
			}), Ke = Object(d.c)({
				inAwardListingExperiment: me.a,
				isPopular: te.C,
				isInTrendingEntrypointExperiment: ge.a
			}), Ge = e => {
				const t = $.x in e && e[$.x].toUpperCase();
				if ("string" == typeof t && t in x.Ub) return x.Ub[t]
			}, ze = Object(g.a)((e, t) => {
				const {
					sort: n,
					subredditName: s
				} = t.match.params, r = Re(e, t);
				if (n) return Object(h.b)({
					sort: n,
					timeSort: Ge(r)
				});
				if (Object(b.a)(s)) return s === X.f && Object(ue.a)(e) ? Object(h.b)({
					sort: x.P.BEST
				}) : Object(h.b)({
					sort: x.P.HOT
				});
				const a = Fe(e, t),
					o = e.listings.postOrder.listingSort[a];
				if (o && !o.hasChanged) return Object(h.d)(o.sort);
				const {
					subreddit: i
				} = Ue(e, t);
				if (i) {
					const t = Object(je.D)(e, {
						subredditId: i.id
					});
					return Object(h.d)(t)
				}
				return Object(h.d)(e.user.prefs.sort)
			}), Je = Object(g.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(je.X)(e, {
					subredditName: n
				})
			}), Ye = Object(d.c)({
				claimablePointsEnabled: ne.d.spClaimablePoints,
				isBlacklistedTopContentPage: le.f,
				listingKey: Fe,
				sortParams: ze,
				specialMembershipUpsellsEnabled: ne.d.spSpecialMembershipUpsells,
				stellarRegistrationBannerEnabled: ne.d.spStellarWalletRegistration,
				topContent: Je,
				topContentDiscoveryUnit: e => Object(le.c)(e, {
					unitName: ce.a
				}),
				topPostsVariant: fe.d,
				walletRegistrationBannerEnabled: ne.d.spWalletRegistrationBanner
			}), Ze = Object(d.c)({
				showCreatePostBanner: qe,
				contentGateInfo: (e, t) => Object(Se.e)(e, t.match.params.subredditName),
				layout: te.O,
				isRpanDuVisible: (e, {
					match: t
				}) => Object(Ce.a)(e, {
					listingName: `r/${t.params.subredditName}`,
					sort: t.params.sort
				}),
				rpanInjectionIndex: (e, {
					match: t
				}) => Object(Ce.b)(e, {
					listingName: `r/${t.params.subredditName}`
				}),
				isUISimplificationAllItemsVariant: xe.b,
				isActionBarAnimationEnabled: pe.b,
				inResonatePilot: be.a,
				isSecondEmbedEnabled: he.a,
				isNightmode: Se.V
			}), Qe = () => Object(d.a)(Se.cb, We, Re, Me, He, Ue, (e, {
				match: t
			}) => Object(je.x)(e, {
				subredditName: t.params.subredditName
			}), Ve, (e, {
				match: t
			}) => t.params.subredditName, Ke, Ye, Ze, (e, {
				countryMeta: t,
				geopopular: n
			}, s, {
				isTopContentDismissed: r
			}, {
				powerupsEnabled: a,
				powerupsTier2Achieved: o
			}, {
				subreddit: i
			}, c, {
				isLoggedIn: d
			}, l, {
				inAwardListingExperiment: u,
				isInTrendingEntrypointExperiment: m,
				isPopular: p
			}, {
				claimablePointsEnabled: b,
				specialMembershipUpsellsEnabled: h,
				listingKey: f,
				sortParams: {
					sort: g,
					timeSort: E
				},
				stellarRegistrationBannerEnabled: y,
				topContent: _,
				topContentDiscoveryUnit: v,
				topPostsVariant: O,
				isBlacklistedTopContentPage: C,
				walletRegistrationBannerEnabled: j
			}, S) => {
				const k = t || x.w.Everywhere,
					I = n || k,
					P = s && $.h in s ? s[$.h].toUpperCase() : I,
					T = !!s.hasOwnProperty("f");
				return {
					countrySort: P,
					claimablePointsEnabled: b,
					specialMembershipUpsellsEnabled: h,
					inAwardListingExperiment: u,
					isLoggedIn: d,
					isInTrendingEntrypointExperiment: m,
					isPopular: p,
					listingKey: f,
					renderNSFWContentGate: i && i.isNSFW && !e,
					isTopContentDismissed: r,
					powerupsEnabled: a,
					powerupsTier2Achieved: o,
					sort: g,
					stellarRegistrationBannerEnabled: y,
					subreddit: i,
					subredditAboutInfo: c,
					subredditName: l,
					timeSort: E,
					topContent: _,
					topContentDiscoveryUnit: v,
					topPostsVariant: O,
					isBlacklistedTopContentPage: C,
					isFlairFilter: T,
					walletRegistrationBannerEnabled: j,
					...S
				}
			}), Xe = (e, t) => ({
				onLoadMorePosts: () => {
					e(C.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(O.g)([x.Pb.Posts])),
				refreshFeed: () => e(C.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(v.F)())
			}), $e = Object(c.b)(Qe, Xe), et = Object(s.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), tt = e => i.a.createElement(et, Te({}, e, {
				fallback: i.a.createElement(z.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), nt = Object(s.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("FrontpageSidebar").then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), st = Object(s.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function rt(e) {
				const {
					subreddit: t,
					isSecondEmbedEnabled: n
				} = e;
				return !!t && !!t.name && "second" === t.name.toLowerCase() && n
			}
			class at extends i.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					if (E.a.read(() => {
							Object(y.d)(y.c.Subreddit, this.props.isLoggedIn)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						x.Cb.includes(e) && Object(ae.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(se.c)(se.a.SearchResults) && Object(se.b)(se.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && x.Cb.includes(t) && Object(ae.a)(t)
					}
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(se.c)(se.a.SearchResults) && Object(se.b)(se.a.SearchResults)
				}
				render() {
					const {
						claimablePointsEnabled: e,
						contentGateInfo: t,
						countrySort: n,
						inAwardListingExperiment: s,
						isActionBarAnimationEnabled: r,
						isInTrendingEntrypointExperiment: a,
						isPopular: o,
						isLoggedIn: c,
						layout: d,
						listingKey: m,
						match: h,
						renderNSFWContentGate: g,
						showCreatePostBanner: E,
						sort: y,
						specialMembershipUpsellsEnabled: _,
						isTopContentDismissed: v,
						pageLayer: O,
						powerupsEnabled: C,
						powerupsTier2Achieved: z,
						stellarRegistrationBannerEnabled: Q,
						sendEvent: $,
						subreddit: ne,
						subredditAboutInfo: se,
						subredditName: ae,
						timeSort: ce,
						topContent: de,
						topContentDiscoveryUnit: le,
						topPostsVariant: ue,
						isBlacklistedTopContentPage: me,
						isRpanDuVisible: pe,
						rpanInjectionIndex: be,
						isFlairFilter: he,
						walletRegistrationBannerEnabled: ge,
						isUISimplificationAllItemsVariant: xe
					} = this.props, Ee = Object(b.a)(ae), ye = ae.toLowerCase(), _e = `/r/${ae}/`, ve = {
						listingKey: m,
						listingName: ye
					}, Oe = Object(fe.a)(ue), Ce = Object(fe.b)(ue), je = Object(fe.c)(ue), Se = Object(te.L)(O);
					let Ie;
					Ee ? Ie = Object(p.a)(ae) ? i.a.createElement(Ne, ve) : i.a.createElement(nt, ve) : ne && (Ie = Se ? i.a.createElement(N.a, {
						subredditId: ne.id
					}) : i.a.createElement(Y.a, Te({}, ve, {
						className: Pe.a.sidebar,
						subredditId: ne.id,
						subredditName: ae,
						topPostsVariant: ue
					})));
					const Be = Object(re.a)(t, g, ae);
					if (Be) return i.a.createElement(k.default, Be);
					const Re = d === ee.g.Large,
						Fe = o && a && !xe,
						Me = ne ? ne.id : void 0,
						Ue = !h.params.sort && de && !de.isSubscribed && de.postIds && de.postIds.length >= Le && !v && !me && !Oe && !Ce,
						He = {},
						We = d === ee.g.Classic ? Pe.a.classicChild : d === ee.g.Compact ? Pe.a.compactChild : Pe.a.cardChild;
					if (_ && ne && (He[0] = {
							estHeight: 487,
							id: `newbie-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(A.a, {
								className: Object(u.a)(e, We)
							})
						}, He[3] = {
							estHeight: 256,
							id: `lfg-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(L.a, {
								className: Object(u.a)(e, We),
								subredditId: ne.id
							})
						}), ne && d === ee.g.Large && (He[0] = {
							estHeight: 175,
							id: `community-survey-${d}-${m}`,
							render: () => i.a.createElement(ke.a, {
								subredditId: ne.id
							})
						}), s && ae === X.f && y === x.P.AWARDED && (He[0] = {
							estHeight: 180,
							id: `awardlisting-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(j.a, {
								className: Object(u.a)(e, We)
							})
						}), ge && ne && (He[1] = {
							estHeight: 384,
							id: `wallet-registration-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(F.a, {
								className: Object(u.a)(e, We),
								subredditId: ne.id
							})
						}), Q && ne && (He[2] = {
							estHeight: 200,
							id: `stellar-registration-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(M.a, {
								className: Object(u.a)(e, We),
								subredditId: ne.id
							})
						}), e && ne && (He[2] = {
							estHeight: 268,
							id: `claim-points-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(R.a, {
								className: Object(u.a)(e, We),
								subredditId: ne.id
							})
						}), ne && d === ee.g.Large && C && !z) {
						He[He[2] ? He[3] ? 4 : 3 : 2] = {
							estHeight: 476,
							id: `powerups-perks-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(T.a, {
								className: Object(u.a)(e, We),
								subredditId: ne.id
							})
						}
					}
					if (!o && je && ce !== x.Ub.WEEK && d === ee.g.Large) {
						const e = Object(f.a)(ae, x.P.TOP, {
							t: x.Ub.WEEK
						});
						He[Ae] = {
							estHeight: 0,
							id: `top-week-posts-${d}-${m}`,
							render: ({
								className: t
							}) => i.a.createElement(st, {
								className: t,
								listingKey: e,
								subredditName: ae
							})
						}
					}
					if (pe) {
						const {
							child: e,
							idx: t
						} = Object(K.a)({
							children: He,
							desiredIndex: be,
							layout: d,
							listingKey: m,
							listingName: `r/${ae}`,
							sendEvent: $
						});
						He[t] = e
					}
					const Ve = {
							baseUrl: _e,
							countrySort: n,
							sort: y,
							subredditId: Me,
							timeSort: ce
						},
						qe = he ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ke = ne && ne.subscribers;
					let Ge;
					const ze = window.URL,
						Je = rt(this.props);
					if (Je) {
						const e = new ze(l.a.secondUrl + "/embed");
						e.searchParams.set("platform", "desktop"), this.props.isNightmode && e.searchParams.set("nightmode", "1"), Ge = i.a.createElement("iframe", {
							className: Object(u.a)(Pe.a.af),
							src: e.href,
							"data-testid": "second-embed"
						})
					} else Fe && (Ge = i.a.createElement(tt, {
						showCardView: this.props.layout === ee.g.Large
					}));
					return i.a.createElement(J.a, {
						subredditId: Me
					}, i.a.createElement(ie.a, {
						subredditId: Me,
						className: Object(u.a)(Pe.a.Container, this.props.className),
						fitPageToContent: !0,
						noSidebarTopMargin: Je,
						navBar: !Ee && i.a.Children.toArray([i.a.createElement(U.a, {
							headerText: ne ? ne.name : ae,
							disableFullscreen: Re,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: ne,
							url: _e
						}), i.a.createElement(S.a, {
							layout: d,
							key: "idtopbar",
							subreddit: ne || void 0,
							subredditId: Me,
							subredditName: ae,
							subredditUrl: _e
						})]),
						trendingUnit: Ge,
						content: i.a.createElement(i.a.Fragment, null, ne && ne.isQuarantined && i.a.createElement(W.a, {
							subredditName: ae
						}), ne && E && i.a.createElement(I.a, {
							subreddit: ne,
							listingKey: m,
							listingName: ye
						}), Fe && i.a.createElement(G.a, {
							className: Pe.a.duHeader
						}, we._("Popular posts", null, {
							hk: "Gfyj2"
						})), Ue && i.a.createElement(De, {
							discoveryUnit: le,
							subredditName: ne ? ne.name : ae,
							topContent: de,
							onCloseClick: this.onTopContentDismissed
						}), !Ee && c && !(se && se.userIsBanned) && !Se && i.a.createElement(H.a, {
							subredditName: ae
						}), !Se && i.a.createElement(D.a, Ve), ne && i.a.createElement(P.a, {
							subreddit: ne
						}), i.a.createElement(V.a, null), i.a.createElement(Z.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: m,
							subredditName: ae,
							subscriberCount: Ke
						}), Se && i.a.createElement(w.a, {
							subreddit: ne
						}), i.a.createElement(q.a, {
							injectChildren: He,
							listingKey: m,
							listingName: ye,
							listingViewed: (e, t) => Object(oe.f)(m, y, t, e, ce),
							noPostsComponent: () => i.a.createElement(B.a, {
								isPredictionsPage: Se,
								listingName: ye,
								sort: y,
								subreddit: ne
							}),
							onLoadMore: qe,
							inSubredditOrProfile: !Ee,
							disablePlaceholder: ae === X.f && y === x.P.AWARDED,
							isActionBarAnimationEnabled: r
						})),
						sidebar: Ie
					}))
				}
			}
			t.default = Be($e(Object(Q.c)(at)))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const a = [];
			var o = (e = a, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				i = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case i.c:
					case i.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case i.d:
						case i.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(s.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				h = n("./node_modules/lodash/uniqBy.js"),
				f = n.n(h),
				g = n("./node_modules/lodash/values.js"),
				x = n.n(g),
				E = n("./src/reddit/actions/comment/constants.ts"),
				y = n("./src/reddit/actions/comment/websocket/constants.ts");
			const _ = {};

			function v(e) {
				return f()(e, "id").sort((e, t) => e.created - t.created)
			}
			var O = (e = _, t) => {
					switch (t.type) {
						case i.f:
						case E.u:
						case i.b: {
							const {
								comments: n,
								key: s
							} = t.payload, r = e[s] ? e[s] : [], a = function(e, t) {
								return x()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), o = v([...r, ...a]);
							return {
								...e,
								[s]: [...o]
							}
						}
						case y.b:
						case y.c:
						case y.d:
						case E.G:
						case E.F: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: r,
									authorId: a
								},
								commentsPageKey: o,
								isChatSort: i
							} = t.payload;
							return !1 === i ? e : {
								...e,
								[o]: [...v([...e[o] ? e[o] : [], {
									id: n,
									created: s,
									stickied: r,
									authorId: a
								}])]
							}
						}
						default:
							return e
					}
				},
				C = n("./node_modules/lodash/mapValues.js"),
				j = n.n(C),
				S = n("./src/reddit/helpers/commentList/index.ts"),
				k = n("./src/reddit/models/Comment/index.ts");
			const I = {};

			function P(e) {
				const t = e;
				return j()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var T = (e = I, t) => {
				switch (t.type) {
					case E.u: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: r,
							key: a,
							moreCommentsItem: o,
							moreComments: i
						} = t.payload, c = s[o.postId], d = e[a], l = {}, u = d[o.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(S.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								}),
								t = Object(S.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[a]: {
								...e[a],
								...P(n),
								...P(r),
								...P(i),
								...l
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: n,
							continueThreads: s,
							key: r,
							moreComments: a
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...P(n),
								...P(s),
								...P(a)
							}
						}
					}
					case y.b:
						const {
							comment: n, commentsPageKey: s, depth: r, headCommentId: a, originId: o, isChatSort: c
						} = t.payload, d = e[s], l = {};
						let u = null;
						if (c) return a && (l[a] = {
							...d[a],
							prev: Object(k.g)(n.id)
						}, u = Object(k.g)(a)), {
							...e,
							[s]: {
								...e[s],
								...l,
								[n.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const a = n.parentId;
							if (o && a) {
								const n = "moreComments-" + o;
								if (d[a] && !d[n]) {
									const o = d[a].next;
									return o && (l[o.id] = {
										...d[o.id],
										prev: Object(k.h)(n)
									}, u = o), l[a] = {
										...d[a],
										next: Object(k.h)(n)
									}, t = Object(k.g)(a), {
										...e,
										[s]: {
											...e[s],
											...l,
											[n]: {
												depth: r || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case E.G: {
							const {
								comment: n,
								commentsPageKey: s,
								headCommentId: r
							} = t.payload, a = e[s], o = {};
							let i = null;
							return r && (o[r] = {
								...a[r],
								prev: Object(k.g)(n.id)
							}, i = Object(k.g)(r)), {
								...e,
								[s]: {
									...e[s],
									...o,
									[n.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								}
							}
						}
						case E.F: {
							const {
								comment: n,
								commentsPageKey: s,
								parentCommentId: r,
								depth: a
							} = t.payload, o = e[s], i = {};
							let c = null;
							if (!o[r]) return e;
							const d = o[r].next;
							return d && (i[d.id] = {
								...o[d.id],
								prev: Object(k.g)(n.id)
							}, c = d), i[r] = {
								...o[r],
								next: Object(k.g)(n.id)
							}, {
								...e,
								[s]: {
									...e[s],
									...i,
									[n.id]: {
										depth: a,
										next: c,
										prev: Object(k.g)(r)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const w = {};
			var N = (e = w, t) => {
				switch (t.type) {
					case y.b:
					case y.c:
					case E.G: {
						const {
							comment: n,
							commentsPageKey: s,
							isChatSort: r
						} = t.payload;
						return !1 === r ? e : {
							...e,
							[s]: n.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: n,
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: n[r] && n[r].head ? n[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var A = (e = L, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case E.G: {
						const {
							parentId: n,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: b,
				keyToChatCommentLinks: O,
				keyToCommentThreadLinkSets: T,
				keyToHeadCommentId: N,
				keyToPostId: A,
				ads: o
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(c.a, (e, {
					listingName: t
				}) => {
					const n = Object(i.ub)(e);
					if (!n) return !1;
					let s;
					if (-1 === [a.R, "r/popular"].indexOf(t)) {
						const r = t.replace(/^r\//, ""),
							a = Object(o.F)(e, r),
							i = n.subreddit[a];
						if (!i) return !1;
						s = i
					} else s = n;
					if (!s.rpanDuDismissalTime) return !1;
					return new Date(s.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.x
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, n, s, a, o) => o !== r.P.AWARDED && (!!e && (!a.isPermanentlyCanceled && (!t && (!!s && s.show_discovery_unit))))),
				u = Object(s.a)((e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.l, (e, t, n) => t ? t.discovery_unit_index : a.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return v
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "b", (function() {
				return H
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "g", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(r.a)(Object(s.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				x = e => e.publicAccessNetwork.hlsStreams,
				E = Object(s.a)(x, e => e.ended),
				y = Object(s.a)(x, e => e.removed),
				_ = Object(s.a)(p, E, y, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = R(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !0 === a ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = R(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !1 === a ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				v = (e, t) => {
					return _(e)[Object(a.g)(t)]
				},
				O = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), _, b, i.h, (e, t, n, s, r) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						n[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...s, ...r]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				C = Object(s.a)((e, {
					count: t
				}) => t, _, (e, {
					listingName: t,
					streamIdFromPath: n
				}) => O(e, {
					listingName: t,
					streamIdFromPath: n
				}), (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				j = Object(s.a)(_, C, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				S = Object(s.a)(g, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => C(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				k = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, _, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => C(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), h, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				I = Object(r.a)(Object(s.a)(k, _, (e, t) => e ? t[e] : void 0)),
				P = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, k, b, i.h, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => C(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				T = Object(s.a)(f, g, S, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				w = Object(s.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				N = Object(r.a)(Object(s.a)(P, _, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(s.a)(T, _, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)(Object(s.a)(w, _, (e, t) => e ? t[e] : void 0)),
				B = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				D = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? v(e, t) : void 0, e => !e || e.chat_disabled);

			function R(e, t) {
				const n = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const F = Object(s.a)(P, h, (e, t) => e && t.timestamps[e] || 0);
			var M;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const U = Object(s.a)(P, _, m.b, (e, t, n) => {
					if (n) return M.INTRO;
					const s = e && t[e];
					if (!s) return M.UNAVAILABLE;
					const r = s.stream.state;
					return r === o.a.IS_LIVE || r === o.a.DISCONNECTED ? M.LIVE : r === o.a.ENDED && s.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				H = Object(s.a)(N, U, m.b, c.b, c.o, (e, t, n, s, r) => n ? s : e ? t === M.LIVE || t === M.VOD ? e.stream.hls_url : r : void 0),
				W = Object(s.a)(N, U, F, (e, t, n) => e ? t === M.LIVE ? e.broadcast_time : t === M.VOD && n < e.broadcast_time ? n : 0 : 0),
				V = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(s.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "G", (function() {
				return j
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "t", (function() {
				return B
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "I", (function() {
				return R
			})), n.d(t, "s", (function() {
				return F
			})), n.d(t, "B", (function() {
				return M
			})), n.d(t, "C", (function() {
				return U
			})), n.d(t, "E", (function() {
				return H
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "e", (function() {
				return V
			})), n.d(t, "v", (function() {
				return q
			})), n.d(t, "J", (function() {
				return K
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "F", (function() {
				return J
			})), n.d(t, "A", (function() {
				return Y
			})), n.d(t, "H", (function() {
				return Z
			})), n.d(t, "p", (function() {
				return Q
			})), n.d(t, "K", (function() {
				return X
			})), n.d(t, "D", (function() {
				return $
			})), n.d(t, "y", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeCommentPermalink/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				c = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/lib/initializeClient/installReducer.ts"),
				h = n("./src/reddit/reducers/features/comments/index.ts"),
				f = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: h.a
				},
				pages: {
					comments: f.a
				}
			});
			const g = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				E = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				y = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				_ = (e, t) => {
					const n = y(e, t);
					if (n) return Object(p.a)(e, {
						commentId: n
					})
				},
				v = [],
				O = Object(i.a)((e, t) => {
					const n = _(e, t),
						s = n && n.id;
					if (!s) return v;
					const {
						commentsPageKey: r
					} = t, a = e.pages.comments.keyToCommentThreadLinkSets[r], o = [];
					let i = {
						id: s,
						type: c.a.Comment
					};
					do {
						o.push(i), i = a[i.id].next
					} while (i);
					return o
				}),
				C = (e, t) => y(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				j = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				S = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[s];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				k = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				I = (e, t) => {
					const n = t.commentsPageKey ? S(e, t) : null;
					return n ? n.depth : null
				},
				P = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: s
					} = t;
					switch (s) {
						case c.a.Comment:
							return e.features.comments.models[n];
						case c.a.MoreComments:
							return e.moreComments.models[n];
						case c.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				T = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== a.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				w = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				N = e => e.moreComments.models,
				L = e => e.features.comments.models,
				A = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
						commentId: t
					});
					return n ? Object(o.a)(Object(l.C)(e, n), t) : ""
				},
				B = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				R = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				F = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						r = Object(p.a)(e, {
							commentId: s
						}),
						a = r && I(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof a) return {
						...r,
						depth: a
					}
				},
				M = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				U = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				H = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = r()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				W = (e, {
					id: t
				}) => e.continueThreads.models[t],
				V = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				q = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				K = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				G = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				z = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				J = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				Y = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				Z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Q = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const n = Object(p.a)(e, t);
					if (n) return Object(u.Y)(e, n)
				},
				$ = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
							commentId: t
						}),
						s = n && n.authorId || "";
					return Object(m.R)(e, s)
				}
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = e => s.qb.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: a.J,
				experimentName: s.pb
			})
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/meta.ts");
			const o = e => Object(r.c)(e, {
				experimentEligibilitySelector: e => !Object(a.d)(e) && "US" === Object(a.b)(e),
				experimentName: s.Qc
			}) === s.Zc.Enabled
		},
		"./src/reddit/selectors/experiments/second.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.kd.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.cd
				}),
				o = e => s.jd.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.bd
				})
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = e => Object(a.G)(e) || !(s.td.Holdout === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.qd
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/utils.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = ["AU", "CA", "GB", "US"],
				i = new Set([s.Wb.AllItems, s.Wb.TrendingSearch]),
				c = e => {
					const t = Object(a.c)(e, {
						experimentEligibilitySelector: Object(r.d)(Object(r.b)(...o)),
						experimentName: s.Xb
					});
					return i.has(t)
				},
				d = e => s.Wb.AllItems === Object(a.c)(e, {
					experimentEligibilitySelector: Object(r.d)(Object(r.b)(...o)),
					experimentName: s.Xb
				})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: s.fd
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.md.SmIcon || t === s.md.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = Object(o.X)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.99a487659e99824f7109.js.map