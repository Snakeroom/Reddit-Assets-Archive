// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a.5638d65c23c1a21cdb17.js
// Retrieved at 1/18/2020, 7:00:24 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"], {
		"./src/lib/timezone/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "f", (function() {
				return l
			})), o.d(t, "g", (function() {
				return d
			})), o.d(t, "c", (function() {
				return u
			}));
			o("./node_modules/core-js/modules/es6.regexp.replace.js"), o("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/reddit/models/PostCreationForm/index.ts");
			const c = "America/Los_Angeles",
				r = () => {
					let e;
					try {
						e = Intl.DateTimeFormat().resolvedOptions().timeZone
					} catch (t) {}
					return "Asia/Calcutta" === e && (e = "Asia/Kolkata"), e || void 0
				},
				i = e => {
					const t = Math.abs(e),
						o = t % 60,
						n = e > 0 ? "-" : "+",
						s = ("0" + Math.floor(t / 60)).slice(-2),
						c = ("0" + o).slice(-2);
					return "".concat(n).concat(s, ":").concat(c)
				},
				a = (e, t) => {
					const o = t || Date.now(),
						s = {
							year: "numeric",
							month: "numeric",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
							second: "numeric",
							timeZoneName: "short",
							hour12: !1,
							timeZone: e
						};
					let c = "";
					try {
						c = new Intl.DateTimeFormat("en-US", s).format(new Date(o))
					} catch (f) {
						return
					}
					const [r, i, a] = c.replace(", ", " ").split(" "), [l, d, u] = r.trim().split("/").map(Number), [p, b, m] = i.trim().split(":").map(Number), O = Date.UTC(u, l - 1, d, p, b, m), j = new Date(o).setMilliseconds(0) - O;
					return {
						abbreviation: a,
						offset: Math.round(j / n.cb)
					}
				},
				l = e => {
					const t = e.slice(0, 19),
						[o, n] = t.split("T"),
						[s, c, r] = o.split("-").map(Number),
						[i, a, l = 0] = n.split(":").map(Number);
					return new Date(s, c - 1, r, i, a, l)
				},
				d = e => {
					const t = new Date(e);
					return t.setMinutes(t.getMinutes() - t.getTimezoneOffset()), t.toISOString().slice(0, 16)
				},
				u = e => {
					if (e && e.eventInfo) {
						const {
							eventStart: t,
							eventEnd: o
						} = e.eventInfo;
						return {
							startDate: d(new Date(t * n.Bb)),
							endDate: d(new Date(o * n.Bb)),
							submitTime: s.i.Now,
							timezoneName: r() || c
						}
					}
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/react-router-redux/es/index.js"),
				s = o("./src/app/strings/index.ts"),
				c = o("./src/lib/filterQueryParams/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/reddit/actions/postCollection/constants.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/history.ts"),
				d = o("./src/lib/constants/index.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				p = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var m = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var O = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/create_collection.json"),
				method: d.bb.POST,
				data: {
					title: t,
					sr_fullname: o
				}
			});
			var j = (e, t) => Object(u.b)(Object(p.a)(e, [b.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: d.bb.POST,
					data: {
						collection_id: t
					}
				}),
				f = o("./src/config.ts");
			var g = (e, t) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(f.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(t),
				method: d.bb.GET
			});
			var x = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var h = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					title: o
				}
			});
			var w = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_ids: o.join(",")
				}
			});
			var C = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var v = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: d.bb.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				_ = o("./src/reddit/helpers/overlay/index.ts"),
				I = o("./src/reddit/helpers/path/index.ts"),
				y = o("./src/reddit/models/Toast/index.ts"),
				E = o("./src/reddit/selectors/postCollection.ts"),
				k = o("./src/reddit/selectors/posts.ts"),
				M = o("./src/reddit/selectors/subreddit.ts");
			o.d(t, "b", (function() {
				return D
			})), o.d(t, "e", (function() {
				return L
			})), o.d(t, "g", (function() {
				return B
			})), o.d(t, "a", (function() {
				return z
			})), o.d(t, "c", (function() {
				return W
			})), o.d(t, "h", (function() {
				return Z
			})), o.d(t, "f", (function() {
				return H
			})), o.d(t, "d", (function() {
				return ne
			}));
			const S = Object(r.a)(i.c),
				P = Object(r.a)(i.b),
				T = Object(r.a)(i.d),
				D = (e, t) => async (o, n, s) => {
					let {
						apiContext: c
					} = s;
					o(S());
					const r = await O(c(), e, t);
					let i;
					if (r.ok) {
						const e = n().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(r.body);
						o(T({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						o(P(e))
					}
					return i
				}, N = Object(r.a)(i.f), L = e => async (t, o, n) => {
					let {
						apiContext: c
					} = n;
					const r = o(),
						i = r.postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const l = await g(c(), e);
					l.ok ? t(N(l.body)) : t(Object(a.e)({
						kind: y.b.Error,
						text: Object(s.a)(r.user.language, "error.type.generic")
					}))
				}, A = Object(r.a)(i.g), B = (e, t, o) => async (n, c, r) => {
					let {
						apiContext: i
					} = r;
					if ((await x(i(), e, t)).ok) {
						const r = c(),
							i = Object(k.J)(r, {
								postId: t
							}),
							l = i && i.title || "",
							d = Object(E.q)(r, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (n(A({
								collectionId: e,
								postId: t
							})), o && u >= 0) {
							const t = c(),
								o = Object(E.q)(t, {
									collectionId: e
								}),
								s = o && o.postIds && o.postIds[u] || "",
								r = Object(k.J)(t, {
									postId: s
								});
							r && r.permalink && n(Object(_.a)(r.permalink))
						}
						n(Object(a.e)({
							kind: y.b.SuccessMod,
							text: Object(s.a)(r.user.language, "collection.postRemovedSuccess", {
								postTitle: l
							}),
							buttonText: Object(s.a)(r.user.language, "collection.undo"),
							buttonAction: z(e, t)
						}))
					} else {
						const e = c();
						n(Object(a.e)({
							kind: y.b.Error,
							text: Object(s.a)(e.user.language, "error.type.generic")
						}))
					}
				}, U = Object(r.a)(i.a), R = Object(r.a)(i.t), z = (e, t) => async (o, n, c) => {
					let {
						apiContext: r
					} = c;
					const i = n();
					if ((await m(r(), e, t)).ok) {
						o(U({
							collectionId: e,
							postId: t
						})), o(R({
							collectionId: e,
							postId: t
						}));
						const n = Object(k.J)(i, {
								postId: t
							}),
							c = Object(E.q)(i, {
								collectionId: e
							}),
							r = c && c.title || "";
						o(Object(a.e)({
							kind: y.b.SuccessMod,
							text: Object(s.a)(i.user.language, "collection.postAddedSuccess", {
								title: r
							}),
							buttonText: Object(s.a)(i.user.language, "collection.view"),
							buttonAction: Object(_.a)(n.permalink)
						}))
					} else o(Object(a.e)({
						kind: y.b.Error,
						text: Object(s.a)(i.user.language, "error.type.generic")
					}))
				}, K = Object(r.a)(i.e), W = (e, t) => async (o, r, i) => {
					let {
						apiContext: l
					} = i;
					const d = r();
					if ((await j(l(), e)).ok) {
						const {
							url: r
						} = d.platform.currentPage, i = Object(E.q)(d, {
							collectionId: e
						}), l = i && i.title || "", u = i && i.subredditId, p = u ? Object(M.c)(d, u) : "/";
						o(K({
							collectionId: e,
							collection: i
						})), o(t ? Object(n.c)(Object(c.a)(r, ["collection"])) : Object(n.b)(p)), o(Object(a.e)({
							kind: y.b.SuccessMod,
							text: Object(s.a)(d.user.language, "collection.collectionDeletedSuccess", {
								title: l
							})
						}))
					} else o(Object(a.e)({
						kind: y.b.Error,
						text: Object(s.a)(d.user.language, "error.type.generic")
					}))
				}, q = Object(r.a)(i.r), F = Object(r.a)(i.n), G = Object(r.a)(i.s), Z = (e, t) => async (o, n, c) => {
					let {
						apiContext: r
					} = c;
					o(q());
					const i = await h(r(), e, t);
					let l = !1;
					const d = n();
					if (i.ok) o(G({
						collectionId: e,
						newTitle: t
					})), o(Object(a.e)({
						kind: y.b.SuccessMod,
						text: Object(s.a)(d.user.language, "collection.editModal.titleUpdateSuccess")
					})), l = !0;
					else {
						const e = i.error;
						o(F(e)), o(Object(a.e)({
							kind: y.b.Error,
							text: Object(s.a)(d.user.language, "error.type.generic")
						}))
					}
					return l
				}, V = Object(r.a)(i.l), J = Object(r.a)(i.m), Q = Object(r.a)(i.k), H = e => async (t, o) => {
					const s = o().platform.currentPage.locationState;
					t(!(!s || !s[l.a.IsOverlay]) ? Object(_.a)(e.permalink) : Object(n.b)(Object(I.b)(e.permalink)))
				}, Y = Object(r.a)(i.i), X = Object(r.a)(i.j), $ = Object(r.a)(i.h), ee = Object(r.a)(i.p), te = Object(r.a)(i.o), oe = Object(r.a)(i.q), ne = e => async t => {
					const o = [],
						{
							collectionId: n,
							description: c,
							displayLayout: r,
							postIds: i,
							title: l
						} = e;
					i && o.push(t(((e, t) => async (o, n, c) => {
						let {
							apiContext: r
						} = c;
						o(Y());
						const i = await w(r(), e, t);
						let l = !1;
						const d = n();
						return i.ok ? (o(X({
							collectionId: e,
							postIds: t
						})), o(Object(a.e)({
							kind: y.b.SuccessMod,
							text: Object(s.a)(d.user.language, "collection.editModal.reorderCollectionSuccess")
						})), l = !0) : (o($({
							error: i.error
						})), o(Object(a.e)({
							kind: y.b.Error,
							text: Object(s.a)(d.user.language, "error.type.generic")
						}))), l
					})(n, i))), l && o.push(t(Z(n, l))), void 0 !== c && o.push(t(((e, t) => async (o, n, c) => {
						let {
							apiContext: r
						} = c;
						o(V());
						const i = await C(r(), e, t);
						let l = !1;
						const d = n();
						if (i.ok) o(J({
							collectionId: e,
							newDescription: t
						})), o(Object(a.e)({
							kind: y.b.SuccessMod,
							text: Object(s.a)(d.user.language, "collection.editModal.descriptionUpdateSuccess")
						})), l = !0;
						else {
							const e = i.error;
							o(Q(e)), o(Object(a.e)({
								kind: y.b.Error,
								text: Object(s.a)(d.user.language, "error.type.generic")
							}))
						}
						return l
					})(n, c))), r && o.push(t(((e, t) => async (o, n, c) => {
						let {
							apiContext: r
						} = c;
						o(ee());
						const i = await v(r(), e, t);
						let l = !1;
						const d = n();
						if (i.ok) o(oe({
							collectionId: e,
							newLayout: t
						})), o(Object(a.e)({
							kind: y.b.SuccessMod,
							text: Object(s.a)(d.user.language, "collection.editModal.layoutUpdateSuccess")
						})), l = !0;
						else {
							const e = i.error;
							o(te(e)), o(Object(a.e)({
								kind: y.b.Error,
								text: Object(s.a)(d.user.language, "error.type.generic")
							}))
						}
						return l
					})(n, r)));
					let d = !0;
					return await Promise.all(o).then(e => {
						e.forEach(e => {
							e || (d = !1)
						})
					}), d
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, o) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				c = o("./src/higherOrderComponents/asModal/index.tsx"),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = o("./src/reddit/controls/TextButton/index.tsx"),
				a = o("./src/reddit/i18n/utils.ts"),
				l = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = o.n(d);
			const p = e => e.preventDefault();
			t.a = Object(c.a)(e => s.a.createElement(r.c, null, s.a.createElement(r.g, null, s.a.createElement(l.a, null, s.a.createElement(r.n, null, e.headerText || Object(a.c)("Confirm")), s.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(r.b, null)))), s.a.createElement(r.j, null, s.a.createElement(r.m, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(r.e, null, s.a.createElement(r.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(a.c)("Cancel")), s.a.createElement(r.r, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = o("./node_modules/react/index.js"),
				c = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				a = o("./src/higherOrderComponents/asTooltip.tsx"),
				l = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = o("./src/lib/fastdom/index.ts"),
				p = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = o("./src/reddit/selectors/tooltip.ts"),
				m = o("./src/reddit/components/ContentTooltip/index.m.less"),
				O = o.n(m);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (o[n[s]] = e[n[s]])
				}
				return o
			};
			const g = {
					height: 200,
					width: 200
				},
				x = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				h = Object(d.a)(e => {
					const {
						children: t,
						className: o,
						style: n,
						caretPosition: s,
						caretColor: r
					} = e, i = f(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return c.a.createElement("div", j({
						className: Object(l.a)(o, O.a.StyledTooltipContainer, {
							[O.a.caretOnTop]: "top" === s,
							[O.a.caretOnLeft]: "left" === s,
							[O.a.caretOnRight]: "right" === s,
							[O.a.caretOnBottom]: "bottom" === s
						}),
						style: Object.assign({}, n, {
							"--contentTooltip-caretColor": r && r[s] ? r[s] : Object(p.a)(e).body
						})
					}, i), t)
				}),
				w = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(b.b)(o)(e)
					}
				}),
				C = Object(a.a)(h, [n.a.Click, n.a.Keydown]),
				v = Object(r.b)(w);
			class _ extends c.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = g
						} = this.props;
						u.a.read(() => {
							const o = document.getElementById(e);
							if (!o) return;
							const n = o.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									s = n.left > t.width;
									break;
								case "right":
									s = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = n.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: o,
						caretPosition: n
					} = this.getPositions(e);
					return c.a.createElement(C, j({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = v(_)
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return C
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				c = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/actions/tooltip.ts"),
				d = o("./src/reddit/i18n/utils.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				m = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				O = o("./src/reddit/selectors/tooltip.ts"),
				j = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(j);
			const g = a.a.wrapped(p.a, "_Dropdown", f.a),
				x = Object(u.a)(g),
				h = a.a.button("MenuButton", f.a),
				w = a.a.wrapped(m.a, "MenuIcon", f.a),
				C = a.a.wrapped(b.b, "DropdownRow", f.a),
				v = Object(r.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(O.b)(o)(e)
					}
				}),
				_ = Object(c.b)(v, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(l.g)({
							tooltipId: o
						}))
					}
				}),
				I = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => s.a.createElement(h, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(d.c)("more options"),
				className: Object(i.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: I(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : s.a.createElement(w, null), s.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, o) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-redux/es/index.js"),
				s = o("./node_modules/reselect/es/index.js"),
				c = o("./src/reddit/actions/subscription/index.ts"),
				r = o("./src/reddit/selectors/monthsToMinutes.ts"),
				i = o("./src/reddit/selectors/subreddit.ts"),
				a = o("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(s.c)({
				language: a.S,
				subscribeReminderTooltipId: r.C,
				subscribeTooltipId: r.D,
				userIsSubscriber: i.cb
			}), (e, t) => {
				let {
					identifier: o
				} = t;
				return {
					onSubscribe: () => e(c.d([o], !0)),
					onSubscriptionsRequested: () => e(c.e()),
					onUnsubscribe: () => e(c.d([o], !1))
				}
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return f
			}));
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/lodash/throttle.js"),
				s = o.n(n),
				c = o("./node_modules/react/index.js"),
				r = o.n(c),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = o("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = o("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = o("./src/reddit/controls/Dropdown/index.m.less"),
				p = o.n(u),
				b = o("./src/reddit/controls/Dropdown/row.m.less"),
				m = o.n(b);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (o[n[s]] = e[n[s]])
				}
				return o
			};
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, o = Object(i.a)(m.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(a.a, O({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && r.a.createElement("span", {
						className: o
					}, e.children), r.a.createElement("span", {
						className: Object(i.a)(m.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(d.a, O({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: o
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(i.a)(m.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && r.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, o = j(e, ["className"]);
				const n = Object(i.a)(m.a.row, t, {
					[m.a.mIsInteractive]: !o.noHover,
					[m.a.mIsSelected]: o.isSelected
				});
				return r.a.createElement(f, O({
					className: n
				}, o))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, o) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, o) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				c = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = o.n(r);
			t.a = e => {
				let {
					center: t,
					className: o,
					sizePx: n
				} = e;
				return s.a.createElement("div", {
					className: Object(c.a)(i.a.loadingIcon, o, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, o) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				s = o("./src/reddit/controls/InternalLink/index.tsx"),
				c = o("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = o.n(c);
			t.a = n.a.wrapped(s.a, "unstyledInternalLink", r.a)
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "g", (function() {
				return d
			})), o.d(t, "o", (function() {
				return u
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "n", (function() {
				return O
			})), o.d(t, "m", (function() {
				return j
			})), o.d(t, "b", (function() {
				return g
			})), o.d(t, "p", (function() {
				return x
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "j", (function() {
				return w
			})), o.d(t, "q", (function() {
				return C
			})), o.d(t, "k", (function() {
				return v
			})), o.d(t, "l", (function() {
				return _
			})), o.d(t, "i", (function() {
				return I
			})), o.d(t, "d", (function() {
				return y
			}));
			var n, s, c = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/trackers/postEvent.ts"),
				i = o("./src/reddit/selectors/platform.ts"),
				a = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(s || (s = {}));
			const l = e => t => Object.assign({
					source: n.collection,
					noun: s.post
				}, p(t, e)),
				d = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => Object.assign({
						source: n.collection,
						noun: o ? s.unfollow : s.follow
					}, p(e, t))
				},
				u = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => Object.assign({
						source: r.a.postEvent,
						noun: o ? s.unfollow : s.follow
					}, p(e, t))
				},
				p = (e, t) => {
					const o = Object.assign({}, a.defaults(e), {
						action: c.c.CLICK,
						subreddit: a.subreddit(e)
					});
					return void 0 === t ? o : Object.assign({}, o, {
						post: a.post(e, t),
						postCollection: a.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: a.postEventI13nSelector(e, {
							postId: t
						})
					})
				},
				b = e => Object.assign({}, f(e), {
					action: c.c.VIEW,
					noun: s.collectionEducation
				}),
				m = e => Object.assign({}, f(e), {
					action: c.c.CLICK,
					noun: s.collectionEducationGotIt
				}),
				O = e => Object.assign({}, f(e), {
					action: c.c.VIEW,
					noun: s.eventEducation
				}),
				j = e => Object.assign({}, f(e), {
					action: c.c.CLICK,
					noun: s.eventEducationGotIt
				}),
				f = e => Object.assign({}, a.defaults(e), {
					subreddit: a.subreddit(e),
					source: n.postComposer
				}),
				g = (e, t) => o => Object.assign({}, p(o, e), {
					source: t || n.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				x = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: s.collectionRemovePost
				}),
				h = () => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: s.collectionCancel
				}),
				w = () => e => {
					const t = Object(i.o)(e) || void 0;
					return Object.assign({}, p(e, t), {
						source: n.collectionComposer,
						noun: s.collectionCreate
					})
				},
				C = () => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: s.collectionSelect
				}),
				v = e => t => Object.assign({}, a.defaults(t), {
					subreddit: a.subreddit(t),
					source: n.collectionComposer,
					action: c.c.CLICK,
					noun: s.collectionDelete,
					postCollection: a.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				_ = e => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: s.collectionEdit,
					postCollection: a.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				I = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: s.startEvent
				}),
				y = () => e => {
					const t = Object(i.o)(e) || void 0;
					return Object.assign({}, p(e, t), {
						source: n.collectionComposer,
						action: c.c.VIEW,
						noun: s.screen
					})
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "g", (function() {
				return O
			})), o.d(t, "e", (function() {
				return j
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "c", (function() {
				return g
			})), o.d(t, "d", (function() {
				return x
			}));
			var n, s = o("./src/lib/constants/index.ts"),
				c = o("./src/lib/eventTools/index.ts"),
				r = o("./src/lib/timezone/index.ts"),
				i = o("./src/reddit/constants/tracking.ts"),
				a = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				p = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const b = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				m = e => {
					Object(p.a)(Object.assign({}, u.defaults(e), {
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					}))
				},
				O = e => {
					Object(p.a)(Object.assign({}, u.defaults(e), {
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: h(e),
						postComposer: w(e)
					}))
				},
				j = () => e => ({
					source: n.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: b(e),
					postEvent: h(e)
				}),
				f = e => t => Object.assign({}, _(t, Object(l.o)(t)), {
					source: n.postComposer,
					noun: "apply",
					postComposer: C(e)
				}),
				g = () => e => Object.assign({}, _(e, Object(l.o)(e)), {
					noun: "cancel",
					actionInfo: b(e)
				}),
				x = e => t => Object.assign({}, _(t, Object(l.o)(t)), {
					noun: "delete",
					actionInfo: b(t),
					postComposer: w(t),
					postEvent: v(e)
				}),
				h = e => {
					const t = Object(d.o)(e);
					return t && v(t)
				},
				w = e => C(Object(d.o)(e)),
				C = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === a.i.AtEventTime ? Object(r.f)(e.startDate).getTime() / s.Bb : void 0
					}
				},
				v = e => {
					const t = Object(r.f)(e.startDate).getTime() / s.Bb,
						o = Object(r.f)(e.endDate).getTime() / s.Bb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(c.e)(t, o)
					}
				},
				_ = (e, t) => {
					const o = {
						source: n.eventComposer,
						action: i.c.CLICK,
						subreddit: u.subreddit(e)
					};
					return t ? Object.assign({}, o, {
						post: u.post(e, t),
						postEvent: u.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: u.postCollectionI13nSelector(e, {
							postId: t
						})
					}) : o
				}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, o) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = o.n(r);
			const a = o("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(c.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, o) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = o.n(r);
			const a = o("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(c.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = a
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					fillRule: "evenodd"
				}, s.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), s.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a.5638d65c23c1a21cdb17.js.map