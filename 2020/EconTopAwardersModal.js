// https://www.redditstatic.com/desktop2x/EconTopAwardersModal.9e147b5b750ce1d6b62e.js
// Retrieved at 9/30/2020, 5:50:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconTopAwardersModal"], {
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, a, t) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./node_modules/react/index.js"),
				s = t.n(r),
				o = t("./src/higherOrderComponents/asModal/index.tsx"),
				c = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = t("./src/reddit/controls/TextButton/index.tsx"),
				l = t("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				i = t("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = t.n(i);
			const p = e => e.preventDefault();
			a.a = Object(o.a)(e => s.a.createElement(c.d, null, s.a.createElement(c.h, null, s.a.createElement(l.a, null, s.a.createElement(c.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(c.b, null)))), s.a.createElement(c.k, null, s.a.createElement(c.o, {
				className: m.a.ModalText
			}, e.modalText)), s.a.createElement(c.f, null, !e.hideCancelButton && s.a.createElement(c.a, {
				className: m.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(c.t, {
				className: m.a.buttonWidth,
				onMouseDown: p,
				onClick: a => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less": function(e, a, t) {
			e.exports = {
				container: "_2pf8RDPiuLI11feFkyJfzL",
				rank: "C6yq8ik3t6MjtQo2ydsVQ",
				icon: "hmt4YTjn1UkTBP0j-yqKO",
				text: "erHzuL7lOcIsOZRJFi0Ab",
				name: "_1ZbORZi2Ps08zKjxVdM-_O",
				score: "_2run8DYGOjw8M-mRZIHPh5",
				cta: "_23fX84eyay1eyi8y1QD82",
				giftIcon: "_19IVO8CX5HqwA9LJGZ3ni4"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less": function(e, a, t) {
			e.exports = {
				awarder: "_3WyMnKxtBhvXwCnMKXO7BT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less": function(e, a, t) {
			e.exports = {
				winner: "_14h4WLAmaXglzXtkdGBV60",
				iconContainer: "_1K0xQSCqkgTZhrjq9B2JjB",
				iconWithBorder: "HFi2HvywaYoUETbnXBiV0",
				rank: "gBgkEGJTqu828VrLjP4GY",
				winner1: "_1i0r2VkvzMeFv1QM2MLL0S",
				winner2: "_3mdPqaOiJQsRf5hRnlkrP6",
				winner3: "_1D2u2915axrF7XBM259lDo",
				winnerPlaceholder: "_2WvSa3DFzfwX3Mr3vZ9jkQ",
				icon: "_3iZA-fG9UG3Xa8kXU0x6iv",
				name: "_2Gq1opbxAW64HEQKSsc5TS",
				hoverCardWrapper: "_2mh2gW6yIBCx2s_pL7UKzX",
				score: "_2nY21lzw3wRpMT9lN2mgyA",
				coinIcon: "_29wjryAiJEoczrIw3gPrQT"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less": function(e, a, t) {
			e.exports = {
				container: "_1NrpBgoPY-jeGboQdLnvIe",
				winner: "_3nP2WbvmZaXT9gXgbtpMki",
				flexContainer: "ncY6G2KCOOZsDVUyPD9VW"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.m.less": function(e, a, t) {
			e.exports = {
				modal: "_1Tb71v-nk7jl8mM2pfbKoj",
				inner: "_3xEuO2MIqPwCicFbSkMcWI",
				modalHeader: "_36er-mpof_BaWTVN_TWKqT",
				modalFooter: "_2F2fWBQxPjhmwG45FMi25h",
				closeIcon: "HRbaOHBNeGJUV9Qh8Rc37",
				title: "zHtFl3sbU36WRMN6Be40E",
				modalContent: "_2HG1iLo9-CdVYmLLLndnB9",
				awardBadgesContainer: "_1BPRycwQx99vehhnRZXSA3",
				winners: "_2YxzmCK7Mj8BYf7UJgew2t",
				list: "ySZcSwZubFvVMLsm0divW",
				anonymousRank: "_22KEUnU_pUoXK8eMBIslUU",
				loader: "_1lL8d_-Oef0beR_egQRJIB",
				youWon: "_15bmMYA8DM0-goiez42DqV",
				youWonIcon: "_3RSMc-yrpBqx7jTkoUoR-g",
				info: "_252HKsT-2R8kkJ8ODCsnoY",
				infoTitle: "refUN3owiLeJKrQdwqSwy",
				infoDesc: "CsTUw6jGsvRz_SCQklwY",
				topAwardedIcon: "-dI9fh7gqtv5MBcdLqi6T",
				cta: "_1BimPhzHA4u9JsAYPgBQmK",
				giftIcon: "_3dojyNA2PoZc7SaIZvnjRv"
			}
		},
		"./src/reddit/components/Econ/TopAwardersModal/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/higherOrderComponents/asModal/index.tsx"),
				d = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/constants/modals.ts"),
				i = t("./src/reddit/helpers/correlationIdTracker.ts"),
				m = t("./src/reddit/helpers/trackers/topAwarded.ts"),
				p = t("./src/reddit/hooks/useTracking.ts"),
				u = t("./src/reddit/actions/gold/modals.ts"),
				h = t("./src/reddit/contexts/InsideOverlay.tsx"),
				w = t("./src/reddit/models/Gold/TopAwarded/index.ts"),
				f = t("./src/reddit/selectors/gold/topAwarded.ts"),
				E = t("./src/reddit/selectors/posts.ts"),
				v = t("./src/reddit/selectors/user.ts"),
				x = t("./src/reddit/actions/gold/topAwarded.ts"),
				C = t("./src/reddit/actions/modal.ts"),
				N = t("./src/reddit/components/AwardBadges/index.tsx"),
				_ = t("./src/reddit/components/PostTopMeta/index.tsx"),
				A = t("./src/reddit/controls/Button/index.tsx"),
				M = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = t("./src/reddit/icons/fonts/Gift/index.tsx"),
				b = t("./src/reddit/icons/svgs/Close/index.tsx"),
				k = t("./src/reddit/icons/svgs/TopAwarded/index.tsx");
			var I = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 88 88",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M67.819 86.757h-47.62a5.5 5.5 0 01-5.5-5.5V67.78a5.5 5.5 0 015.5-5.5h1.973a5.497 5.497 0 014.3-5.006l7.03-1.554-.643-2.936c-.262-.243-.521-.487-.778-.73C9.915 48.723 0 36.348 0 12.167a5.5 5.5 0 015.5-5.5h10.148a5.5 5.5 0 015.355-4.243h46.012a5.5 5.5 0 015.355 4.243H82.5a5.5 5.5 0 015.5 5.5c0 24.184-9.91 36.556-32.064 39.886-.256.243-.515.487-.777.73l-.644 2.94 7.014 1.55a5.5 5.5 0 014.3 5.006h1.99a5.5 5.5 0 015.5 5.5v13.478a5.5 5.5 0 01-5.5 5.5z",
					fill: "#000"
				}), r.a.createElement("path", {
					d: "M67.819 67.778v13.479h-47.62V67.778h47.619z",
					fill: "#A06A42"
				}), r.a.createElement("path", {
					d: "M67.545 12.167H82.5c0 21.936-8.538 32.134-29.106 34.684a60.003 60.003 0 006.331-7.426C70.95 36.909 76.494 29.278 76.494 17.3H67.63a39.754 39.754 0 00-.085-5.133zM11.523 17.3c0 11.978 5.527 19.61 16.769 22.125a60.02 60.02 0 006.331 7.426C14.056 44.3 5.5 34.103 5.5 12.167h14.972a39.735 39.735 0 00-.085 5.133h-8.864z",
					fill: "#FEB331"
				}), r.a.createElement("path", {
					d: "M16.269 17.3h4.118a39.733 39.733 0 01.085-5.133h-4.117a43.897 43.897 0 00-.086 5.133zM67.544 12.167c.137 1.745.172 3.456.086 5.133h4.117a44.32 44.32 0 00-.083-5.133h-4.12zM28.292 39.425a25.257 25.257 0 01-6.315-2.327 51.637 51.637 0 002.965 4.734 61.823 61.823 0 002.975 3.795c2.08.513 4.303.926 6.706 1.224a60.007 60.007 0 01-6.331-7.426zM66.045 37.092c-1.87.987-3.94 1.8-6.32 2.333a60.007 60.007 0 01-6.331 7.426 57.435 57.435 0 006.706-1.224 62.408 62.408 0 002.99-3.813 51.472 51.472 0 002.955-4.722z",
					fill: "#A06A42"
				}), r.a.createElement("path", {
					d: "M67.63 17.3c-.359 8.008-3.096 15.349-7.905 22.125a60.02 60.02 0 01-6.33 7.426 79.536 79.536 0 01-3.235 3.046l-2.19 10.01 12.371 2.738v5.133H27.66v-5.133l12.389-2.738-2.19-10.01a79.536 79.536 0 01-3.235-3.046 60.028 60.028 0 01-6.33-7.426c-4.809-6.776-7.547-14.117-7.906-22.125a39.734 39.734 0 01.085-5.133c.103-1.386.291-2.806.531-4.244h46.012c.24 1.438.427 2.858.53 4.244.137 1.745.171 3.456.086 5.133z",
					fill: "#FEB331"
				}), r.a.createElement("path", {
					d: "M48.212 43.095c.875-.782 6.688-6.003 9.052-9.813 8.184-13.195 5.99-24.246 5.804-25.359H34.623c-.435 7.939 1.651 18.806 5.581 27.482 3.214 7.095 5.63 18.961 5.63 18.961l2.378-11.271z",
					fill: "#FFD635"
				}), r.a.createElement("path", {
					d: "M47.366 35.734c5.776-8.664 9.212-17.356 8.648-27.81H42.538c-1.3 9.27 1.737 18.54 4.827 27.81z",
					fill: "#FFF1B6"
				}), r.a.createElement("path", {
					d: "M40.047 59.907L27.66 62.645H60.34L47.97 59.907h-7.923z",
					fill: "#FFD635"
				}), r.a.createElement("path", {
					d: "M67.015 8.354c-3.835 1.297-7.669 1.975-11.503 2.432-3.835.495-7.669.628-11.503.683-3.834-.063-7.669-.195-11.503-.692-3.834-.459-7.669-1.133-11.503-2.423v-.367l23.006-.183 23.006.183v.367z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M54.9 21.778c2.19 0 3.964-2.649 3.964-5.916 0-3.267-1.774-5.916-3.963-5.916-2.19 0-3.964 2.649-3.964 5.916 0 3.267 1.775 5.916 3.964 5.916z",
					fill: "#fff"
				}), r.a.createElement("path", {
					d: "M43.165 59.203c-.245-4.12-1.642-8.053-3.502-11.636-1.83-3.509-4.684-6.651-6.774-10.425-2.116-3.731-3.995-7.584-4.838-11.82-.901-4.256-.893-8.525-.366-12.72l.365-.037c1.36 4.045 2.159 8.074 3.449 11.833 1.396 3.744 2.387 7.72 4.038 11.38 1.579 3.683 4.115 6.998 5.779 11.034 1.497 3.971 2.456 8.189 2.215 12.391h-.366z",
					fill: "#A06A42"
				}), r.a.createElement("path", {
					d: "M16.355 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366zM82.5 12.766c-.905 1.298-1.81 1.976-2.714 2.432-.904.496-1.809.629-2.713.683-.905-.062-1.81-.195-2.714-.692-.905-.458-1.81-1.133-2.714-2.423V12.4l5.428-.183 5.427.183v.366z",
					fill: "#FFF1B6"
				})),
				j = t("./node_modules/lodash/noop.js"),
				T = t.n(j),
				O = t("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				y = t("./src/reddit/components/UserIcon/index.tsx"),
				B = t("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/Awarder/index.m.less"),
				H = t.n(B);
			const {
				fbt: L
			} = t("./node_modules/fbt/lib/FbtPublic.js"), z = (e, a) => a ? L._("{userName} (you)", [L._param("userName", e)], {
				hk: "vsIHp"
			}) : e;
			var R = function(e) {
					const {
						awarder: a,
						className: t,
						currentUserId: n,
						onCtaClick: s,
						showCta: o
					} = e, {
						rank: c,
						redditor: l,
						score: i
					} = a, m = !l.profile;
					return r.a.createElement("div", {
						className: Object(d.a)(H.a.container, t)
					}, r.a.createElement("div", {
						className: H.a.rank
					}, c || "-"), r.a.createElement(y.a, {
						className: H.a.icon,
						iconUrl: l.icon ? l.icon.url : void 0,
						isNSFW: !!l.profile && l.profile.isNsfw,
						userName: l.name
					}), r.a.createElement("div", {
						className: H.a.text
					}, r.a.createElement("h3", {
						className: H.a.name
					}, m ? l.name : r.a.createElement(O.a, {
						user: l.name,
						tooltipId: "topawarder--userhovercard--".concat(l.name),
						sendHoverCardEvent: T.a
					}, z(l.name, l.id === n))), i > 0 && r.a.createElement("span", {
						className: H.a.score
					}, L._("{score} Coins", [L._param("score", i.toLocaleString())], {
						hk: "xCBGE"
					}))), o && r.a.createElement("button", {
						className: H.a.cta,
						onClick: s
					}, r.a.createElement(g.a, {
						className: H.a.giftIcon
					}), L._("Award", null, {
						hk: "4BW9Zq"
					})))
				},
				U = t("./src/reddit/components/Econ/TopAwardersModal/TopAwardersList/index.m.less"),
				W = t.n(U);
			const F = 8;
			var P = function(e) {
					const {
						awarders: a,
						className: t,
						currentRank: n,
						currentUserId: s,
						hideAddAwardButton: o,
						onGild: c
					} = e;
					return a.length ? r.a.createElement("div", {
						className: Object(d.a)(t, W.a.container)
					}, n && (!n.rank || n.rank > F) && r.a.createElement(R, {
						className: W.a.awarder,
						currentUserId: s,
						awarder: n,
						key: n.redditor.id,
						showCta: !o,
						onCtaClick: c
					}), a.map(e => r.a.createElement(R, {
						className: W.a.awarder,
						currentUserId: s,
						awarder: e,
						key: e.redditor.id,
						showCta: !o && s === e.redditor.id,
						onCtaClick: c
					}))) : null
				},
				G = t("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				S = t("./src/reddit/components/Econ/TopAwardersModal/Winners/Winner/index.m.less"),
				D = t.n(S);
			var X = function(e) {
					const {
						showScore: a,
						awarder: t,
						className: n,
						rank: s
					} = e, o = t && !t.redditor.profile, c = t ? t.redditor.name : "—";
					return r.a.createElement("div", {
						className: Object(d.a)(n, D.a.winner, D.a["winner".concat(s)], {
							[D.a.winnerPlaceholder]: !t
						})
					}, r.a.createElement("div", {
						className: D.a.iconContainer
					}, r.a.createElement("div", {
						className: D.a.iconWithBorder
					}, t && r.a.createElement(y.a, {
						className: D.a.icon,
						iconUrl: t.redditor.icon ? t.redditor.icon.url : void 0,
						isNSFW: !!t.redditor.profile && t.redditor.profile.isNsfw,
						userName: c
					})), r.a.createElement("div", {
						className: D.a.rank
					}, s)), r.a.createElement("h3", {
						className: D.a.name
					}, t && !o ? r.a.createElement(O.a, {
						user: c,
						tooltipId: "topawarderwinner-userhovercard--".concat(c),
						sendHoverCardEvent: T.a,
						wrapperClassName: D.a.hoverCardWrapper
					}, c) : c), t && a && r.a.createElement("div", {
						className: D.a.score
					}, r.a.createElement(G.a, {
						className: D.a.coinIcon
					}), t.score))
				},
				V = t("./src/reddit/components/Econ/TopAwardersModal/Winners/index.m.less"),
				Z = t.n(V);
			var J = function(e) {
					const {
						awarders: a,
						className: t,
						showScores: n
					} = e;
					if (!a.length) return null;
					const s = [a[0], a[1] || void 0, a[2] || void 0];
					return r.a.createElement("div", {
						className: Object(d.a)(t, Z.a.container, {
							[Z.a.flexContainer]: s.length < 3
						})
					}, s.map((e, a) => r.a.createElement(X, {
						showScore: n,
						className: Z.a.winner,
						awarder: e,
						rank: a + 1,
						key: a
					})))
				},
				K = t("./src/reddit/components/Econ/TopAwardersModal/index.m.less"),
				q = t.n(K);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Q
			} = t("./node_modules/fbt/lib/FbtPublic.js"), $ = 7, ee = Object(o.a)(e => e, f.a, f.c, f.e, v.i, (e, a, t, n, r) => {
				if (!a) return {
					anonymousRank: void 0,
					currentPostId: a,
					currentRank: void 0,
					currentUser: r,
					error: t,
					list: void 0,
					pending: n,
					post: null
				};
				const s = Object(E.N)(e, {
						postId: a
					}),
					o = Object(f.b)(e, a),
					c = Object(f.d)(e, a),
					d = [];
				let l, i = -1;
				return c && c.forEach((e, a) => {
					if (!e.redditor.profile) return l = e, void(i = a);
					const t = i < 0 ? e : Object.assign(Object.assign({}, e), {
						rank: e.rank - 1
					});
					d.push(t)
				}), {
					anonymousRank: l,
					currentPostId: a,
					currentRank: o,
					currentUser: r,
					error: t,
					list: d,
					pending: n,
					post: s
				}
			}), ae = Object(s.b)(ee);
			const te = Object(c.a)(ae(Object(h.b)((function(e) {
				const {
					anonymousRank: a,
					currentPostId: t,
					currentRank: o,
					currentUser: c,
					post: d,
					list: h,
					pending: f
				} = e, E = Object(s.c)(), v = Object(p.a)();
				Object(n.useEffect)(() => {
					t && E(Object(x.a)(t))
				}, [t, E]), Object(n.useEffect)(() => {
					t && v(Object(m.c)(t))
				}, [t, v]);
				const j = () => E(Object(C.g)(l.a.ECON_TOP_AWARDERS)),
					T = () => {
						if (t) {
							const e = Object(i.d)(i.a.GildingFlow, !0);
							v(Object(m.b)()), E(Object(u.d)({
								thingId: t,
								correlationId: e
							}))
						}
					};
				if (!t || !d) return j(), null;
				const O = c && c.id === d.authorId,
					y = !d.isGildable || !!O,
					B = d.topAwardedType === w.a.Active,
					H = d.topAwardedType === w.a.Inactive,
					L = !f && !!h && !!h.length,
					z = !f && h && !h.length && d && B;
				return r.a.createElement("div", {
					className: q.a.inner
				}, r.a.createElement("div", {
					className: q.a.modalHeader
				}, r.a.createElement(b.a, {
					className: q.a.closeIcon,
					onClick: j
				}), r.a.createElement("h3", {
					className: q.a.title
				}, Q._("Top Awarders", null, {
					hk: "3hzpI8"
				}))), r.a.createElement("div", {
					className: q.a.modalContent
				}, r.a.createElement("div", {
					className: q.a.awardBadgesContainer
				}, r.a.createElement(N.a, {
					awardsCountInView: $,
					awardsPlaqueStyle: !0,
					hideCta: !0,
					hideTopAwardedBadge: !0,
					tooltipType: _.c.TopAwardedModal,
					thing: d
				})), f && r.a.createElement(M.a, {
					className: q.a.loader,
					sizePx: 60
				}), L && H && o && 1 === o.rank && r.a.createElement("div", {
					className: q.a.youWon
				}, Q._("You won 1st place!", null, {
					hk: "1MxirM"
				}), r.a.createElement(I, {
					className: q.a.youWonIcon
				})), L && r.a.createElement(J, {
					className: q.a.winners,
					awarders: h,
					showScores: H
				}), L && H && (!o || o && 1 !== o.rank) && r.a.createElement("div", {
					className: q.a.info
				}, r.a.createElement("h3", {
					className: q.a.infoTitle
				}, Q._("Top Awarded Post", null, {
					hk: "1BJ1We"
				})), r.a.createElement("span", {
					className: q.a.infoDesc
				}, Q._("This is a historic Top Awarded post. Give Awards to newer posts to add your name to the list!", null, {
					hk: "2U5vPa"
				})), r.a.createElement(k.a, {
					className: q.a.topAwardedIcon
				})), z && r.a.createElement("div", {
					className: q.a.info
				}, r.a.createElement(k.a, {
					className: q.a.topAwardedIcon
				}), r.a.createElement("h3", {
					className: q.a.infoTitle
				}, Q._("Get on the board", null, {
					hk: "RVDeW"
				})), r.a.createElement("span", {
					className: q.a.infoDesc
				}, Q._("Award publicly and your username will show up on this leaderboard!", null, {
					hk: "3reZYa"
				})), r.a.createElement(A.f, {
					className: q.a.cta,
					onClick: T
				}, r.a.createElement(g.a, {
					className: q.a.giftIcon
				}), Q._("Give Award", null, {
					hk: "2sa45i"
				}))), L && d && B && r.a.createElement(P, {
					awarders: h,
					className: q.a.list,
					currentRank: o,
					currentUserId: c && c.id,
					hideAddAwardButton: y,
					onGild: T
				}), !f && B && a && r.a.createElement("div", {
					className: q.a.anonymousRank
				}, Q._("Anonymous redditors have awarded for {score} Coins", [Q._param("score", a.score.toLocaleString())], {
					hk: "11BYuy"
				}))), r.a.createElement("div", {
					className: q.a.modalFooter
				}))
			}))));
			a.default = e => r.a.createElement(te, Y({}, e, {
				className: Object(d.a)(e.className, q.a.modal)
			}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = t("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = t("./src/reddit/components/TrackingHelper/index.tsx");
			a.a = Object(c.c)(e => {
				const a = "".concat(e.tooltipId, "-hover-id");
				return r.a.createElement(s.a, {
					className: e.wrapperClassName,
					hoverId: a,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, r.a.createElement(o.a, {
					className: e.className,
					hoverId: a,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, a, t) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n);
			a.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, a, t) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				c = t.n(o);
			a.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), r.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), r.a.createElement("path", {
				className: Object(s.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), r.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), r.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), r.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), r.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconTopAwardersModal.9e147b5b750ce1d6b62e.js.map